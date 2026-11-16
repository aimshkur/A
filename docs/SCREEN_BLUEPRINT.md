# Maharty AI — Screen Blueprint

Status: **Approved product screen plan**  
This file is the screen-level source of truth. Build screens from this plan; do not invent a replacement dashboard.

## Product navigation

Primary destinations:
1. الرئيسية — task-first home.
2. استوديو الصور — vehicle photo preparation.
3. السيارات — vehicle records and inventory.
4. المهام — running, waiting, completed, and failed work.
5. المزيد — الإعلانات، المساعدون والمهارات، صفحات العرض، الملفات، التكاملات، الإعدادات.

Owner/admin area is separate from the everyday workspace and appears only to authorized roles.

## Screen 01 — Home / الرئيسية

Purpose: help a first-time user understand what Maharty does and start a real task immediately.

Content order:
1. Compact brand header: Maharty mark, workspace switcher (when applicable), notifications/profile.
2. Greeting and one-sentence promise: "إيش تبغى تنجز اليوم؟"
3. Dominant task composer with text input, attach image/file, voice affordance when implemented, and primary "راجع خطة التنفيذ" action.
4. Suggested task chips with concrete outcomes: "جهّز صور السيارة"، "اكتب إعلان سيارة"، "أنشئ صفحة عرض"، "رتّب صور المعرض".
5. Recent work: thumbnail, task title, state, date, continue/review action.
6. A small "فريق المساعدين" strip showing a few useful assistants with plain-language job descriptions. Robot art is optional and small.

Mobile: single column; composer first; suggestions horizontally scrollable; recent jobs as compact rows; bottom navigation.  
Desktop: centered work canvas; compact navigation rail; recent jobs beside or below composer; no oversized hero illustration.

## Screen 02 — Task plan / خطة التنفيذ

Purpose: explain what the assistant understood before it runs.

Show:
- User request in their own words.
- Interpreted task title and expected deliverables.
- Steps the system intends to run.
- Inputs found and missing inputs.
- Selected skills/tools, with brief reasons.
- Cost/credits and external provider notice when known.
- Approval toggles for any external action.

Actions: "ابدأ التنفيذ"، "عدّل الطلب"، "إلغاء". Never start a consequential external action without approval.

## Screen 03 — Job progress / جاري العمل

Purpose: make background work understandable without pretending.

Show:
- Task title and current state.
- Step timeline with completed/current/pending/failed steps.
- Which named assistant/skill is working and what it is doing.
- Real progress only when the worker provides measurable progress; otherwise use honest stage labels.
- Cancel/retry where supported.
- Link back to the task and notification preference.

Robot presence: a small expressive robot can identify the active specialist, but the step list is the primary status source.

## Screen 04 — Result review / مراجعة النتيجة

Purpose: let the user inspect and approve the deliverable.

Show:
- Large result preview.
- Original/result comparison for image tasks.
- Version selector/history.
- Quality notes and any limitations.
- Output layout control for image grids: 1, 2, or 3 columns where viewport allows.
- Save, download, copy, share, and "اطلب تعديل" actions as supported.

Never auto-publish. Keep the original intact.

## Screen 05 — Vehicle Studio / استوديو الصور

Purpose: a guided, professional vehicle-photo workflow.

Flow:
1. Upload from camera/gallery/files or select an existing vehicle.
2. Show uploaded thumbnails and preserve originals.
3. Analyze image quality and vehicle angle; display findings, not invented certainty.
4. Choose "سريع" with safe defaults or "احترافي" for manual controls.
5. Choose background/presentation, crop, lighting, optional plate masking, and optional dealership logo.
6. Preview before processing; clearly show any paid/external step.
7. Process and move to Result Review.

Mobile: upload and preview are full-width; controls are grouped into clear steps; sticky bottom action.  
Desktop: preview takes the main canvas; settings sit in a narrow side panel; before/after remains easy to compare.

## Screen 06 — Vehicles / السيارات والمخزون

Purpose: organize vehicle records and their media.

