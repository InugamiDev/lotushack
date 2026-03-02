"use client";

import { useState, useEffect } from "react";

export function useImagePreloader(urls: string[]): { allLoaded: boolean } {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (urls.length === 0) {
      setAllLoaded(true);
      return;
    }

    let cancelled = false;

    const loadImage = (src: string): Promise<void> =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't block on failures
        img.src = src;
      });

    const timeoutPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, 5000)
    );

    Promise.race([
      Promise.all(urls.map(loadImage)),
      timeoutPromise,
    ]).then(() => {
      if (!cancelled) setAllLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [urls]);

  return { allLoaded };
}
