# Maharty AI — Approved UI Design System

Status: **Design authority / source of truth**  
Product: مهارتي AI  
Applies to: every screen, component, responsive state, and future feature.

## 1. Design decision

Maharty is a calm, premium, Arabic-first automotive workspace. The approved product UI is **light-first**. The earlier dark owner-dashboard images are historical concept references only; they are not permission to switch the product to a dark interface. A dark theme may be considered later as an optional user preference, never as the default.

The product should feel like a focused professional tool: clear, fast, confident, approachable. It must not look like a generic AI dashboard, a template marketplace, or a sci-fi game.

## 2. Reference hierarchy

Use the references in this order:

1. Latest written product decisions in README and docs.
2. This design system and SCREEN_BLUEPRINT.md.
3. Earlier assistant-created Maharty images: `home-desktop.png`, `home-mobile.png`, `owner-dashboard.png`, `owner-growth-client-delivery.png` — use them for information architecture, clear hierarchy, and the idea of a coordinated robot crew, not for copying their dark theme or dense layout.
4. `منصة مهارتي للصور وسوق السيارات.png` — use as a broad product scope reference (image tools + automotive marketplace + sharing), not as a literal screen.
5. The 185-page PDF `افكار-سوق-تصميم غير مفهوم مزحوم محلي.pdf` — use competitor screenshots only for market analysis and interaction patterns. Do not copy brands, layouts, wording, or assets. Its 3D/dark concepts are exploratory, not approved defaults.

If references conflict, this document and the latest written product decisions win.

## 3. Brand and visual language

- Arabic is the primary language; use RTL consistently.
- Default canvas: warm near-white / very light neutral.
- Surfaces: white cards with subtle neutral borders; restrained elevation.
- Primary accent: deep blue-green / emerald for the main action and active states.
- Secondary accent: blue-to-violet used sparingly for AI identity and progress, never as a full-page gradient.
- Semantic colors: green success, amber attention, red destructive/error. Never rely on color alone.
- Typography: highly legible Arabic sans-serif system stack; clear hierarchy, comfortable line-height, no tiny low-contrast text.
- Radius: consistent medium rounded corners; avoid pill-shaped everything.
- Icons: familiar, consistent line icons with visible text labels for important navigation.
- Photography: real automotive imagery where it helps users understand an outcome. Use genuine before/after examples and never fake a customer result.
- Robot assistants: friendly original robot characters may appear in the work-status area, onboarding, and assistant identity. They are supporting guides, not giant decorative heroes and not substitutes for clear labels.

## 4. Layout rules

- Mobile-first. Design and validate at 360px width before expanding.
- Desktop uses a restrained left/right navigation rail and a clear work canvas; it must not simply stretch mobile cards.
- Main content width should remain readable; avoid excessively wide text blocks.
- One dominant task/action per screen.
- Keep primary action visible without scrolling on common mobile sizes when practical.
- Bottom navigation on mobile for the 4–5 most-used destinations; overflow destinations live in "المزيد".
- Desktop navigation may expose the full section list.
- Use whitespace to group related controls; avoid dense dashboards and decorative panels.
- Forms use progressive disclosure: simple defaults first, advanced settings behind a clearly named control.

## 5. Core interaction patterns

- Task-first: users can type or speak a natural-language request, or choose a clearly named task.
- Before execution, show a concise plan: what will happen, required files, expected output, estimated resource/cost when available, and any external action requiring approval.
- Never silently publish, spend money, contact people, change accounts, or perform irreversible actions.
- Job status is explicit: waiting, analyzing, processing, needs approval, completed, failed, cancelled.
- Results are reviewable objects with preview, before/after, version history, save, download, and share actions as applicable.
- Every assistant/skill card states: what it does, what input it needs, what it returns, and whether it costs credits or calls an external provider.
- Empty, loading, error, offline, and permission-denied states are designed—not left blank.

## 6. Vehicle truth and trust

- Preserve the original file and keep derived versions separate.
- Never alter vehicle identity, trim, wheels, body shape, interior, damage, mileage, or safety-related facts.
- Background, crop, lighting, and presentation edits must not misrepresent the vehicle's condition.
- Plate masking is optional and explicit.
- AI-generated ad copy may only use supplied or verified vehicle facts; uncertain details must be flagged, not invented.

## 7. Accessibility and quality

- Keyboard focus is visible.
- Buttons and touch targets are comfortably tappable (aim for at least 44px).
- Contrast must remain readable in all states.
- Use semantic headings, labels, and accessible names.
- Respect reduced-motion settings; motion is subtle and functional.
- Test Arabic punctuation, Arabic/Latin mixing, numbers, and long dealership names.
- No hover-only functionality.

## 8. Explicitly prohibited

- Inventing a new visual identity on each page.
- Switching to dark mode by default because an old reference was dark.
- Giant robot/3D scenes that push the task below the fold.
- Glassmorphism everywhere, neon glow, parallax, floating clutter, and excessive gradients.
- Generic analytics cards that do not help complete a task.
- Fake data presented as real, fake ratings, fake customer counts, and fake AI progress.
- Decorative buttons with no implemented action.
- Replacing the approved screen structure without updating the blueprint and recording why.

## 9. Definition of design approval

A screen is approved only when:
1. It matches this system and the screen blueprint.
2. Its mobile and desktop layouts are both specified.
3. Every visible control has a defined action or is clearly marked disabled/not yet available.
4. Loading, empty, error, and success states are considered.
5. Arabic RTL and accessibility checks are complete.
