# Security and Privacy Requirements

## Identity and access
- Workspace-scoped authorization on every record and file.
- Roles: owner/admin, manager, member; finer permissions may be added by need.
- No public signup enabled by default for private business workspaces.
- Secure password hashing, session rotation, CSRF protection where applicable, and rate limiting.

## Files and media
- Validate MIME type and actual file signature.
- Enforce upload size and pixel limits; protect against decompression bombs.
- Store originals separately from derived outputs.
- Use private buckets and short-lived signed access URLs.
- Strip unnecessary metadata on export where appropriate; retain required provenance internally.
- Malware scanning and retention/deletion policy before production.

## Secrets and integrations
- Never commit API keys, OAuth tokens, service-account files, or passwords.
- Encrypt integration credentials at rest and restrict access.
- Request minimum OAuth scopes and explain why each scope is needed.
- Provide disconnect and data deletion workflows.
- Do not send customer/vehicle media to external providers without clear user choice and disclosure.

## AI and tools
- Treat user prompts, uploaded files, OCR, model outputs, MCP responses and web content as untrusted.
- Use allowlisted tools and strict schemas.
- Prevent prompt injection from granting permissions.
- Require explicit human confirmation for publishing, sending, purchasing, deleting, or changing account settings.
- Maintain an auditable record of high-impact actions.

## Operations
- Separate development, staging and production.
- Backups with tested restoration.
- Dependency and secret scanning in CI.
- Structured logs without sensitive image contents or credentials.
- Incident response and data-retention documentation before launch.
