# Delivery Roadmap

This roadmap is a sequence of acceptance-gated phases. A phase is complete only when its code exists, setup is documented, and its checks pass.

## Phase 0 — Foundation (current)
- Product scope, architecture, safety, UX and source-register documentation.
- Repository conventions, environment example, CI and minimal runnable app scaffold.
- Acceptance: clean install/build/test from documented commands; no secrets committed.

## Phase 1 — Working web shell
- Arabic RTL responsive app shell.
- Task-first home, navigation, accessible states, empty/loading/error states.
- Vehicle workspace and asset upload interface.
- Acceptance: keyboard-accessible core navigation and mobile layout checks.

## Phase 2 — Vehicle records and media storage
- Workspace and membership model.
- Vehicle CRUD, original media upload, metadata and immutable asset references.
- Acceptance: authorization tests, upload validation, storage lifecycle tests.

## Phase 3 — Image Studio MVP
- Image inspection and vehicle-preserving segmentation/compositing pipeline.
- Background presets, crop, controlled lighting, optional plate masking.
- Before/after review, version history, export.
- Acceptance: benchmark set, quality checklist, failure handling, original preservation.

## Phase 4 — Ads and share pages
- Structured vehicle facts as the source of truth.
- Ad copy generation grounded only in supplied facts.
- Shareable listing pages and manual share links.
- Acceptance: no fabricated specs; preview and approval before publishing.

## Phase 5 — Skills and orchestration
- Skill manifest, permissions, typed inputs/outputs, job state machine.
- Plan preview, approvals, audit log, retry and cancellation.
- Acceptance: denied actions remain blocked; deterministic tests for workflows.

## Phase 6 — Video and team features
- Template-based video assembly, team roles, activity, reporting.
- Acceptance: queue limits, cost visibility, export validation.

## Phase 7 — Integrations and production
- Opt-in Google integrations, deployment environments, monitoring, backups.
- WhatsApp sharing via compliant links unless an approved official integration is configured.
- Acceptance: security review, restore drill, operational runbook, cost controls.

## Out of scope until separately approved
- Unofficial WhatsApp Web automation.
- Unlimited free inference/storage.
- Autonomous external publishing or purchases without approval.
- Training a foundation model from scratch.
