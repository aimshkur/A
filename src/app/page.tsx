const tasks = [
  {
    number: "01",
    title: "جهّز صور السيارة للإعلان",
    description: "ارفع الصور، واختر مظهراً مناسباً، وراجع النتيجة قبل الحفظ.",
    tag: "استوديو الصور",
  },
  {
    number: "02",
    title: "اكتب إعلاناً من بيانات السيارة",
    description: "حوّل المعلومات المتوفرة إلى إعلان واضح دون اختراع مواصفات.",
    tag: "الإعلانات",
  },
  {
    number: "03",
    title: "رتّب سيارات المعرض",
    description: "تابع السيارات والصور وحالة كل إعلان من مساحة واحدة.",
    tag: "المخزون",
  },
];

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="مهارتي الرئيسية">
          <span className="brand-mark">م</span>
          <span>
            <strong>مهارتي</strong>
            <small>MAHARTY AI</small>
          </span>
        </a>
        <div className="topbar-meta">
          <span className="status-dot" />
          مساحة عملك الذكية
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">مساحة واحدة لشغل السيارات</span>
          <h1>إيش تبغى تسوي <span>اليوم؟</span></h1>
          <p>
            اكتب طلبك بطريقتك، ومهارتي تساعدك تختار الخطوات والأدوات المناسبة.
            ابدأ بمهمة واضحة، وراجع النتيجة قبل اعتمادها.
          </p>
        </div>

        <form className="task-box" action="#" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="task">اكتب المهمة اللي تبغى تنجزها</label>
          <textarea id="task" placeholder="مثال: جهّز صور الكامري بخلفية صالة عرض واكتب لي إعلان..." rows={3} />
          <div className="task-footer">
            <span>المساعد يقترح خطة قبل التنفيذ</span>
            <button type="button" onClick={() => document.getElementById("task")?.focus()}>
              ابدأ بمهمتك <span aria-hidden="true">←</span>
            </button>
          </div>
        </form>
      </section>

      <section className="section-heading">
        <div>
          <span className="eyebrow">ابدأ بسرعة</span>
          <h2>وش نقدر ننجز لك؟</h2>
        </div>
        <span className="section-note">اختر مهمة واضحة للبدء</span>
      </section>

      <section className="task-grid" aria-label="المهام المقترحة">
        {tasks.map((task) => (
          <article className="task-card" key={task.number}>
            <div className="card-top">
              <span className="card-number">{task.number}</span>
              <span className="card-tag">{task.tag}</span>
            </div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button className="text-action" type="button" onClick={() => document.getElementById("task")?.focus()}>
              اكتب طلبك <span aria-hidden="true">←</span>
            </button>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>مهارتي AI</span>
        <span>نسخة تأسيسية قيد التطوير — الوظائف التنفيذية ستضاف وتُختبر على مراحل</span>
      </footer>
    </main>
  );
}