Show:
- Search and filters (available, reserved, sold, draft).
- Vehicle cards with photo, make/model/year only when supplied, and current status.
- Add vehicle, open details, attach photos, create ad.
- List/grid view; mobile defaults to cards.

No fake inventory. Empty state explains how to add the first vehicle.

## Screen 07 — Ad Builder / منشئ الإعلانات

Purpose: create truthful, useful vehicle listings.

Show:
- Vehicle facts form or import from an existing vehicle record.
- Generated Arabic copy and optional English version.
- Editable title, description, features, and contact method.
- Missing/uncertain facts clearly flagged.
- Preview of the public listing.
- Copy/share/export actions; publish only through supported authorized integrations and explicit approval.

## Screen 08 — Public vehicle/showroom page / صفحة العرض

Purpose: share a professional page for one vehicle or a dealership.

Show:
- Verified vehicle photos and factual details.
- Seller/dealership identity and contact action.
- Map/location only when explicitly supplied and approved.
- Responsive gallery and shareable URL.
- No fabricated reviews, availability, or trust badges.

## Screen 09 — Assistants & Skills / المساعدون والمهارات

Purpose: help users understand capabilities by outcome, not abstract persona names.

Each card must show:
- Clear Arabic name ("مجهّز صور السيارات", not a vague codename).
- One-sentence job description.
- Required input and expected output.
- Availability, provider, and estimated cost if known.
- "جرّب المهمة" action.

A visual robot identity may reinforce the role. A searchable accessible list is mandatory even if a future visual skills map is added.

## Screen 10 — Tasks / المهام

Purpose: one place for all work.

Tabs/filters: الكل، قيد التنفيذ، يحتاج موافقتك، مكتمل، تعذّر.  
Each row: task, state, created time, assistant/skill, result shortcut, retry/cancel when supported.

## Screen 11 — My Space / مساحتي

Purpose: personal work assets.

Sections: ملفاتي، سياراتي، قوالبي، شعارات المعرض، محفوظاتي.  
Show storage usage only when real measurements are available. Clear upload, rename, organize, download, and delete behavior.

## Screen 12 — Owner Command Center / مركز المالك

Purpose: let the owner supervise operations, not micromanage decorative robots.

Sections:
- Platform health and real service status.
- Work queue and stuck/failed jobs.
- Approvals awaiting owner action.
- Assistant/skill availability and error rates.
- Usage and provider costs based on actual metering.
- Product milestones and release checklist.
- Marketing campaigns and growth tasks only when those modules exist.

Use clear tables and action queues. A small robot team illustration can be used as a status motif, not as the entire dashboard.

## Screen 13 — Integrations / الربط

Purpose: manage external providers safely.

Show each connector's status, permissions requested, data accessed, last sync, disconnect/reconnect, and known costs. Google services are opt-in. WhatsApp must use supported official APIs or compliant share links; do not implement unofficial QR reverse engineering.

## Screen 14 — Settings & plans / الإعدادات والاشتراك

Purpose: workspace profile, language, theme preference, notifications, security, billing, and plan limits. Never claim unlimited free use. Display plan/usage data only when billing and metering are real.

## Shared screen states

Every screen must define:
- Loading skeleton.
- First-use empty state.
- Recoverable error and retry.
- Offline/connection-lost state where relevant.
- Permission denied / sign-in required.
- Success confirmation.
- Disabled/not-yet-implemented controls must be visibly disabled or omitted.

## Build order

Milestone 1 (first complete experience):
- Screen 01 Home.
- Screen 02 Task Plan (can initially use clearly labeled local/demo task interpreter).
- Screen 03 Job Progress (honest simulated demo only until worker exists).
- Screen 04 Result Review (real local sample assets only, no fake AI claims).
- Screen 05 Vehicle Studio upload/preview shell.

Milestone 2:
- Vehicles, Ad Builder, Tasks, My Space.

Milestone 3:
- Assistants/Skills registry, Owner Command Center, Integrations, plans.

Do not build all 14 as empty menu links. Complete one vertical workflow end-to-end before expanding.
