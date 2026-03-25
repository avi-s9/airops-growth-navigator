

## Readability Assessment

The text is generally well-structured, but there are legitimate contrast concerns. Here's what I found:

### Current issues

1. **Too-light body text** -- Several places use `text-foreground/50` (50% opacity on #1A1A1A = roughly #8D8D8D) for substantive content that users need to read, not just decorative labels. This fails WCAG AA contrast on the #FAFAF9 background (ratio ~3.5:1, needs 4.5:1).

2. **Specific problem spots:**
   - Confidence note body text: `text-foreground/50` -- this is important content, too light
   - Growth Engine stage tags: `text-foreground/50` -- small text at low contrast
   - "Save for Later" header: `text-foreground/40` -- barely visible
   - Citation Checker empty state & labels: `text-foreground/40` -- too faint for functional UI
   - ROI Calculator slider labels: `text-foreground/30` -- essentially invisible
   - Channel tags in Growth Engine: `text-foreground/50` at 11px -- tiny AND faint
   - Footer "Interactive presentation built with React": `text-foreground/30` -- nearly invisible

3. **`text-foreground/60` and `/70` are borderline** -- Used extensively for card descriptions and secondary body text. At 13-14px these are acceptable but could be slightly stronger.

### Recommended changes

| Current | Change to | Where |
|---------|-----------|-------|
| `text-foreground/30` | `text-foreground/50` | ROI slider range labels, decorative arrows |
| `text-foreground/40` | `text-foreground/50` | Citation Checker labels, "Save for Later" header, placeholder text |
| `text-foreground/50` | `text-foreground/60` | Confidence note body, stage tags, channel tags |
| `text-foreground/60` | leave as-is | Card descriptions (acceptable at body sizes) |
| `text-foreground/70` | leave as-is | Secondary paragraphs (good contrast) |
| `text-foreground/80` | leave as-is | Primary body text (strong) |
| Footer subtext `/30` | `/40` | Still subtle but actually readable |

### Files to touch
- `src/components/GrowthEngine.tsx` -- stage tags `/50`→`/60`, "Save for Later" `/40`→`/50`, channel tags `/50`→`/60`
- `src/components/CitationChecker.tsx` -- labels `/40`→`/50`, empty state `/40`→`/50`
- `src/components/ROICalculator.tsx` -- slider range `/30`→`/50`, arrows `/30`→`/40`
- `src/pages/Index.tsx` -- confidence note `/50`→`/60`, footer subtext `/30`→`/40`
- `src/components/InvestmentDashboard.tsx` -- check for any `/30`-`/40` text on substantive content

### What NOT to change
- Section headers, card titles, hero text -- already strong at full `text-foreground`
- `text-text-secondary` (#6B7280) -- good contrast for its usage
- Decorative elements like arrows between stages -- can stay lighter
- Don't make everything black; the hierarchy of emphasis is well-designed, just needs the floor raised slightly

This is a ~30 min implementation touching 5 files with purely className opacity bumps -- no layout or content changes.

