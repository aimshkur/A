# Vehicle Image Studio Specification

## User flow
1. Upload original image(s).
2. Validate file type, size, dimensions, and safety.
3. Inspect image and identify vehicle region, viewpoint, and uncertain areas.
4. User chooses Quick or Professional mode.
5. Preview the edit plan and any destructive/ambiguous option.
6. Run segmentation and compositing.
7. Review before/after and quality warnings.
8. Save a new version and export; never overwrite the original.

## Pipeline
- Decode and normalize orientation/color profile.
- Vehicle detection/segmentation.
- Preserve vehicle pixels and geometry except for explicitly approved non-deceptive adjustments.
- Background replacement from approved templates or user-supplied background.
- Grounding/contact shadow and restrained lighting match.
- Optional plate masking (privacy feature, not plate replacement).
- Optional brand logo placement in a separate overlay layer.
- Quality checks: edges, wheel/roof/body integrity, reflections, shadows, text/logo artifacts, crop.
- Store derived output with provenance and source asset reference.

## Integrity requirements
- Do not alter make/model identity, body shape, wheels, trim, badges, mileage display, damage, or safety condition.
- Do not remove dents, scratches, warning lights, or other material condition indicators for sales use.
- Never fabricate a vehicle angle or unseen detail.
- Keep the original available for comparison.
- Label AI-edited images where required by product policy or applicable platform rules.

## Review states
- Draft -> processing -> review required -> approved/rejected -> exported.
- Users can reject, request a new variant, or restore the original.

## Initial API candidates
- `POST /api/v1/media/uploads`
- `POST /api/v1/studio/projects`
- `POST /api/v1/studio/projects/{id}/analyze`
- `POST /api/v1/studio/projects/{id}/jobs`
- `GET /api/v1/jobs/{id}`
- `POST /api/v1/results/{id}/review`
- `GET /api/v1/assets/{id}/versions`

These are planned contracts, not implemented endpoints yet.
