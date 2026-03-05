# LotusHacks — Image Asset Generation Prompts

## Design Language (ALL assets)

Vietnamese folk-art / lacquerware / temple mural painting style. Warm painterly with visible brush strokes, ornamental gold filigree, lotus motifs. NOT anime, NOT photorealistic, NOT concept art, NOT 3D rendered. Think: children's book illustration meets Vietnamese temple mural meets hand-painted signboard.

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| forest-950 | #0a1f1a | Dark backgrounds |
| gold-400 | #d4a843 | Gold accents, ornaments |
| cream-50 | #fef8ed | Parchment interiors |
| jade-500 | #1a5c4a | Frame borders, teal accents |
| sienna-600 | #8b4513 | Text on parchment |
| teal-frame | #1a6b6b | Floating card frame |
| lotus-pink | #e8829a | Lotus flowers |
| lacquer-red | #8b1a1a | Red trim accents |
| wood-brown | #4a2c1a | Dark wood |
| wood-gold | #8b6914 | Light wood |

---

## 1. `hero/bg.avif` — Full-Page Background

**Usage**: Fixed behind entire page, covered by `bg-forest-950/75` + golden/jade gradient overlays. Only faint texture bleeds through. Ambient texture, NOT a scene.
**Dimensions**: 2560x1440, AVIF
**Transparency**: No — full coverage

### COMPOSITION
- Full-bleed abstract dark texture
- NO defined objects, NO scene, NO landscape
- Subtle organic variation across surface — darker center, slightly lighter edges

