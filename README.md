# Maharty AI — مهارتي
## Automotive Workspace

Maharty AI is an Arabic-first, mobile-first workspace for automotive businesses and individuals. Its core promise is: **اكتب طلبك، ومهارتي تفهم المهمة وتختار الأدوات والمهارات المناسبة وتنفذها ضمن حدود واضحة.**

> Project status: foundation and product specifications. Features are not considered implemented until code exists and checks pass.

## Product principles
- Arabic RTL by default; responsive and mobile-first.
- Simple task-first experience for everyday users, with an optional professional mode.
- Preserve original vehicle media and maintain traceable versions.
- Never alter vehicle identity, material condition, damage, or safety-relevant details to mislead buyers.
- Local/free-capable workflows first where practical; external AI and storage integrations are optional and disclose their costs.
- Every imported open-source component must have a recorded source, version, license, purpose, and review status.
- No claims of unlimited free usage; compute, storage, and model inference have real costs.
- Human approval for external publishing, spending, account changes, and irreversible actions.

## Product areas
1. **Start / Do the task** — natural-language task entry and guided actions.
2. **Vehicle Studio** — upload, analyze, background replacement, crop, lighting, optional plate masking, logo placement, before/after review, export.
3. **Vehicles & Inventory** — vehicle records, media, status, ownership/workspace.
4. **Ads & Listings** — Arabic/English ad copy, templates, listing pages, sharing.
5. **Video Studio** — short-form vehicle clips and export workflows.
6. **Showroom Pages** — shareable vehicle and dealership presentation pages.
7. **Assistants & Skills** — specialist capabilities with transparent inputs, outputs, permissions, and costs.
8. **Workflows & MCP** — controlled tool orchestration, audit trail, and approvals.
9. **Reports & Admin** — usage, jobs, quality review, team and workspace controls.

## Proposed technical direction
- Web: Next.js + TypeScript, accessible component system, PWA.
- API/services: Python FastAPI for media and AI workloads; typed contracts.
- Data: PostgreSQL; object storage for original and derived media; background job queue for heavy processing.
- AI: provider adapters; local model runtime where suitable; cloud providers opt-in.
- Integrations: Google Drive/Sheets and other Google services only with explicit connection and scoped permissions. WhatsApp initially uses compliant share links; no unofficial automation or paid API assumption.
- Deployment: separate web/API/worker responsibilities. Shared hosting is not assumed to run persistent workers or GPU workloads.

This is a proposed architecture, not a claim that these services are already deployed.

## Repository map
- `docs/PRODUCT_VISION.md` — product scope and principles.
- `docs/ROADMAP.md` — phased delivery and acceptance criteria.
- `docs/ARCHITECTURE.md` — system boundaries and data flow.
- `docs/AI_AND_SKILLS.md` — assistants, skills, MCP, safety and approvals.
- `docs/IMAGE_STUDIO.md` — vehicle image workflow and quality rules.
- `docs/OPEN_SOURCE_REGISTER.md` — candidate tools and license review.
- `docs/SECURITY_PRIVACY.md` — security, privacy and data handling.
- `docs/UX_ARABIC.md` — Arabic RTL and mobile UX requirements.
- `apps/web` — web application (next implementation phase).
- `services/api` — API and media services (next implementation phase).

## Delivery discipline
Each phase must include working code, setup instructions, automated checks, and a verification note. Mock screens and placeholder buttons must be labeled as such. Do not mark a phase complete based only on documentation.

## Local prerequisites (planned)
Node.js LTS, Python 3.11+, Git, and Docker are recommended. Exact versions and commands will be pinned when the application scaffold is added.
