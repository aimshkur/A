# Open-source Register

This is a candidate list, not an approval to bundle or deploy. Before adoption, record exact release/commit, license text, model-weight license, dependencies, maintenance status, security findings, and intended use. Software and model weights can have different terms.

| Candidate | Potential role | Initial license/status note | Review before use |
|---|---|---|---|
| rembg — https://github.com/danielgatis/rembg | Background removal | MIT (verify selected release) | Model provenance, quality, runtime |
| SAM 2 — https://github.com/facebookresearch/sam2 | Segmentation | Apache-2.0 (verify release) | Checkpoint terms, GPU needs |
| Real-ESRGAN — https://github.com/xinntao/Real-ESRGAN | Image enhancement | BSD-3-Clause (verify release) | Model weights and artifacts |
| IOPaint — https://github.com/Sanster/IOPaint | Image inpainting UI/tooling | Repository archived Aug 2025 per prior review; verify current state | Maintenance and dependency risk |
| ComfyUI — https://github.com/comfyanonymous/ComfyUI | Visual image workflow engine | Verify current license and node licenses | Each custom node and model separately |
| Ollama — https://github.com/ollama/ollama | Local model runtime | MIT for software; model licenses separate | Model-specific commercial permissions |
| Flowise — https://github.com/FlowiseAI/Flowise | Workflow/agent prototyping | Apache-2.0 (verify release) | Security, deployment and license |
| MCP Python SDK — https://github.com/modelcontextprotocol/python-sdk | MCP client/server integration | MIT (verify release) | Protocol version and server trust |
| FFmpeg — https://ffmpeg.org/ | Media processing | LGPL by default; optional GPL components change obligations | Build configuration and codec patents |

## Required record for every adopted dependency
- Name, canonical URL, exact version/commit, date reviewed.
- Software license and full license file location.
- Model/checkpoint license and source, if applicable.
- Commercial-use permission and redistribution obligations.
- Security scan and dependency tree.
- Purpose, owner, replacement plan, and approval status.

Do not copy competitor source code, proprietary assets, private data, or outputs obtained without permission.
