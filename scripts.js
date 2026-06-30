/* =========================================================
   TRINITY INFRASTRUCTURE — scripts.js
   All interactivity converted from React/TSX source
   ========================================================= */

/* ── Asset Image URLs (from Lovable CDN) ── */
const ASSETS = {
  logo:    "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/828d5369-4086-4983-9df2-ddfc6870ce59/logo-trinity.png",
  house1:  "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/b6d3243d-41b7-4af2-9568-e92d44ddb24f/house1.jpeg",
  house2:  "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/0bfbe98a-ea1a-4ce1-8b6c-e96255656682/house2.jpeg",
  house3:  "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/ac0be934-8ac3-4017-843e-176c30688e4b/house3.jpeg",
  house4:  "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/a85323d9-3972-468e-ba24-74365c5a9379/house4.jpeg",
  plotmap: "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/242026db-6e11-4403-8c84-3a3e2d76623c/plotmap.jpeg",
  rainbow: "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/177d9d1c-d277-4329-bf88-a2214855d03c/rainbow.jpeg",
  pkg:     "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/70f5accc-d737-402f-acc9-0b23e2a6d9ed/package.jpeg",
  container1: "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/61a15a79-6a46-40ea-9a31-93dd5bb61daa/container1.jpeg",
  container2: "https://df69eb4b-6af0-4961-ab64-a4d3715ff5f8.lovableproject.com/__l5e/assets-v1/59cb648c-3018-4191-837b-ca6887df3fb8/container2.jpeg",
};

/* ── Contact details ── */
const PHONE     = "+919080987178";
const WHATSAPP  = "919080987178";
const EMAIL     = "trinityinfra333@gmail.com";

/* ── Translation data ── */
const D = {
  en: {
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
    founderLabel: "FOUNDER",
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
      { name:"The Horizon Villa", status:"Completed", area:"1350 sqft", date:"2021" },
      { name:"Arora Residence",   status:"Completed", area:"1300 sqft", date:"2022" },
      { name:"Rainbow Avenue · NGO Colony", status:"Ongoing", area:"950 sqft / plot", date:"2025" },
    ],
    flagshipTag: "— FLAGSHIP DEVELOPMENT",
    areaLabel: "Area", yearLabel: "Year",
    whyTitle: "— WHY CHOOSE TRINITY",
    whyH: "Reasons our clients trust us",
    whyItems: [
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
    whatsappL: "WhatsApp",
    chat: "Chat instantly",
    emailL: "Email",
    submit: "Book Site Visit",
    nameL: "Full Name",
    mobileL: "Mobile Number",
    emailLabel: "Email",
    dateL: "Preferred Date",
    interestL: "Project Interested In",
    messageL: "Message",
    underground: "Underground Structures (STP & Fire Tank)",
    containerProject: "Container Project",
    residentialConst: "Residential Construction",
    thankYou: "Thank you! We'll contact you shortly.",
    langBtn: "தமிழ்",
    quickLinks: "Quick Links",
    contact: "Contact",
    founded: "Founded 2021 by MG Ravindra David. Let your dream come true.",
    rainbowSub1: "NGO Colony — Approved DTCP.",
    rainbowSub2: "Premium plots starting from ₹15 Lakhs. Built around modern living.",
    rainbowFeats: [["12","Plots"],["24 ft","Wide Roads"],["40 ft","Water Table"],["DTCP","Approved"]],
    bookPlot: "Book Your Plot Today",
    waUs: "WhatsApp Us",
  },
  ta: {
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
    founderLabel: "நிறுவனர்",
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
      { name:"ஹரிசன் வில்லா", status:"Completed", area:"1350 sqft", date:"2021" },
      { name:"அரோரா இல்லம்",  status:"Completed", area:"1300 sqft", date:"2022" },
      { name:"ரெயின்போ அவென்யூ · NGO காலனி", status:"Ongoing", area:"950 sqft / plot", date:"2025" },
    ],
    flagshipTag: "— முதன்மை திட்டம்",
    areaLabel: "பரப்பு", yearLabel: "ஆண்டு",
    whyTitle: "— ஏன் ட்ரினிட்டி",
    whyH: "வாடிக்கையாளர்கள் எங்களை நம்புவதற்கான காரணங்கள்",
    whyItems: [
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
    whatsappL: "வாட்ஸ்அப்",
    chat: "உடனடி அரட்டை",
    emailL: "மின்னஞ்சல்",
    submit: "பதிவு செய்க",
    nameL: "முழு பெயர்",
    mobileL: "கைபேசி எண்",
    emailLabel: "மின்னஞ்சல்",
    dateL: "விருப்ப தேதி",
    interestL: "ஆர்வமுள்ள திட்டம்",
    messageL: "செய்தி",
    underground: "நிலத்தடி கட்டமைப்பு (STP & தீ தொட்டி)",
    containerProject: "கண்டெய்னர் திட்டம்",
    residentialConst: "குடியிருப்பு கட்டுமானம்",
    thankYou: "நன்றி! விரைவில் தொடர்பு கொள்வோம்.",
    langBtn: "EN",
    quickLinks: "விரைவு இணைப்புகள்",
    contact: "தொடர்பு",
    founded: "2021-ல் MG ரவீந்திர டேவிட் அவர்களால் தொடங்கப்பட்டது.",
    rainbowSub1: "NGO காலனி — DTCP அங்கீகாரம் பெற்றது.",
    rainbowSub2: "₹15 லட்சத்தில் இருந்து சிறப்பு மனைகள். நவீன வாழ்க்கைக்கு ஏற்றவை.",
    rainbowFeats: [["12","மனைகள்"],["24 ft","அகலமான சாலைகள்"],["40 ft","நீர் மட்டம்"],["DTCP","அங்கீகாரம் பெற்றது"]],
    bookPlot: "உங்கள் மனையை பதிவு செய்க",
    waUs: "வாட்ஸ்அப் செய்க",
  }
};

