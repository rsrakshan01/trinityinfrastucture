/* ============================================================
   TRINITY INFRASTRUCTURE — scripts.js
   Converted from React/TSX to vanilla JS
   ============================================================ */

/* ── Asset image URLs (Lovable Cloudflare R2 CDN) ── */
const ASSETS = {
  logo:     "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/828d5369-4086-4983-9df2-ddfc6870ce59/logo-trinity.png",
  house1:   "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/b6d3243d-41b7-4af2-9568-e92d44ddb24f/house1.jpeg",
  house2:   "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/0bfbe98a-ea1a-4ce1-8b6c-e96255656682/house2.jpeg",
  house3:   "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/ac0be934-8ac3-4017-843e-176c30688e4b/house3.jpeg",
  house4:   "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/a85323d9-3972-468e-ba24-74365c5a9379/house4.jpeg",
  plotmap:  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/242026db-6e11-4403-8c84-3a3e2d76623c/plotmap.jpeg",
  rainbow:  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5e2cfbf-024b-43bd-af40-e20217a45a50/a/v1/df69eb4b-6af0-4961-ab64-a4d3715ff5f8/177d9d1c-d277-4329-bf88-a2214855d03c/rainbow.jpeg",
};

/* ── Contact info ── */
const PHONE     = "+919080987178";
const WHATSAPP  = "919080987178";
const EMAIL     = "trinityinfra333@gmail.com";

