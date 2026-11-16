"use client";

import "./studio.css";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const backgrounds = [
  { id: "transparent", name: "شفافة", hint: "بدون خلفية", swatch: "checker" },
  { id: "white", name: "استوديو أبيض", hint: "نظيف وبسيط", swatch: "white" },
  { id: "showroom", name: "صالة فاخرة", hint: "عرض احترافي", swatch: "showroom" },
  { id: "dark", name: "استوديو داكن", hint: "مظهر أنيق", swatch: "dark" },
];

export default function BackgroundRemovalPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [mode, setMode] = useState<"quick" | "pro">("quick");
  const [background, setBackground] = useState("transparent");
  const [plateMask, setPlateMask] = useState(false);
  const [logo, setLogo] = useState(false);
  const [columns, setColumns] = useState<1 | 2 | 3>(2);
  const [showSettings, setShowSettings] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) { setPreview(""); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const fileSize = useMemo(() => file ? (file.size / 1024 / 1024).toFixed(1) + " MB" : "", [file]);

  return (
    <main className="studio-page">
      <header className="studio-topbar">
        <Link href="/" className="studio-brand"><span className="brand-symbol">م</span><span><b>مهارتي</b><small>MAHARTY AI</small></span></Link>
        <div className="studio-breadcrumb"><Link href="/">الرئيسية</Link><span>/</span><b>استوديو الصور</b><span>/</span><b>إزالة الخلفية</b></div>
        <Link href="/" className="back-home">رجوع للرئيسية <span>←</span></Link>
      </header>

      <div className="studio-layout">
        <aside className="studio-sidebar">
          <div className="studio-side-heading"><span>استوديو الصور</span><span className="side-spark">✦</span></div>
          <div className="studio-menu-item selected"><span>◫</span><div><b>إزالة الخلفية</b><small>عزل السيارة عن محيطها</small></div></div>
          <div className="studio-menu-item disabled"><span>☼</span><div><b>تحسين الإضاءة</b><small>قريباً</small></div></div>
          <div className="studio-menu-item disabled"><span>▧</span><div><b>تغيير المقاس</b><small>قريباً</small></div></div>
          <div className="studio-tip"><span>✦ نصيحة مهارتي</span><p>صوّر السيارة كاملة ومن زاوية واضحة. هذا يساعد على عزل أدق حول المرايا والجنوط والزجاج.</p></div>
          <div className="studio-safe"><span>✓</span><div><b>أصل الصورة محفوظ</b><small>أي نتيجة مستقبلية تحفظ كنسخة جديدة.</small></div></div>
        </aside>

        <section className="studio-workspace">
          <div className="studio-heading">
            <div><span className="studio-kicker">أداة تجهيز صور السيارات</span><h1>إزالة خلفية السيارة</h1><p>اعزل السيارة عن الخلفية، ثم اختر المظهر المناسب لصورتك.</p></div>
            <div className="mode-control" aria-label="وضع العمل"><button type="button" className={mode === "quick" ? "active" : ""} onClick={() => setMode("quick")}>سريع</button><button type="button" className={mode === "pro" ? "active" : ""} onClick={() => setMode("pro")}>احترافي</button></div>
          </div>

          <div className="studio-columns">
            <div className="studio-main-panel">
              <div className="panel-title-row"><div><b>1. أضف صورة السيارة</b><small>ارفع صورة واضحة للسيارة من جهازك</small></div><span className="step-count">الخطوة 01</span></div>
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} />
              {!file ? <button type="button" className="upload-zone" onClick={() => fileRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const dropped = e.dataTransfer.files?.[0]; if (dropped?.type.startsWith("image/")) setFile(dropped); }}>
                <span className="upload-symbol">↑</span><b>اسحب الصورة هنا أو اضغط للاختيار</b><small>JPG أو PNG أو WebP · اختر صورة واحدة الآن</small><span className="upload-cta">اختر صورة من الجهاز</span>
              </button> : <div className="uploaded-file"><img src={preview} alt="معاينة الصورة الأصلية للسيارة" /><div className="uploaded-meta"><b>{file.name}</b><small>{fileSize} · الصورة الأصلية</small><button type="button" onClick={() => {setFile(null); if(fileRef.current) fileRef.current.value = "";}}>إزالة الصورة</button></div><span className="file-ok">✓</span></div>}

              <div className="panel-title-row preview-title"><div><b>2. معاينة الصورة</b><small>ستظهر هنا مقارنة الأصل والنتيجة بعد ربط محرك المعالجة</small></div><span className="preview-badge">معاينة</span></div>
              <div className="preview-grid">
                <div className="preview-card"><div className="preview-label"><span>الأصل</span><span className="preview-dot original-dot" /></div><div className="preview-image original-image">{preview ? <img src={preview} alt="الصورة الأصلية" /> : <div className="preview-empty"><span>▧</span><small>الصورة الأصلية</small></div>}</div></div>
                <div className="preview-card"><div className="preview-label"><span>بعد إزالة الخلفية</span><span className="preview-dot result-dot" /></div><div className="preview-image checker-bg"><div className="result-placeholder"><span>✦</span><b>النتيجة بتظهر هنا</b><small>ارفع الصورة أولاً، ثم اربط محرك إزالة الخلفية لتجربة المعالجة الفعلية.</small></div></div></div>
              </div>
              <div className="integrity-note"><span>ⓘ</span><p>مهارتي تحافظ على شكل السيارة وتفاصيلها. لا يتم تغيير الجنوط أو الهيكل أو إخفاء الأضرار.</p></div>
            </div>

            <aside className="studio-settings">
              <div className="settings-heading"><div><b>إعدادات الصورة</b><small>{mode === "quick" ? "إعدادات مناسبة لمعظم الصور" : "تحكم إضافي في مظهر الصورة"}</small></div><span>⚙</span></div>
              <div className="setting-section"><div className="setting-label"><b>3. اختر الخلفية</b><small>كيف تحب تظهر السيارة؟</small></div><div className="background-options">{backgrounds.map((bg) => <button type="button" key={bg.id} onClick={() => setBackground(bg.id)} className={"background-option " + (background === bg.id ? "chosen" : "")}><span className={"background-swatch " + bg.swatch}>{bg.id === "transparent" ? "▦" : bg.id === "white" ? "☼" : bg.id === "showroom" ? "⌂" : "◐"}</span><span><b>{bg.name}</b><small>{bg.hint}</small></span><i>{background === bg.id ? "✓" : ""}</i></button>)}</div></div>
              {mode === "pro" && <div className="setting-section advanced-section"><button className="advanced-toggle" type="button" onClick={() => setShowSettings(!showSettings)}><span><b>إعدادات متقدمة</b><small>خيارات إضافية للصورة</small></span><span>{showSettings ? "−" : "+"}</span></button>{showSettings && <div className="advanced-options"><label><input type="checkbox" checked={plateMask} onChange={(e) => setPlateMask(e.target.checked)} /> تمويه لوحة السيارة <small>اختياري للخصوصية</small></label><label><input type="checkbox" checked={logo} onChange={(e) => setLogo(e.target.checked)} /> إضافة شعار المعرض <small>تحتاج رفع ملف الشعار لاحقاً</small></label></div>}</div>}
              <div className="setting-section output-section"><div className="setting-label"><b>طريقة عرض النتائج</b><small>اختر عدد الصور في الصف</small></div><div className="column-selector">{([1,2,3] as const).map((n) => <button type="button" key={n} onClick={() => setColumns(n)} className={columns === n ? "active" : ""}><span>{Array.from({length:n},(_,i)=><i key={i}/>)}</span><b>{n}</b></button>)}</div></div>
              <div className="settings-bottom"><button className="process-button" type="button" disabled={!file}>إزالة الخلفية <span>✦</span></button><small>{file ? "تم اختيار الصورة — المعالجة الفعلية غير مفعّلة بعد" : "اختر صورة لتجهيز المهمة"}</small></div>
            </aside>
          </div>
          <div className="studio-bottom-note"><span>مهارتي AI</span><span>واجهة التصميم جاهزة — محرك المعالجة سيُربط في مرحلة التنفيذ التالية</span></div>
        </section>
      </div>
      <nav className="studio-mobile-nav"><Link href="/">الرئيسية</Link><Link className="active" href="/studio/background-removal">إزالة الخلفية</Link><a href="#settings">الإعدادات</a></nav>
    </main>
  );
}