/* ── State ── */
let lang = "en";

/* ── Counter animation ── */
function animateCounter(el, to, suffix) {
  const dur = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.floor(p * to) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Intersection observer for reveal + counters ── */
function setupReveal() {
  // Fade-up sections
  const sections = document.querySelectorAll(".section");
  const sio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("animate-fade-up");
        e.target.style.opacity = "1";
        sio.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  sections.forEach(s => sio.observe(s));

  // Counters
  const counters = document.querySelectorAll("[data-counter]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const to = parseInt(e.target.dataset.counter);
        const suffix = e.target.dataset.suffix || "";
        animateCounter(e.target, to, suffix);
        cio.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));
}

/* ── Toast notification ── */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 4000);
}

/* ── Render all dynamic content ── */
function render() {
  const t = D[lang];

  /* NAV */
  const navLinksEl = document.getElementById("nav-links");
  navLinksEl.innerHTML = t.nav.map(([l, h]) =>
    `<a href="${h}">${l}</a>`
  ).join("");

  const mobileMenuEl = document.getElementById("mobile-menu");
  mobileMenuEl.innerHTML = t.nav.map(([l, h]) =>
    `<a href="${h}" onclick="closeMobileMenu()">${l}</a>`
  ).join("") + `<a href="#booking-section" class="btn-book" onclick="closeMobileMenu()">${t.book}</a>`;

  document.getElementById("nav-book-btn").textContent  = t.book;
  document.getElementById("nav-lang-btn").textContent  = "🌐 " + t.langBtn;
  document.getElementById("nav-tagline").textContent    = t.tagline;

  /* HERO */
  document.getElementById("hero-est").innerHTML = `<span class="hero-badge-dot animate-pulse"></span>${t.est}`;
  document.getElementById("hero-h1a").textContent  = t.h1a;
  document.getElementById("hero-h1b").textContent  = t.h1b;
  document.getElementById("hero-tagline").textContent = t.tagline;
  document.getElementById("hero-intro").textContent = t.intro;
  document.getElementById("hero-btn-projects").textContent = t.viewP;
  document.getElementById("hero-btn-book").textContent    = t.book;
  document.getElementById("hero-btn-contact").textContent = t.contactUs + " →";
  const statLabels = [t.years, t.proj, t.clients, t.ongoing];
  document.querySelectorAll(".stat-label").forEach((el, i) => el.textContent = statLabels[i]);

  /* ABOUT */
  document.getElementById("about-tag").textContent   = t.whoTitle;
  document.getElementById("about-h").textContent     = t.aboutH;
  document.getElementById("about-p1").textContent    = t.aboutP1;
  document.getElementById("about-p2").textContent    = t.aboutP2;
  document.getElementById("founder-tag").textContent = t.founderLabel;
  document.getElementById("founder-role").textContent = t.founderRole;
  document.getElementById("founder-bio").textContent  = t.founderBio;

  /* SERVICES */
  document.getElementById("serv-tag").textContent = t.servTitle;
  document.getElementById("serv-h").textContent   = t.servH;
  const servGrid = document.getElementById("services-grid");
  servGrid.innerHTML = t.services.map(([title, desc, icon]) => `
    <div class="service-card">
      <div class="service-icon">${icon}</div>
      <h3 class="service-title">${title}</h3>
      <p class="service-desc">${desc}</p>
    </div>
  `).join("");

  /* PROJECTS */
  document.getElementById("proj-tag").textContent = t.projTitle;
  document.getElementById("proj-h").textContent   = t.projH;
  const projImgs = [ASSETS.house1, ASSETS.house3, ASSETS.rainbow];
  const projGrid = document.getElementById("projects-grid");
  projGrid.innerHTML = t.projects.map((p, i) => `
    <article class="project-card">
      <div class="project-img-wrap">
        <img src="${projImgs[i]}" alt="${p.name}" loading="lazy" />
        <span class="project-badge ${p.status === 'Completed' ? 'badge-complete' : 'badge-ongoing'}">${p.status}</span>
      </div>
      <div class="project-info">
        <h3 class="project-name">${p.name}</h3>
        <div class="project-meta">
          <span><span class="lbl">${t.areaLabel}</span> · ${p.area}</span>
          <span><span class="lbl">${t.yearLabel}</span> · ${p.date}</span>
        </div>
      </div>
    </article>
  `).join("");

  /* RAINBOW AVENUE */
  document.getElementById("rainbow-tag").textContent  = t.flagshipTag;
  document.getElementById("rainbow-sub1").textContent = t.rainbowSub1;
  document.getElementById("rainbow-sub2").textContent = t.rainbowSub2;
  const rfGrid = document.getElementById("rainbow-feats");
  rfGrid.innerHTML = t.rainbowFeats.map(([n, l]) => `
    <div class="feat-card">
      <div class="feat-num text-gradient-gold">${n}</div>
      <div class="feat-lbl">${l}</div>
    </div>
  `).join("");
  document.getElementById("rainbow-btn-book").textContent = t.bookPlot;
  document.getElementById("rainbow-btn-wa").textContent   = t.waUs;

  /* WHY US */
  document.getElementById("why-tag").textContent = t.whyTitle;
  document.getElementById("why-h").textContent   = t.whyH;
  const whyGrid = document.getElementById("why-grid");
  whyGrid.innerHTML = t.whyItems.map(([title, desc]) => `
    <div class="why-card">
      <div class="why-check">✓</div>
      <h3 class="why-title">${title}</h3>
      <p class="why-desc">${desc}</p>
    </div>
  `).join("");

  /* GALLERY */
  document.getElementById("gal-tag").textContent = t.galTitle;
  document.getElementById("gal-h").textContent   = t.galH;
  const galImgs = [ASSETS.house1, ASSETS.house2, ASSETS.house3, ASSETS.house4, ASSETS.plotmap, ASSETS.rainbow, ASSETS.house1];
  const galGrid = document.getElementById("gallery-grid");
  galGrid.innerHTML = galImgs.map((url, i) => `
    <a href="${url}" target="_blank" rel="noreferrer" class="gallery-item${i === 0 ? ' large' : ''}">
      <img src="${url}" alt="Project ${i+1}" loading="lazy" />
      <div class="gallery-overlay">View</div>
    </a>
  `).join("");

  /* TESTIMONIALS */
  document.getElementById("test-tag").textContent = t.testTitle;
  document.getElementById("test-h").textContent   = t.testH;
  const testGrid = document.getElementById("test-grid");
  testGrid.innerHTML = t.testimonials.map(([q, name, meta]) => `
    <div class="test-card">
      <div class="test-stars">★★★★★</div>
      <p class="test-quote">"${q}"</p>
      <div class="test-name">${name}</div>
      <div class="test-meta">${meta}</div>
    </div>
  `).join("");

  /* BOOKING */
  document.getElementById("book-tag").textContent  = t.bookTitle;
  document.getElementById("book-h").textContent    = t.bookH;
  document.getElementById("book-p").textContent    = t.bookP;
  document.getElementById("field-name").textContent    = t.nameL;
  document.getElementById("field-mobile").textContent  = t.mobileL;
  document.getElementById("field-email").textContent   = t.emailLabel;
  document.getElementById("field-date").textContent    = t.dateL;
  document.getElementById("field-interest").textContent = t.interestL;
  document.getElementById("field-message").textContent  = t.messageL;
  document.getElementById("btn-submit").textContent    = t.submit;
  // Update select options
  const sel = document.getElementById("select-interest");
  sel.innerHTML = `
    <option>Rainbow Avenue (Plots)</option>
    <option>${t.residentialConst}</option>
    <option>${t.underground}</option>
    <option>${t.containerProject}</option>
  `;
  // Store thank you msg for form
  document.getElementById("booking-form").dataset.thanks = t.thankYou;

  /* CONTACT */
  document.getElementById("contact-tag").textContent  = t.getTitle;
  document.getElementById("contact-h").textContent    = t.getH;
  document.getElementById("ccard-call-lbl").textContent = t.callNow;
  document.getElementById("ccard-wa-lbl").textContent   = t.whatsappL;
  document.getElementById("ccard-wa-sub").textContent   = t.chat;
  document.getElementById("ccard-email-lbl").textContent = t.emailL;

  /* FOOTER */
  document.getElementById("footer-tagline").textContent  = t.tagline;
  document.getElementById("footer-desc").textContent     = t.founded;
  document.getElementById("footer-tagline2").textContent = t.tagline;
  document.getElementById("footer-links-title").textContent  = t.quickLinks;
  document.getElementById("footer-contact-title").textContent = t.contact;
  const footerLinks = document.getElementById("footer-links");
  footerLinks.innerHTML = t.nav.map(([l, h]) =>
    `<li><a href="${h}">${l}</a></li>`
  ).join("");

  /* YEAR */
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

/* ── Mobile menu toggle ── */
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  /* Inject asset images */
  document.querySelectorAll("[data-asset]").forEach(el => {
    const key = el.dataset.asset;
    if (ASSETS[key]) el.src = ASSETS[key];
  });

  /* Set all href links needing assets */
  document.getElementById("hero-bg-img").src   = ASSETS.house1;
  document.getElementById("plotmap-img").src    = ASSETS.plotmap;
  document.getElementById("rainbow-img").src    = ASSETS.rainbow;
  document.querySelectorAll("[data-logo]").forEach(el => el.src = ASSETS.logo);

  /* Initial render */
  render();
  setupReveal();

  /* Language toggle */
  document.getElementById("nav-lang-btn").addEventListener("click", () => {
    lang = lang === "en" ? "ta" : "en";
    render();
  });

  /* Mobile menu toggle */
  document.getElementById("btn-menu").addEventListener("click", () => {
    const m = document.getElementById("mobile-menu");
    m.classList.toggle("open");
  });

  /* Smooth-close mobile menu on nav links */
  document.getElementById("nav-links").addEventListener("click", e => {
    if (e.target.tagName === "A") {
      document.getElementById("mobile-menu").classList.remove("open");
    }
  });

  /* Booking form submit */
  document.getElementById("booking-form").addEventListener("submit", e => {
    e.preventDefault();
    const thanks = e.currentTarget.dataset.thanks || "Thank you! We'll contact you shortly.";
    showToast(thanks);
    e.currentTarget.reset();
  });

  /* Scroll-to-top button */
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }, { passive: true });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
