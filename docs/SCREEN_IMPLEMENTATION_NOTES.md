# Maharty AI — Screen Implementation Notes
## Implemented design slice
- Home workspace: task-first, Arabic RTL, light-first, mobile bottom navigation, clear shortcuts, honest empty recent-work state.
- Vehicle background-removal studio: upload affordance with local image preview, quick/pro modes, background selection, advanced options, result comparison layout, and transparent processing-not-ready state.
- Mobile and desktop layouts are included in CSS breakpoints.
## Integrity and honesty
- The source image is previewed locally only; it is not uploaded to a server.
- The result pane is explicitly a placeholder. No AI segmentation or background replacement is claimed.
- Processing action remains disabled until an actual image engine/API is connected.
- Plate masking is presented only as optional privacy masking, not as a way to conceal vehicle damage or alter vehicle identity.
## Follow-up implementation
1. Connect a local or server-side segmentation pipeline (e.g. reviewed rembg/ONNX or vehicle-specific model) behind an API.
2. Store immutable original and derived version separately.
3. Add genuine output comparison, export, and processing job states.
4. Add licensed, real background assets and verified sample photos.