/* ── Bilingual content ── */
const D = {
  en: {
    lang: "en",
    nav: [["About","#about"],["Services","#services"],["Projects","#projects"],["Rainbow Avenue","#rainbow-section"],["Gallery","#gallery"],["Contact","#contact"]],
    book: "Book Site Visit",
    est: "EST. 2021 · MADURAI",
    h1a: "Building Dreams.",
    h1b: "Creating Value.",
    tagline: "TRUTH · TRUST · TECHNOLOGY",
    intro: "Trusted construction & real estate solutions since 2021 — modern homes, DTCP-approved plots, and best-in-class underground structures.",
    viewP: "View Projects",
    contactUs: "Contact Us",
    years: "Years Experience",
    proj: "Projects Delivered",
    clients: "Happy Clients",
    ongoing: "Ongoing Projects",
    whoTitle: "— WHO WE ARE",
    aboutH: "A new standard for modern building in Madurai.",
    aboutP1: "Trinity Infrastructure, founded in 2021 by MG Ravindra David, is a trusted construction and infrastructure company committed to transforming dreams into reality. We specialize in residential construction, DTCP plot development, and expert underground structures including STP and fire tanks.",
    aboutP2: "Our mission: quality construction, transparent dealings, and long-term value for every client.",
    founder: "FOUNDER",
    founderRole: "Founder & Managing Director",
    founderBio: "Since 2021, leading Trinity Infrastructure with a focus on quality construction, DTCP plot development, and pioneering underground structures including STP and fire tanks across Madurai.",
    servTitle: "— OUR SERVICES",
    servH: "End-to-end construction & real estate",
    services: [
      ["Residential Construction","Modern homes built to last with premium materials.","🏠"],
      ["Underground Structures","Expert STP tanks & fire tanks — best-in-class underground build.","🛢"],
      ["Container Projects","Experienced in modern container-based commercial builds.","📦"],
      ["Architectural Planning","Free architectural plans with every project.","📐"],
      ["DTCP Approved Plots","Government-approved layouts for safe investment.","📍"],
      ["Land Development","Site preparation, layouts and infrastructure.","🌳"],
      ["Investment Consulting","Guidance on the best plots for future growth.","💰"],
      ["Turnkey Solutions","Move-in ready homes — designed, built, delivered.","🔑"],
    ],
    projTitle: "— FEATURED PROJECTS",
    projH: "Crafted with precision",
    projects: [
      { name: "The Horizon Villa",    status: "Completed", area: "1350 sqft", date: "2021" },
      { name: "Arora Residence",      status: "Completed", area: "1300 sqft", date: "2022" },
      { name: "Rainbow Avenue · NGO Colony", status: "Ongoing", area: "950 sqft / plot", date: "2025" },
    ],
    flagshipLabel: "— FLAGSHIP DEVELOPMENT",
    rainbowSub: "NGO Colony — Approved DTCP.",
    rainbowPrice: "Premium plots starting from ₹15 Lakhs. Built around modern living.",
    specs: [["12","Plots"],["24 ft","Wide Roads"],["40 ft","Water Table"],["DTCP","Approved"]],
    bookPlot: "Book Your Plot Today",
    waUs: "WhatsApp Us",
    whyTitle: "— WHY CHOOSE TRINITY",
    whyH: "Reasons our clients trust us",
    why: [
      ["Truth","Honest dealings on every project."],
      ["Trust","Built on transparency and proven delivery."],
      ["Technology","Modern methods, lasting results."],
      ["Underground Expertise","Best-in-class STP & fire tank construction."],
      ["DTCP Approved","Safe, legally clean plot investments."],
      ["Quality Materials","ISI-grade steel, chamber bricks, branded fittings."],
      ["Modern Designs","Architecture that ages beautifully."],
      ["Customer First","Lifetime relationship, not a one-time deal."],
    ],
    galTitle: "— PROJECT GALLERY",
    galH: "Spaces we have brought to life",
    testTitle: "— CLIENT VOICES",
    testH: "What our families say",
    testimonials: [
      ["Professional team, transparent process, and excellent quality. Trinity delivered exactly on time.","Gopal","VIT — Container Project"],
      ["Our Horizon Villa was the first Trinity home in 2021 — still flawless. Honest team, honest work.","Owner","Horizon Villa · 2021"],
      ["From plan to handover every step was managed beautifully. Our dream home is finally real.","Arora Family","Arora Residence · 2022"],
    ],
    bookTitle: "— BOOK A SITE VISIT",
    bookH: "Walk the site with us",
    bookP: "Tell us when you'd like to visit. Our team will confirm within an hour.",
    getTitle: "— GET IN TOUCH",
    getH: "Let's build together",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    chat: "Chat instantly",
    email: "Email",
    submit: "Book Site Visit",
    nameL: "Full Name",
    mobileL: "Mobile Number",
    emailL: "Email",
    dateL: "Preferred Date",
    interestL: "Project Interested In",
    messageL: "Message",
    underground: "Underground Structures (STP & Fire Tank)",
    container: "Container Project",
    residential: "Residential Construction",
    quickLinks: "Quick Links",
    contact: "Contact",
    founded: "Founded 2021 by MG Ravindra David. Let your dream come true.",
    areaLabel: "Area",
    yearLabel: "Year",
    langBtn: "தமிழ்",
    thankyou: "Thank you! We'll contact you shortly.",
  },
  ta: {
    lang: "ta",
    nav: [["எங்களைப் பற்றி","#about"],["சேவைகள்","#services"],["திட்டங்கள்","#projects"],["ரெயின்போ அவென்யூ","#rainbow-section"],["படத்தொகுப்பு","#gallery"],["தொடர்பு","#contact"]],
    book: "தள வருகை பதிவு",
    est: "தொடக்கம் 2021 · மதுரை",
    h1a: "கனவுகளை கட்டுகிறோம்.",
    h1b: "மதிப்பை உருவாக்குகிறோம்.",
    tagline: "உண்மை · நம்பிக்கை · தொழில்நுட்பம்",
    intro: "2021 முதல் நம்பகமான கட்டுமான மற்றும் ரியல் எஸ்டேட் சேவைகள் — நவீன வீடுகள், DTCP அங்கீகார மனைகள், மற்றும் சிறந்த நிலத்தடி கட்டமைப்புகள்.",
    viewP: "திட்டங்களை பார்",
    contactUs: "தொடர்பு கொள்",
    years: "ஆண்டு அனுபவம்",
    proj: "நிறைவு பெற்ற திட்டங்கள்",
    clients: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    ongoing: "நடப்பு திட்டங்கள்",
    whoTitle: "— நாங்கள் யார்",
    aboutH: "மதுரையில் நவீன கட்டுமானத்திற்கான புதிய தரம்.",
    aboutP1: "Trinity Infrastructure, 2021 ஆம் ஆண்டில் MG ரவீந்திர டேவிட் அவர்களால் தொடங்கப்பட்டது. குடியிருப்பு கட்டுமானம், DTCP மனை மேம்பாடு, மற்றும் STP மற்றும் தீ தண்ணீர் தொட்டிகள் உள்ளிட்ட நிலத்தடி கட்டமைப்புகளில் நிபுணத்துவம்.",
    aboutP2: "எங்கள் நோக்கம்: தரமான கட்டுமானம், வெளிப்படையான பரிவர்த்தனைகள், நீண்டகால மதிப்பு.",
    founder: "நிறுவனர்",
    founderRole: "நிறுவனர் & நிர்வாக இயக்குநர்",
    founderBio: "2021 முதல், Trinity Infrastructure-ஐ தரமான கட்டுமானம், DTCP மனை மேம்பாடு மற்றும் மதுரை முழுவதும் STP & தீ தண்ணீர் தொட்டிகள் உள்ளிட்ட நிலத்தடி கட்டமைப்புகளில் முன்னோடியாக வழிநடத்துகிறார்.",
    servTitle: "— எங்கள் சேவைகள்",
    servH: "முழுமையான கட்டுமான & ரியல் எஸ்டேட்",
    services: [
      ["குடியிருப்பு கட்டுமானம்","தரமான பொருட்களுடன் கட்டப்பட்ட நவீன வீடுகள்.","🏠"],
      ["நிலத்தடி கட்டமைப்பு","STP & தீ தண்ணீர் தொட்டிகள் — சிறந்த நிலத்தடி கட்டுமானம்.","🛢"],
      ["கண்டெய்னர் திட்டங்கள்","நவீன கண்டெய்னர் வணிக கட்டுமானங்களில் அனுபவம்.","📦"],
      ["கட்டிட திட்டமிடல்","ஒவ்வொரு திட்டத்திற்கும் இலவச கட்டிட வரைபடம்.","📐"],
      ["DTCP மனைகள்","பாதுகாப்பான முதலீட்டிற்கான அரசு அங்கீகார மனைகள்.","📍"],
      ["நில மேம்பாடு","தள தயாரிப்பு, தளவமைப்புகள் மற்றும் உள்கட்டமைப்பு.","🌳"],
      ["முதலீட்டு ஆலோசனை","எதிர்கால வளர்ச்சிக்கான சிறந்த மனைகள் பற்றிய வழிகாட்டுதல்.","💰"],
      ["டர்ன்கீ தீர்வுகள்","தயார் நிலையில் வீடுகள் — வடிவமைக்கப்பட்டு, கட்டப்பட்டு, வழங்கப்படும்.","🔑"],
    ],
    projTitle: "— சிறப்பு திட்டங்கள்",
    projH: "துல்லியத்துடன் உருவாக்கப்பட்டது",
    projects: [
      { name: "ஹரிசன் வில்லா",             status: "Completed", area: "1350 sqft", date: "2021" },
      { name: "அரோரா இல்லம்",              status: "Completed", area: "1300 sqft", date: "2022" },
      { name: "ரெயின்போ அவென்யூ · NGO காலனி", status: "Ongoing",   area: "950 sqft / plot", date: "2025" },
    ],
    flagshipLabel: "— முதன்மை திட்டம்",
    rainbowSub: "NGO காலனி — DTCP அங்கீகாரம் பெற்றது.",
    rainbowPrice: "₹15 லட்சத்தில் இருந்து சிறப்பு மனைகள். நவீன வாழ்க்கைக்கு ஏற்றவை.",
    specs: [["12","மனைகள்"],["24 ft","அகலமான சாலைகள்"],["40 ft","நீர் மட்டம்"],["DTCP","அங்கீகாரம் பெற்றது"]],
    bookPlot: "உங்கள் மனையை பதிவு செய்க",
    waUs: "வாட்ஸ்அப் செய்க",
    whyTitle: "— ஏன் ட்ரினிட்டி",
    whyH: "வாடிக்கையாளர்கள் எங்களை நம்புவதற்கான காரணங்கள்",
    why: [
      ["உண்மை","ஒவ்வொரு திட்டத்திலும் நேர்மையான பரிவர்த்தனைகள்."],
      ["நம்பிக்கை","வெளிப்படைத்தன்மை மற்றும் சரியான வழங்கல்."],
      ["தொழில்நுட்பம்","நவீன முறைகள், நீடித்த விளைவுகள்."],
      ["நிலத்தடி நிபுணத்துவம்","சிறந்த STP & தீ தொட்டி கட்டுமானம்."],
      ["DTCP அங்கீகாரம்","பாதுகாப்பான, சட்டப்பூர்வ மனை முதலீடுகள்."],
      ["தர பொருட்கள்","ISI தர எஃகு, செம்பர் செங்கல், தர பொருத்துதல்கள்."],
      ["நவீன வடிவமைப்பு","அழகாக நிலைக்கும் கட்டிடக்கலை."],
      ["வாடிக்கையாளர் முதலில்","வாழ்நாள் உறவு."],
    ],
    galTitle: "— திட்ட படத்தொகுப்பு",
    galH: "நாங்கள் உருவாக்கிய இடங்கள்",
    testTitle: "— வாடிக்கையாளர் கருத்துகள்",
    testH: "எங்கள் குடும்பங்கள் என்ன சொல்கின்றன",
    testimonials: [
      ["தொழில்முறை குழு, வெளிப்படையான செயல்முறை, சிறந்த தரம். Trinity சரியான நேரத்தில் வழங்கியது.","கோபால்","VIT — கண்டெய்னர் திட்டம்"],
      ["எங்கள் ஹரிசன் வில்லா 2021-ல் Trinity-யின் முதல் வீடு — இன்றும் சிறப்பாக உள்ளது.","உரிமையாளர்","ஹரிசன் வில்லா · 2021"],
      ["திட்டத்தில் இருந்து ஒப்படைப்பு வரை ஒவ்வொரு படியும் அழகாக நிர்வகிக்கப்பட்டது.","அரோரா குடும்பம்","அரோரா இல்லம் · 2022"],
    ],
    bookTitle: "— தள வருகை பதிவு",
    bookH: "எங்களுடன் தளத்தை பாருங்கள்",
    bookP: "எப்போது வருவீர்கள் என்று சொல்லுங்கள். ஒரு மணிநேரத்தில் உறுதிசெய்வோம்.",
    getTitle: "— தொடர்பு கொள்ளுங்கள்",
    getH: "ஒன்றாக கட்டுவோம்",
    callNow: "இப்போது அழைக்கவும்",
    whatsapp: "வாட்ஸ்அப்",
    chat: "உடனடி அரட்டை",
    email: "மின்னஞ்சல்",
    submit: "பதிவு செய்க",
    nameL: "முழு பெயர்",
    mobileL: "கைபேசி எண்",
    emailL: "மின்னஞ்சல்",
    dateL: "விருப்ப தேதி",
    interestL: "ஆர்வமுள்ள திட்டம்",
    messageL: "செய்தி",
    underground: "நிலத்தடி கட்டமைப்பு (STP & தீ தொட்டி)",
    container: "கண்டெய்னர் திட்டம்",
    residential: "குடியிருப்பு கட்டுமானம்",
    quickLinks: "விரைவு இணைப்புகள்",
    contact: "தொடர்பு",
    founded: "2021-ல் MG ரவீந்திர டேவிட் அவர்களால் தொடங்கப்பட்டது.",
    areaLabel: "பரப்பு",
    yearLabel: "ஆண்டு",
    langBtn: "EN",
    thankyou: "நன்றி! விரைவில் தொடர்பு கொள்வோம்.",
  }
};

