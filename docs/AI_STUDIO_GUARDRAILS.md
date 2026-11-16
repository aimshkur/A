# Google AI Studio — Maharty Implementation Guardrails

This repository is the project source of truth. Google AI Studio is an implementation assistant, not the product owner or visual designer.

## Mandatory reading order

Before editing any code, read:
1. `README.md`
2. `docs/PRODUCT_VISION.md`
3. `docs/UX_ARABIC.md`
4. `docs/UI_DESIGN_SYSTEM.md`
5. `docs/SCREEN_BLUEPRINT.md`
6. `docs/ARCHITECTURE.md`
7. `docs/ROADMAP.md`
8. Relevant feature specification (for example `docs/IMAGE_STUDIO.md`).

## Non-negotiable rules

- Do not invent a new design system, dashboard, navigation, or screen hierarchy.
- Do not change the approved light-first direction to dark.
- Do not replace the task-first home with a generic analytics dashboard.
- Do not add giant 3D scenes, decorative robot backgrounds, neon/glass effects, parallax, or excessive gradients.
- Do not copy competitor screenshots, brand assets, logos, or proprietary UI.
- Use Arabic RTL by default. Preserve accessible labels and responsive behavior.
- Match the screen purpose, content order, actions, and mobile/desktop rules in `SCREEN_BLUEPRINT.md`.
- Use existing components and tokens. If a new component is needed, extend the system consistently.
- Every visible control must work, or be visibly disabled/labelled as not yet available. No fake buttons.
- Do not fabricate AI output, vehicle facts, progress percentages, usage numbers, ratings, customer counts, or integration states.
- Keep original vehicle images and preserve vehicle identity/condition.
- Require user approval for publishing, spending, sending messages, changing accounts, and irreversible actions.
- Do not add an external API key to source code. Use environment variables and update `.env.example` with placeholders only.
- Do not silently add paid services, dependencies, or provider lock-in.
- Do not delete existing project decisions or rewrite documentation to justify a design change.

## Required workflow for each screen

1. State which screen from `SCREEN_BLUEPRINT.md` is being implemented.
2. List the exact files to change and the intended behavior.
3. Implement only that screen and the reusable components it needs.
4. Verify at 360px mobile and a desktop viewport; check RTL, keyboard focus, and accessible labels.
5. Run typecheck, lint, and production build.
6. Report the exact checks run and any failures.
7. Stop before changing the next screen if the implementation conflicts with the blueprint.

## Change-control rule

If you believe a requirement is technically impossible or a design decision is harmful, explain the issue and propose the smallest alternative. Do not unilaterally redesign. The repository owner/maintainer must approve a material change.

## First task

Do not generate a fresh application from scratch. Inspect the existing Next.js app and report:
- Current routes and components.
- Which requirements from Screen 01 are already present.
- Missing pieces compared with Screen 01.
- A small implementation plan for completing Screen 01 using the approved design system.

Wait for approval before expanding scope or replacing the visual direction.
