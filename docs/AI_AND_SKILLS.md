# AI Assistants, Skills and MCP

## Principle
An assistant is an orchestrator with bounded permissions. A skill is a documented capability with a typed contract. MCP is an optional tool-connection protocol; it is not a substitute for authorization, validation, or audit logging.

## Skill manifest (concept)
Each skill declares:
- stable id, display name and description
- version and maintainer
- input/output schema
- required permissions and data categories
- execution mode: local, remote, or human-assisted
- estimated resource/cost class
- timeout, retry policy and cancellation support
- provenance, license and security review status

## Initial specialist roles
- Vehicle Intake Assistant: extracts only visible/supplied facts and flags uncertainty.
- Photo Studio Assistant: prepares an image-editing plan and runs approved transformations.
- Listing Writer: drafts copy from verified vehicle fields.
- Quality Reviewer: checks image and listing outputs against policy.
- Workflow Coordinator: sequences skills and requests human approval at boundaries.
- Workspace Admin Assistant: summarizes jobs, usage, and operational issues.

These are product roles, not claims that autonomous agents are already implemented.

## Execution rules
- Validate all tool arguments server-side.
- Use allowlists for tools and destinations.
- Scope credentials to the minimum required permissions.
- Never expose secrets to prompts or model output.
- Require approval for external side effects.
- Record tool name, version, input hash, output reference, actor, and outcome.
- Apply timeouts, rate limits, budgets, retries and cancellation.
- Treat tool output and retrieved content as untrusted data.

## Model strategy
Start with existing models and adapters. Evaluate quality, latency, license, hardware requirements, and per-task economics. Fine-tuning may be considered only when representative lawful data and measurable evaluation gains exist. Training a foundation model from scratch is not an MVP requirement.
