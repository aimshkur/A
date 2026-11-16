# Architecture

## Proposed system boundaries
1. **Web app:** Next.js + TypeScript, Arabic RTL, PWA-ready.
2. **API:** FastAPI, versioned under `/api/v1`.
3. **Database:** PostgreSQL for users, workspaces, vehicles, jobs, permissions and audit records.
4. **Object storage:** originals and derived outputs in separate immutable/versioned object keys.
5. **Queue and workers:** Redis-backed job queue for image/video processing and long-running skills.
6. **AI adapters:** provider-neutral interfaces for local and cloud models.
7. **Observability:** structured logs, job traces, health checks, usage and cost metrics.

## Request flow
Browser -> API authentication/authorization -> validate request -> create job + audit event -> queue -> worker executes approved steps -> store output/version -> update job -> browser polls/subscribes -> user reviews and approves export/share.

## Data model (initial domain)
- organizations
- users
- organization_members
- vehicles
- media_assets
- media_versions
- studio_projects
- editing_jobs
- editing_job_steps
- editing_results
- result_reviews
- skill_definitions
- workflow_runs
- approval_requests
- integration_connections
- usage_events
- audit_logs

## API conventions
- Prefix: `/api/v1`.
- JSON contracts with validation.
- Consistent error envelope and request IDs.
- Pagination for collections.
- Explicit ownership checks on every organization-scoped resource.
- Uploads use short-lived signed URLs when object storage is configured.

## Job lifecycle
`queued -> validating -> running -> awaiting_review -> completed`
Terminal/exception states: `failed`, `cancelled`, `rejected`.
Every transition records actor/system, timestamp, reason, and relevant step.

## Deployment boundary
The web app, API, and persistent workers are separate deployable units. Do not assume a basic shared-hosting plan can run GPU inference or persistent background workers. Local development should remain possible with Docker Compose when the scaffold lands.