### ELEMENTS
- **Base surface**: Near-black forest green (#0a1f1a to #0d2b22), like aged dark lacquerware or stained teak wood grain
- **Texture variation**: Very subtle swirls of dark teal (#0f2e2a) and dark moss (#112218), visible only at full brightness
- **Ghost impressions**: Extremely faint circular shapes suggesting lotus leaves — like watermarks embossed into paper, ~5% opacity
- **Ambient light points**: 4-6 very dim warm amber dots (#d4a843 at ~5% opacity) scattered sparingly, like candles behind fog. No glow halos
- **Grain**: Subtle film grain / paper fiber texture across entire surface

### STYLE
- Abstract texture, NOT a painting of a scene
- Think: dark lacquerware surface with 50 years of patina
- Matte finish, no gloss, no reflections
- Overall brightness: very low — 90% of pixels should be near-black

---

## 2. `hero/dragon-hack.png` — Hero Dragon Silhouette

**Usage**: CSS `brightness-0 opacity-30` — pure black silhouette at 30%. Only SHAPE matters.
**Dimensions**: 1024x1024, square, transparent PNG

### COMPOSITION
- Vietnamese dragon (rong) intertwined with block letters "HACK", centered
- Dragon body weaves THROUGH letters: tail wraps H, body arcs over A-C, head above K
- Fills ~80% of canvas

### ELEMENTS
- **Dragon**: Vietnamese imperial style (NOT Chinese/Japanese)
  - Long sinuous body, deer antlers, 4-clawed feet, flowing flame-mane, whiskers, pearl under chin
  - Scale texture bold enough to read as silhouette
- **Letters "HACK"**: Chunky, blocky, slightly beveled 3D edges
  - Dragon body IN FRONT of some letters, BEHIND others
- **Fill elements**: 3-4 lotus flowers and Vietnamese cloud scrollwork (may) filling gaps
- **Colors**: Gold-amber dragon (#d4a843), orange-red accents (#c67a2e), dark brown letters

### STYLE
- Bold flat illustration, high contrast, clean outlines
- Every shape must read as pure black cutout — NO fine hairlines that vanish at 30% opacity
- NOT photorealistic, NOT 3D, NOT anime
- NO background, NO ground plane, NO atmospheric effects

---

## 3. `hero/pagoda-tower.png` — Decorative Pagoda

**Usage**: Available as parallax decorative element on dark background.
**Dimensions**: ~800x1200, portrait 2:3, on black (#0a0a0a) or transparent PNG

### COMPOSITION
- 5-tier Vietnamese pagoda (thap/chua), front elevation, centered

### ELEMENTS
- **Pagoda body**: Golden-amber (#d4a843), 5 tiers stacking upward, each smaller
- **Eaves**: Curved upswept, red-brown (#5c2018) lacquer trim, ornamental tips at corners
- **Windows**: Cream (#fef8ed) panels, warm internal glow
- **Spire**: Golden pointed finial at top
- **Lanterns**: 2-3 small orange Hoi An lanterns from bottom-tier eaves
- **Base foliage**: Dark muted green (#1a3a2a) tropical bushes, loose brushwork, ~30% of height

### STYLE
- Vietnamese temple mural — flat perspective, visible brush strokes, saturated warm colors
- NOT 3D, NOT photorealistic, NOT anime
- Clean edges against dark background — no atmospheric haze

---

## 4. `hero/lantern.png` — Floating Hoi An Lantern

**Usage**: Multiple instances at 36-60px wide, 30-60% opacity, CSS drop-shadow glow + animation.
**Dimensions**: ~400x800, portrait 1:2, transparent PNG

### COMPOSITION
- Single Hoi An silk lantern, isolated, centered
- No string/hook at top, no shadow below, no ground

### ELEMENTS
- **Body**: Teardrop/onion shape, 6-8 visible vertical bamboo ribs
- **Silk panels**: Amber-to-golden-yellow gradient (#d4a843 to #f0c850), brightest center
- **Frame rings**: Dark wood (#4a2c1a) caps at top and bottom
- **Tassel**: Red-orange (#c0452a) silk, 5-6 strands, hanging from bottom ring
- **Light bleed**: Soft warm glow from panels — painted effect, not Photoshop

### STYLE
- Watercolor illustration, soft edges, visible paper texture
- Must be recognizable at 48px wide — keep form simple
- NOT photorealistic, NOT 3D, NOT vector/flat

---

## 5. `ui/floating-card.png` — Stat Card Frame (5:7)

**Usage**: CSS `background-image` on div with `aspect-[5/7]`. Text overlaid in center.
**Dimensions**: Exact 5:7 ratio, transparent PNG
**Critical**: Interior must be blank cream for text readability

### COMPOSITION
- Ornate card FRAME — border with large blank center
- Frame border ~8% of width on each side

### ELEMENTS
- **Outer border**: Teal-blue (#1a6b6b) band with gold (#d4a843) lotus vine scrollwork — repeating buds + curved stems
- **Inner trim**: Thin gold line
- **4 corners**: Small golden lotus flowers on frame border
- **Top center**: Larger golden lotus finial with leaves, extends slightly above top edge
- **Bottom center**: Small golden pedestal/tripod, extends slightly below bottom edge
- **Left/right midpoints**: Small golden lotus brackets
- **Interior**: Blank cream parchment (#fef8ed), subtle paper grain. NO patterns inside

### STYLE
- Vietnamese lacquerware / temple decoration — gold-on-teal
- Painted texture, visible brush strokes
- Frame edges clean and well-defined
- NOT vector, NOT flat design, NOT photorealistic

---

## 6. `ui/card-frame.png` — Track Card Frame

**Usage**: `<Image fill>` with `object-fill` inside `aspect-[1264/1724]`. Text overlaid in cream area.
**Dimensions**: 1264x1724 (~3:4.1), transparent PNG
**Critical**: Large blank cream interior for dark text

### COMPOSITION
- Golden crown at top extending above border
- Lotus band inside top ~15%
- Large blank parchment ~70%
- Tassel ornament at bottom

### ELEMENTS
- **Top crown**: Golden (#d4a843) scrollwork, Vietnamese cloud-spiral (may), ~40% width, centered
- **Lotus header band**: 3 pink lotus flowers (#e8829a) — center largest, two flanking smaller. Watercolor petals, yellow (#f0c850) centers, green leaves between
- **Frame border**: Jade-green (#1a5c4a) ~6% width
- **Corner brackets**: Gold L-shaped ornamental pieces, all 4 corners
- **Interior**: Blank cream (#fef8ed), aged paper texture, completely empty
- **Bottom**: Small golden bracket with single tassel drop, centered

### STYLE
- Vietnamese imperial notice / royal scroll
- Rich but not cluttered, border decoration refined
- NOT vector, NOT flat, NOT photorealistic

---

## 7. `ui/about-sign-arrow.png` — About Section Pagoda Sign

**Usage**: Decorative illustration at `lg:scale-150`. Dark background.
**Dimensions**: ~1024x1536, portrait 2:3, on dark (#0a0a0a) or transparent

### TIER 1 (TOP)
- Small pagoda roof cap with curved eaves, ~30% width
- Crossed ornamental finials above (dinh gate style)

### TIER 2 (MAIN SIGN)
- Large wooden arrow signboard pointing RIGHT
- Dark wood frame (#4a2c1a) with red lacquer (#8b1a1a) edge trim
- Arrow face: blank cream parchment (#fef8ed) — paragraph-sized text area

### FLANKING
- Cherry blossom trees (hoa dao) both sides — pink (#e8829a) + white flowers, brown branches
- Multiple depth layers: branches IN FRONT and BEHIND sign
- 4-6 small Hoi An lanterns on wires, warm amber glow

### TIER 3 (MIDDLE)
- Wooden balcony with flower boxes (red, white, gold flowers)
- Gold cloud ornaments (may) on platform edge

### TIER 4 (BOTTOM)
- Smaller parchment scroll, rolled edges, blank cream (#fef8ed)

### CONNECTING
- Golden spiral wire supports between tiers
- Gold cloud ornaments scattered

### STYLE
- Vietnamese folk art / children's book plate
- Golden wood, pink blossoms, cream parchment, red accents
- NOT concept art, NOT anime, NOT photorealistic

---

## 8. `ui/sponsor-board.png` — Sponsor Section Backdrop

**Usage**: Backdrop behind sponsor logo grid. Interior must be LARGE and CLEAN.
**Dimensions**: ~1400x1050, landscape ~4:3, transparent PNG

### ELEMENTS
- **Top crown**: Golden (#d4a843) scrollwork, lotus bud peak, two thin tassels from ends
- **Frame border**: Jade-green (#1a5c4a) ~5% width — thin, interior needs max space
- **Corner brackets**: Gold, all 4 corners
- **Interior**: Blank cream (#fef8ed), ~85% of area
- **Bottom lotus pond** (KEY):
  - 3-5 pink lotus flowers (#e8829a, #f0b0c0) in various bloom stages from bottom edge
  - Green lily pads (#2d7a5f) on suggested water
  - Leaves/stems extend up sides, OVERLAPPING frame border
  - Some lotus IN FRONT of frame, some BEHIND — layered depth

### STYLE
- Lacquerware painting meets botanical illustration
- Organic overgrowth breaking rigid rectangle = essential
- NOT flat vector, NOT photorealistic

---

## 9. `ui/brush-stroke.png` — Register Button Background

**Usage**: CSS `background-image` behind gold text on hover.
**Dimensions**: ~600x120, landscape ~5:1, transparent PNG

### ELEMENTS
- **Ink**: Pure black (#000000), single left-to-right stroke
- **Shape**: Thicker center, slight taper both ends — organic, NOT rectangle
- **Left edge**: Slightly wet, 2-3 small splatter dots
- **Right edge**: Dry-brush texture, wispy trailing fibers
- **Ratio**: ~5:1, wide enough to contain button text

### STYLE
- Vietnamese calligraphy (thu phap) brush stroke
- One stroke only, bold, confident
- NOT characters, just raw stroke shape

---

## 10-13. Track Icon Bricks

**Shared**: Octagonal LEGO brick, 3D form, 2 studs on top, angled view (front + right side + top). Soft drop shadow. White line-art icon on front face. ~512x512 square, transparent PNG. Painted toy-like style.

### Brick 1 — Enterprise | Navy (#1a2744)
- Icon: briefcase with longevity symbol (tho — circular knot) on face, cloud scrollwork (may) flanking handle

### Brick 2 — Consumer | Orange (#e8652a)
- Icon: smartphone, screen shows lotus flower + water ripples, lotus buds at corners

### Brick 3 — Societies | Green (#1a5c3a)
- Icon: globe with lat/long grid, lotus flowers at N/S/E/W, vine border encircling

### Brick 4 — EdTech | Purple (#3a1a6b)
- Icon: graduation cap with tassel, dragon cloud motifs (rong may) flanking, lotus below

---

## 14. `hero/logo.png` — Brand Logo

**Usage**: Splash screen + OG image. Must read at 64px.
**Dimensions**: 1080x1080, square, transparent PNG

### ELEMENTS
- **Dragon (rong)**: Simplified Vietnamese imperial — serpentine S-curve, antlers, 4-clawed feet, flame-mane
  - Tail wraps H, body over A through C, head above K
  - Body: golden-amber (#d4a843), deeper orange (#c67a2e) scales
- **Letters**: Bold blocky, slight bevel
  - H: crimson (#c0392b), A: golden, C: golden-orange, K: brown-grey (#8b7355)

### STYLE
- Flat 2D, bold shapes, strong silhouette, minimal detail
- Must read at 64px — clear shapes over fine detail
- NOT realistic, NOT anime, NOT 3D

---

## SUGGESTED NEW ASSETS

### 15. `ui/schedule-scroll.png` — Timeline Frame
~1800x600, landscape 3:1, transparent PNG. Horizontal bamboo scroll, wooden rollers with lotus bud finials. Blank cream parchment. Top edge: thin lotus bud vine border.

### 16. `ui/faq-gate-header.png` — FAQ Header
~1600x400, landscape 4:1, transparent PNG. Temple gate header (cong chua), two pillar capitals, curved beam, small pagoda peak center, two hanging lanterns, gold silk ribbons. Gold + jade-green palette.

### 17. `ui/carousel-frame.png` — Sponsor Carousel Frame
~1600x900, landscape 16:9, transparent PNG. Vietnamese lacquerware (son mai) frame. Deep black (#1a1a1a) border with gold lotus vine inlay. Jade inner trim. 4 gold lotus corner flowers. Interior transparent. ~6% border width.
