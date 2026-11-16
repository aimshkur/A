"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

const suggestions = [
  { title: "إزالة خلفية السيارة", desc: "اعزل السيارة عن المكان المحيط بها وجهّزها للتصميم.", href: "/studio/background-removal", icon: "◫", tone: "mint" },
  { title: "تجهيز صور الإعلان", desc: "وحّد مقاس الصور واختر خلفية مناسبة للعرض.", href: "/studio/background-removal", icon: "▧", tone: "sand" },
  { title: "إنشاء إعلان سيارة", desc: "اكتب إعلاناً اعتماداً على البيانات التي تدخلها.", href: "/studio/background-removal", icon: "✎", tone: "blue" },
];

export default function HomePage() {
  const [task, setTask] = useState("");
  const [mode, setMode] = useState<"quick" | "pro">("quick");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <main className="app-shell">
      <aside className="side-rail">
        <Link href="/" className="brand-lockup">
          <span className="brand-symbol">م</span>
          <span><b>مهارتي</b><small>MAHARTY AI</small></span>
        </Link>
        <div className="rail-label">مساحة العمل</div>
        <nav className="rail-nav" aria-label="التنقل الرئيسي">
          <Link className="rail-link active" href="/"><span>⌂</span> الرئيسية</Link>
          <Link className="rail-link" href="/studio/background-removal"><span>◫</span> استوديو الصور</Link>
          <a className="rail-link is-muted" href="#vehicles"><span>▦</span> السيارات <small>قريباً</small></a>
          <a className="rail-link is-muted" href="#tasks"><span>◷</span> المهام <small>قريباً</small></a>
          <a className="rail-link is-muted" href="#more"><span>•••</span> المزيد</a>
        </nav>
        <div className="rail-bottom">
          <div className="mini-assistant"><span className="bot-face">✦</span><div><b>مساعد مهارتي</b><small>جاهز يساعدك تبدأ</small></div><i /></div>
          <div className="profile-chip"><span className="profile-avatar">م</span><span><b>مساحة العمل</b><small>حساب تجريبي محلي</small></span><span className="profile-dots">•••</span></div>
        </div>
      </aside>

      <div className="main-column">
        <header className="mobile-header">
          <Link href="/" className="brand-lockup"><span className="brand-symbol">م</span><span><b>مهارتي</b><small>MAHARTY AI</small></span></Link>
          <button className="icon-button" aria-label="الإشعارات">♧</button>
        </header>
        <header className="desktop-topline">
          <div><span className="crumb">مساحة العمل</span><span className="crumb-sep">/</span><b>الرئيسية</b></div>
          <div className="top-actions"><span className="workspace-pill"><i /> مساحة عملي</span><button className="icon-button" aria-label="الإشعارات">♧</button><span className="profile-avatar">م</span></div>
        </header>

        <section className="home-intro">
          <div className="intro-copy">
            <span className="overline"><i /> مساحة عمل السيارات الذكية</span>
            <h1>إيش تبغى تنجز <em>اليوم؟</em></h1>
            <p>اكتب طلبك بطريقتك. مهارتي ترتّب لك الخطوات والأدوات، وتخليك تراجع النتيجة قبل اعتمادها.</p>
          </div>
          <div className="intro-orbit" aria-hidden="true"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core"><span>م</span></div><i className="orbit-spark spark-one">✦</i><i className="orbit-spark spark-two">✧</i></div>
        </section>

        <section className="task-composer">
          <div className="composer-top"><span className="composer-mark">✦</span><div><b>خلّنا نبدأ بمهمتك</b><small>اكتب النتيجة اللي تبغاها، مو اسم الأداة</small></div><span className="secure-note">أنت تراجع قبل التنفيذ</span></div>
          <textarea ref={inputRef} value={task} onChange={(e) => setTask(e.target.value)} placeholder="مثال: احذف خلفية صور السيارة وخليها في استوديو أبيض..." aria-label="اكتب المهمة التي تريد تنفيذها" />
          <div className="composer-bottom">
            <div className="composer-tools"><button type="button" onClick={() => document.getElementById("home-upload")?.click()}>＋ <span>إرفاق صورة</span></button><input id="home-upload" type="file" accept="image/*" hidden /><span className="mode-switch"><button className={mode === "quick" ? "selected" : ""} onClick={() => setMode("quick")} type="button">سريع</button><button className={mode === "pro" ? "selected" : ""} onClick={() => setMode("pro")} type="button">احترافي</button></span></div>
            <Link className={task.trim() ? "primary-button" : "primary-button soft-disabled"} href={task.trim() ? `/studio/background-removal?task=${encodeURIComponent(task.trim())}` : "#suggested"} onClick={() => { if (!task.trim()) inputRef.current?.focus(); }}>راجع خطة التنفيذ <span>←</span></Link>
          </div>
          <div className="composer-hint">لا يبدأ أي نشر أو إرسال أو إجراء خارجي بدون موافقتك.</div>
        </section>

        <section className="section-block" id="suggested">
          <div className="section-title-row"><div><span className="overline">اختصارات واضحة</span><h2>ابدأ من مهمة جاهزة</h2></div><span className="section-caption">اختر النتيجة اللي تحتاجها</span></div>
          <div className="shortcut-grid">
            {suggestions.map((item, index) => <Link href={item.href} className="shortcut-card" key={item.title}><div className={"shortcut-icon " + item.tone}>{item.icon}</div><span className="shortcut-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="shortcut-go">افتح المهمة <b>←</b></span></Link>)}
          </div>
        </section>

        <section className="section-block recent-block" id="tasks">
          <div className="section-title-row"><div><span className="overline">ترجع تكمل من هنا</span><h2>أعمالك الأخيرة</h2></div><span className="section-caption">تظهر هنا أعمالك بعد حفظها</span></div>
          <div className="empty-work"><div className="empty-art"><span>▧</span><i>✦</i></div><div><b>لسه ما عندك أعمال محفوظة</b><p>ابدأ بأول صورة أو مهمة، وبتلقى نتائجك هنا للرجوع لها.</p></div><Link href="/studio/background-removal" className="outline-button">جرّب استوديو الصور <span>←</span></Link></div>
        </section>

        <footer className="app-footer"><span>مهارتي AI</span><span>مساحة عملك للسيارات — نسخة تطويرية</span></footer>
      </div>
      <nav className="mobile-bottom-nav" aria-label="التنقل"><Link className="current" href="/"><span>⌂</span>الرئيسية</Link><Link href="/studio/background-removal"><span>◫</span>الاستوديو</Link><a href="#tasks"><span>◷</span>المهام</a><a href="#more"><span>•••</span>المزيد</a></nav>
    </main>
  );
}