/* ── State ── */
let currentLang = "ta";

/* ── Animated Counter ── */
function animateCounter(el, to) {
  const dur = 1600;
  const start = performance.now();
  const suffix = el.dataset.suffix || "";
  function tick(now) {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.floor(p * to) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Scroll Reveal ── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("animate-fade-up");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* Counter trigger */
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const to = parseInt(e.target.dataset.to);
        animateCounter(e.target, to);
        cio.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".counter").forEach(el => cio.observe(el));
}

/* ── Render Page ── */
function renderPage(t) {
  const body = document.body;
  body.classList.toggle("tamil-loose", t.lang === "ta");

  /* ── NAV ── */
  document.getElementById("nav-logo-name").textContent = "TRINITY INFRASTRUCTURE";
  document.getElementById("nav-logo-tagline").textContent = t.tagline;
  const navLinks = document.getElementById("nav-links");
  navLinks.innerHTML = t.nav.map(([l, h]) =>
    `<a href="${h}">${l}</a>`
  ).join("");
  const mobileNav = document.getElementById("mobile-nav-links");
  mobileNav.innerHTML = t.nav.map(([l, h]) =>
    `<a href="${h}" onclick="closeMobileMenu()">${l}</a>`
  ).join("");
  document.querySelectorAll(".btn-book-nav, .btn-book-mobile").forEach(el => el.textContent = t.book);
  document.querySelectorAll(".btn-lang").forEach(el => el.innerHTML = `🌐 ${t.langBtn}`);

  /* ── HERO ── */
  document.getElementById("hero-badge-text").textContent = t.est;
  document.getElementById("hero-h1a").textContent = t.h1a;
  document.getElementById("hero-h1b").textContent = t.h1b;
  document.getElementById("hero-tagline").textContent = t.tagline;
  document.getElementById("hero-intro").textContent = t.intro;
  document.getElementById("btn-view-projects").textContent = t.viewP;
  document.getElementById("btn-book-hero").textContent = t.book;
  document.getElementById("btn-contact-hero").textContent = t.contactUs + " →";

  const statLabels = [t.years, t.proj, t.clients, t.ongoing];
  document.querySelectorAll(".stat-label").forEach((el, i) => el.textContent = statLabels[i]);

  /* ── ABOUT ── */
  document.getElementById("about-who").textContent = t.whoTitle;
  document.getElementById("about-h2").textContent = t.aboutH;
  document.getElementById("about-p1").textContent = t.aboutP1;
  document.getElementById("about-p2").textContent = t.aboutP2;
  document.getElementById("founder-tag").textContent = t.founder;
  document.getElementById("founder-role").textContent = t.founderRole;
  document.getElementById("founder-bio").textContent = t.founderBio;

  /* ── SERVICES ── */
  document.getElementById("serv-label").textContent = t.servTitle;
  document.getElementById("serv-h2").textContent = t.servH;
  const servGrid = document.getElementById("services-grid");
  servGrid.innerHTML = t.services.map(([title, desc, icon]) => `
    <div class="service-card">
      <div class="service-icon">${icon}</div>
      <h3 class="service-title">${title}</h3>
      <p class="service-desc">${desc}</p>
    </div>
  `).join("");

  /* ── PROJECTS ── */
  document.getElementById("proj-label").textContent = t.projTitle;
  document.getElementById("proj-h2").textContent = t.projH;
  const projImgs = [ASSETS.house1, ASSETS.house3, ASSETS.rainbow];
  const projGrid = document.getElementById("projects-grid");
  projGrid.innerHTML = t.projects.map((p, i) => `
    <article class="project-card">
      <div class="project-img-wrap">
        <img src="${projImgs[i]}" alt="${p.name}" loading="lazy" />
        <span class="project-badge ${p.status === 'Completed' ? 'badge-completed' : 'badge-ongoing'}">${p.status}</span>
      </div>
      <div class="project-info">
        <h3 class="project-name">${p.name}</h3>
        <div class="project-meta">
          <span><span class="label">${t.areaLabel}</span> · ${p.area}</span>
          <span><span class="label">${t.yearLabel}</span> · ${p.date}</span>
        </div>
      </div>
    </article>
  `).join("");

  /* ── RAINBOW ── */
  document.getElementById("rainbow-label").textContent = t.flagshipLabel;
  document.getElementById("rainbow-sub").textContent = t.rainbowSub;
  document.getElementById("rainbow-price").textContent = t.rainbowPrice;
  const specsEl = document.getElementById("rainbow-specs");
  specsEl.innerHTML = t.specs.map(([n, l]) => `
    <div class="spec-card"><div class="spec-val">${n}</div><div class="spec-label">${l}</div></div>
  `).join("");
  document.getElementById("btn-book-plot").textContent = t.bookPlot;
  document.getElementById("btn-wa-rainbow").textContent = t.waUs;

  /* ── WHY US ── */
  document.getElementById("why-label").textContent = t.whyTitle;
  document.getElementById("why-h2").textContent = t.whyH;
  const whyGrid = document.getElementById("why-grid");
  whyGrid.innerHTML = t.why.map(([title, desc]) => `
    <div class="why-card">
      <div class="why-icon">✓</div>
      <h3 class="why-title">${title}</h3>
      <p class="why-desc">${desc}</p>
    </div>
  `).join("");

  /* ── GALLERY ── */
  document.getElementById("gal-label").textContent = t.galTitle;
  document.getElementById("gal-h2").textContent = t.galH;

  /* ── TESTIMONIALS ── */
  document.getElementById("test-label").textContent = t.testTitle;
  document.getElementById("test-h2").textContent = t.testH;
  const testGrid = document.getElementById("test-grid");
  testGrid.innerHTML = t.testimonials.map(([q, name, loc]) => `
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <p class="test-quote">"${q}"</p>
      <div class="test-name">${name}</div>
      <div class="test-proj">${loc}</div>
    </div>
  `).join("");

  /* ── BOOKING ── */
  document.getElementById("book-label").textContent = t.bookTitle;
  document.getElementById("book-h2").textContent = t.bookH;
  document.getElementById("book-p").textContent = t.bookP;
  document.getElementById("label-name").textContent = t.nameL;
  document.getElementById("label-mobile").textContent = t.mobileL;
  document.getElementById("label-email").textContent = t.emailL;
  document.getElementById("label-date").textContent = t.dateL;
  document.getElementById("label-interest").textContent = t.interestL;
  document.getElementById("label-message").textContent = t.messageL;
  document.getElementById("btn-submit").textContent = t.submit;
  const sel = document.getElementById("select-interest");
  sel.innerHTML = `
    <option>Rainbow Avenue (Plots)</option>
    <option>${t.residential}</option>
    <option>${t.underground}</option>
    <option>${t.container}</option>
  `;

  /* ── CONTACT ── */
  document.getElementById("contact-label").textContent = t.getTitle;
  document.getElementById("contact-h2").textContent = t.getH;
  document.getElementById("contact-call-lbl").textContent = t.callNow;
  document.getElementById("contact-wa-lbl").textContent = t.whatsapp;
  document.getElementById("contact-wa-sub").textContent = t.chat;
  document.getElementById("contact-em-lbl").textContent = t.email;

  /* ── FOOTER ── */
  document.getElementById("footer-tagline").textContent = t.tagline;
  document.getElementById("footer-tagline2").textContent = t.tagline;
  document.getElementById("footer-desc").textContent = t.founded;
  document.getElementById("footer-ql-title").textContent = t.quickLinks;
  document.getElementById("footer-contact-title").textContent = t.contact;
  const footerLinks = document.getElementById("footer-links");
  footerLinks.innerHTML = t.nav.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join("");
}

/* ── Mobile menu ── */
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  /* Set images */
  document.querySelectorAll("[data-asset]").forEach(el => {
    const key = el.dataset.asset;
    if (ASSETS[key]) el.src = ASSETS[key];
  });

  /* WhatsApp href */
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = `https://wa.me/${WHATSAPP}`;
  });
  document.getElementById("wa-float").href = `https://wa.me/${WHATSAPP}`;

  /* Phone href */
  document.querySelectorAll("[data-phone]").forEach(el => {
    el.href = `tel:${PHONE}`;
  });

  /* Language toggle */
  document.querySelectorAll(".btn-lang").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ta" : "en";
      renderPage(D[currentLang]);
    });
  });

  /* Mobile menu toggle */
  document.getElementById("btn-hamburger").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("open");
  });

  /* Form submit */
  document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(D[currentLang].thankyou);
    e.target.reset();
  });

  /* Footer year */
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  /* Initial render */
  renderPage(D[currentLang]);

  /* Init scroll reveal */
  initReveal();
});
