/* Trinity Infrastructure — Static Scripts */
(function () {
  'use strict';

  // ============ TRANSLATIONS ============
  const I18N = {
    en: {
      'tagline': 'TRUTH · TRUST · TECHNOLOGY',
      'nav.about': 'About', 'nav.services': 'Services', 'nav.projects': 'Projects',
      'nav.rainbow': 'Rainbow Avenue', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
      'book': 'Book Site Visit',
      'est': 'EST. 2021 · MADURAI',
      'h1a': 'Building Dreams.', 'h1b': 'Creating Value.',
      'intro': "Trusted construction & real estate solutions since 2021 — modern homes, DTCP-approved plots, and best-in-class underground structures.",
      'viewP': 'View Projects', 'contactUs': 'Contact Us',
      'years': 'Years Experience', 'proj': 'Projects Delivered',
      'clients': 'Happy Clients', 'ongoing': 'Ongoing Projects',
      'whoTitle': '— WHO WE ARE',
      'aboutH': 'A new standard for modern building in Madurai.',
      'aboutP1': 'Trinity Infrastructure, founded in 2021 by MG Ravindra David, is a trusted construction and infrastructure company committed to transforming dreams into reality. We specialize in residential construction, DTCP plot development, and expert underground structures including STP and fire tanks.',
      'aboutP2': 'Our mission: quality construction, transparent dealings, and long-term value for every client.',
      'founderLbl': 'FOUNDER', 'founderRole': 'Founder & Managing Director',
      'founderBio': 'Since 2021, leading Trinity Infrastructure with a focus on quality construction, DTCP plot development, and pioneering underground structures including STP and fire tanks across Madurai.',
      'servTitle': '— OUR SERVICES', 'servH': 'End-to-end construction & real estate',
      'projTitle': '— FEATURED PROJECTS', 'projH': 'Crafted with precision',
      'flagship': '— FLAGSHIP DEVELOPMENT',
      'rainbow1': 'NGO Colony — Approved DTCP.',
      'rainbow2': 'Premium plots starting from ₹15 Lakhs. Built around modern living.',
      'plots': 'Plots', 'roads': 'Wide Roads', 'water': 'Water Table', 'approved': 'Approved',
      'bookPlot': 'Book Your Plot Today', 'waUs': 'WhatsApp Us',
      'whyTitle': '— WHY CHOOSE TRINITY', 'whyH': 'Reasons our clients trust us',
      'galTitle': '— PROJECT GALLERY', 'galH': 'Spaces we have brought to life',
      'testTitle': '— CLIENT VOICES', 'testH': 'What our families say',
      'bookTitle': '— BOOK A SITE VISIT', 'bookH': 'Walk the site with us',
      'bookP': "Tell us when you'd like to visit. Our team will confirm within an hour.",
      'getTitle': '— GET IN TOUCH', 'getH': "Let's build together",
      'callNow': 'Call Now', 'whatsapp': 'WhatsApp', 'chat': 'Chat instantly', 'email': 'Email',
      'submit': 'Book Site Visit',
      'name': 'Full Name', 'mobile': 'Mobile Number', 'emailL': 'Email',
      'date': 'Preferred Date', 'interest': 'Project Interested In', 'message': 'Message',
      'optRes': 'Residential Construction',
      'optUnd': 'Underground Structures (STP & Fire Tank)',
      'optCon': 'Container Project',
      'quick': 'Quick Links', 'contactH': 'Contact',
      'footerBio': 'Founded 2021 by MG Ravindra David. Let your dream come true.',
    },
    ta: {
      'tagline': 'உண்மை · நம்பிக்கை · தொழில்நுட்பம்',
      'nav.about': 'எங்களைப் பற்றி', 'nav.services': 'சேவைகள்', 'nav.projects': 'திட்டங்கள்',
      'nav.rainbow': 'ரெயின்போ அவென்யூ', 'nav.gallery': 'படத்தொகுப்பு', 'nav.contact': 'தொடர்பு',
      'book': 'தள வருகை பதிவு',
      'est': 'தொடக்கம் 2021 · மதுரை',
      'h1a': 'கனவுகளை கட்டுகிறோம்.', 'h1b': 'மதிப்பை உருவாக்குகிறோம்.',
      'intro': '2021 முதல் நம்பகமான கட்டுமான மற்றும் ரியல் எஸ்டேட் சேவைகள் — நவீன வீடுகள், DTCP அங்கீகார மனைகள், மற்றும் சிறந்த நிலத்தடி கட்டமைப்புகள்.',
      'viewP': 'திட்டங்களை பார்', 'contactUs': 'தொடர்பு கொள்',
      'years': 'ஆண்டு அனுபவம்', 'proj': 'நிறைவு பெற்ற திட்டங்கள்',
      'clients': 'மகிழ்ச்சியான வாடிக்கையாளர்கள்', 'ongoing': 'நடப்பு திட்டங்கள்',
      'whoTitle': '— நாங்கள் யார்',
      'aboutH': 'மதுரையில் நவீன கட்டுமானத்திற்கான புதிய தரம்.',
      'aboutP1': 'Trinity Infrastructure, 2021 ஆம் ஆண்டில் MG ரவீந்திர டேவிட் அவர்களால் தொடங்கப்பட்டது. குடியிருப்பு கட்டுமானம், DTCP மனை மேம்பாடு, மற்றும் STP மற்றும் தீ தண்ணீர் தொட்டிகள் உள்ளிட்ட நிலத்தடி கட்டமைப்புகளில் நிபுணத்துவம்.',
      'aboutP2': 'எங்கள் நோக்கம்: தரமான கட்டுமானம், வெளிப்படையான பரிவர்த்தனைகள், நீண்டகால மதிப்பு.',
      'founderLbl': 'நிறுவனர்', 'founderRole': 'நிறுவனர் & நிர்வாக இயக்குநர்',
      'founderBio': '2021 முதல், Trinity Infrastructure-ஐ தரமான கட்டுமானம், DTCP மனை மேம்பாடு மற்றும் மதுரை முழுவதும் STP & தீ தண்ணீர் தொட்டிகள் உள்ளிட்ட நிலத்தடி கட்டமைப்புகளில் முன்னோடியாக வழிநடத்துகிறார்.',
      'servTitle': '— எங்கள் சேவைகள்', 'servH': 'முழுமையான கட்டுமான & ரியல் எஸ்டேட்',
      'projTitle': '— சிறப்பு திட்டங்கள்', 'projH': 'துல்லியத்துடன் உருவாக்கப்பட்டது',
      'flagship': '— முதன்மை திட்டம்',
      'rainbow1': 'NGO காலனி — DTCP அங்கீகாரம் பெற்றது.',
      'rainbow2': '₹15 லட்சத்தில் இருந்து சிறப்பு மனைகள். நவீன வாழ்க்கைக்கு ஏற்றவை.',
      'plots': 'மனைகள்', 'roads': 'அகலமான சாலைகள்', 'water': 'நீர் மட்டம்', 'approved': 'அங்கீகாரம் பெற்றது',
      'bookPlot': 'உங்கள் மனையை பதிவு செய்க', 'waUs': 'வாட்ஸ்அப் செய்க',
      'whyTitle': '— ஏன் ட்ரினிட்டி', 'whyH': 'வாடிக்கையாளர்கள் எங்களை நம்புவதற்கான காரணங்கள்',
      'galTitle': '— திட்ட படத்தொகுப்பு', 'galH': 'நாங்கள் உருவாக்கிய இடங்கள்',
      'testTitle': '— வாடிக்கையாளர் கருத்துகள்', 'testH': 'எங்கள் குடும்பங்கள் என்ன சொல்கின்றன',
      'bookTitle': '— தள வருகை பதிவு', 'bookH': 'எங்களுடன் தளத்தை பாருங்கள்',
      'bookP': 'எப்போது வருவீர்கள் என்று சொல்லுங்கள். ஒரு மணிநேரத்தில் உறுதிசெய்வோம்.',
      'getTitle': '— தொடர்பு கொள்ளுங்கள்', 'getH': 'ஒன்றாக கட்டுவோம்',
      'callNow': 'இப்போது அழைக்கவும்', 'whatsapp': 'வாட்ஸ்அப்', 'chat': 'உடனடி அரட்டை', 'email': 'மின்னஞ்சல்',
      'submit': 'பதிவு செய்க',
      'name': 'முழு பெயர்', 'mobile': 'கைபேசி எண்', 'emailL': 'மின்னஞ்சல்',
      'date': 'விருப்ப தேதி', 'interest': 'ஆர்வமுள்ள திட்டம்', 'message': 'செய்தி',
      'optRes': 'குடியிருப்பு கட்டுமானம்',
      'optUnd': 'நிலத்தடி கட்டமைப்பு (STP & தீ தொட்டி)',
      'optCon': 'கண்டெய்னர் திட்டம்',
      'quick': 'விரைவு இணைப்புகள்', 'contactH': 'தொடர்பு',
      'footerBio': '2021-ல் MG ரவீந்திர டேவிட் அவர்களால் தொடங்கப்பட்டது.',
    }
  };

  const SERVICES = {
    en: [
      ['Residential Construction', 'Modern homes built to last with premium materials.', '🏠'],
      ['Underground Structures', 'Expert STP tanks & fire tanks — best-in-class underground build.', '🛢'],
      ['Container Projects', 'Experienced in modern container-based commercial builds.', '📦'],
      ['Architectural Planning', 'Free architectural plans with every project.', '📐'],
      ['DTCP Approved Plots', 'Government-approved layouts for safe investment.', '📍'],
      ['Land Development', 'Site preparation, layouts and infrastructure.', '🌳'],
      ['Investment Consulting', 'Guidance on the best plots for future growth.', '💰'],
      ['Turnkey Solutions', 'Move-in ready homes — designed, built, delivered.', '🔑'],
    ],
    ta: [
      ['குடியிருப்பு கட்டுமானம்', 'தரமான பொருட்களுடன் கட்டப்பட்ட நவீன வீடுகள்.', '🏠'],
      ['நிலத்தடி கட்டமைப்பு', 'STP & தீ தண்ணீர் தொட்டிகள் — சிறந்த நிலத்தடி கட்டுமானம்.', '🛢'],
      ['கண்டெய்னர் திட்டங்கள்', 'நவீன கண்டெய்னர் வணிக கட்டுமானங்களில் அனுபவம்.', '📦'],
      ['கட்டிட திட்டமிடல்', 'ஒவ்வொரு திட்டத்திற்கும் இலவச கட்டிட வரைபடம்.', '📐'],
      ['DTCP மனைகள்', 'பாதுகாப்பான முதலீட்டிற்கான அரசு அங்கீகார மனைகள்.', '📍'],
      ['நில மேம்பாடு', 'தள தயாரிப்பு, தளவமைப்புகள் மற்றும் உள்கட்டமைப்பு.', '🌳'],
      ['முதலீட்டு ஆலோசனை', 'எதிர்கால வளர்ச்சிக்கான சிறந்த மனைகள் பற்றிய வழிகாட்டுதல்.', '💰'],
      ['டர்ன்கீ தீர்வுகள்', 'தயார் நிலையில் வீடுகள் — வடிவமைக்கப்பட்டு, கட்டப்பட்டு, வழங்கப்படும்.', '🔑'],
    ]
  };

  const PROJECTS = {
    en: [
      { img: 'images/house1.jpg', name: 'The Horizon Villa', status: 'Completed', area: '1350 sqft', date: '2021' },
      { img: 'images/house3.jpg', name: 'Arora Residence', status: 'Completed', area: '1300 sqft', date: '2022' },
      { img: 'images/rainbow.jpg', name: 'Rainbow Avenue · NGO Colony', status: 'Ongoing', area: '950 sqft / plot', date: '2025' },
    ],
    ta: [
      { img: 'images/house1.jpg', name: 'ஹரிசன் வில்லா', status: 'Completed', statusTa: 'நிறைவு', area: '1350 sqft', date: '2021' },
      { img: 'images/house3.jpg', name: 'அரோரா இல்லம்', status: 'Completed', statusTa: 'நிறைவு', area: '1300 sqft', date: '2022' },
      { img: 'images/rainbow.jpg', name: 'ரெயின்போ அவென்யூ · NGO காலனி', status: 'Ongoing', statusTa: 'நடப்பு', area: '950 sqft / மனை', date: '2025' },
    ]
  };

  const WHY = {
    en: [
      ['Truth', 'Honest dealings on every project.'],
      ['Trust', 'Built on transparency and proven delivery.'],
      ['Technology', 'Modern methods, lasting results.'],
      ['Underground Expertise', 'Best-in-class STP & fire tank construction.'],
      ['DTCP Approved', 'Safe, legally clean plot investments.'],
      ['Quality Materials', 'ISI-grade steel, chamber bricks, branded fittings.'],
      ['Modern Designs', 'Architecture that ages beautifully.'],
      ['Customer First', 'Lifetime relationship, not a one-time deal.'],
    ],
    ta: [
      ['உண்மை', 'ஒவ்வொரு திட்டத்திலும் நேர்மையான பரிவர்த்தனைகள்.'],
      ['நம்பிக்கை', 'வெளிப்படைத்தன்மை மற்றும் சரியான வழங்கல்.'],
      ['தொழில்நுட்பம்', 'நவீன முறைகள், நீடித்த விளைவுகள்.'],
      ['நிலத்தடி நிபுணத்துவம்', 'சிறந்த STP & தீ தொட்டி கட்டுமானம்.'],
      ['DTCP அங்கீகாரம்', 'பாதுகாப்பான, சட்டப்பூர்வ மனை முதலீடுகள்.'],
      ['தர பொருட்கள்', 'ISI தர எஃகு, செம்பர் செங்கல், தர பொருத்துதல்கள்.'],
      ['நவீன வடிவமைப்பு', 'அழகாக நிலைக்கும் கட்டிடக்கலை.'],
      ['வாடிக்கையாளர் முதலில்', 'வாழ்நாள் உறவு.'],
    ]
  };

  const TESTIMONIALS = {
    en: [
      ['Professional team, transparent process, and excellent quality. Trinity delivered exactly on time.', 'Gopal', 'VIT — Container Project'],
      ['Our Horizon Villa was the first Trinity home in 2021 — still flawless. Honest team, honest work.', 'Owner', 'Horizon Villa · 2021'],
      ['From plan to handover every step was managed beautifully. Our dream home is finally real.', 'Arora Family', 'Arora Residence · 2022'],
    ],
    ta: [
      ['தொழில்முறை குழு, வெளிப்படையான செயல்முறை, சிறந்த தரம். Trinity சரியான நேரத்தில் வழங்கியது.', 'கோபால்', 'VIT — கண்டெய்னர் திட்டம்'],
      ['எங்கள் ஹரிசன் வில்லா 2021-ல் Trinity-யின் முதல் வீடு — இன்றும் சிறப்பாக உள்ளது.', 'உரிமையாளர்', 'ஹரிசன் வில்லா · 2021'],
      ['திட்டத்தில் இருந்து ஒப்படைப்பு வரை ஒவ்வொரு படியும் அழகாக நிர்வகிக்கப்பட்டது.', 'அரோரா குடும்பம்', 'அரோரா இல்லம் · 2022'],
    ]
  };

  // ============ STATE ============
  let lang = 'ta';

  function applyLang() {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.getElementById('langLabel').textContent = lang === 'en' ? 'தமிழ்' : 'EN';

    renderServices();
    renderProjects();
    renderWhy();
    renderTestimonials();
  }

  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = SERVICES[lang].map(([t, d, e]) => `
      <div class="glass svc-card">
        <div class="svc-emoji">${e}</div>
        <h3>${t}</h3>
        <p class="muted small">${d}</p>
      </div>`).join('');
  }

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = PROJECTS[lang].map(p => {
      const isDone = p.status === 'Completed';
      const lbl = lang === 'ta' ? (p.statusTa || p.status) : p.status;
      const areaLbl = lang === 'en' ? 'Area' : 'பரப்பு';
      const yearLbl = lang === 'en' ? 'Year' : 'ஆண்டு';
      return `
        <article class="proj-card">
          <div class="proj-img">
            <img src="${p.img}" alt="${p.name}" />
            <span class="badge ${isDone ? 'done' : 'ongoing'}">${lbl}</span>
          </div>
          <div class="proj-body">
            <h3>${p.name}</h3>
            <div class="proj-meta">
              <span><span class="muted">${areaLbl}</span> · ${p.area}</span>
              <span><span class="muted">${yearLbl}</span> · ${p.date}</span>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  function renderWhy() {
    const grid = document.getElementById('whyGrid');
    grid.innerHTML = WHY[lang].map(([t, d]) => `
      <div class="glass why-card">
        <div class="why-tick">✓</div>
        <h3>${t}</h3>
        <p class="muted small">${d}</p>
      </div>`).join('');
  }

  function renderTestimonials() {
    const grid = document.getElementById('testGrid');
    grid.innerHTML = TESTIMONIALS[lang].map(([q, n, l]) => `
      <div class="glass test-card">
        <div class="test-stars">★★★★★</div>
        <p class="test-quote">"${q}"</p>
        <div class="test-name">${n}</div>
        <div class="test-loc">${l}</div>
      </div>`).join('');
  }

  // ============ COUNTERS ============
  function animateCounter(el) {
    const to = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.floor(p * to) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ============ INTERSECTION REVEAL ============
  function setupObservers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section, .reveal').forEach(el => io.observe(el));

    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));
  }

  // ============ INIT ============
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('langBtn').addEventListener('click', () => {
      lang = lang === 'en' ? 'ta' : 'en';
      applyLang();
    });

    const menuBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    document.getElementById('bookingForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert(lang === 'en'
        ? "Thank you! We'll contact you shortly."
        : 'நன்றி! விரைவில் தொடர்பு கொள்வோம்.');
      e.target.reset();
    });

    applyLang();
    setupObservers();
  });
})();
