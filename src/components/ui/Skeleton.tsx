import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
  variant?: "rectangle" | "circle" | "text";
};

export function Skeleton({ className, variant = "rectangle" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-skeleton-pulse bg-forest-800/50",
        variant === "circle" && "rounded-full",
        variant === "rectangle" && "rounded-lg",
        variant === "text" && "h-4 w-full rounded",
        className
      )}
    />
  );
}
