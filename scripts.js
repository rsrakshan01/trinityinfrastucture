/* ============================================================
   TRINITY CONSTRUCTION — scripts.js
   ============================================================ */

/* ── Asset image URLs (Lovable public CDN) ── */
const BASE = "https://preview--trinitcons.lovable.app/__l5e/assets-v1";
const ASSETS = {
  logo:       `${BASE}/828d5369-4086-4983-9df2-ddfc6870ce59/logo-trinity.png`,
  house1:     `${BASE}/b6d3243d-41b7-4af2-9568-e92d44ddb24f/house1.jpeg`,
  house2:     `${BASE}/0bfbe98a-ea1a-4ce1-8b6c-e96255656682/house2.jpeg`,
  house3:     `${BASE}/ac0be934-8ac3-4017-843e-176c30688e4b/house3.jpeg`,
  house4:     `${BASE}/a85323d9-3972-468e-ba24-74365c5a9379/house4.jpeg`,
  plotmap:    `${BASE}/242026db-6e11-4403-8c84-3a3e2d76623c/plotmap.jpeg`,
  rainbow:    `${BASE}/177d9d1c-d277-4329-bf88-a2214855d03c/rainbow.jpeg`,
  pkg:        `${BASE}/70f5accc-d737-402f-acc9-0b23e2a6d9ed/package.jpeg`,
  container1: `${BASE}/61a15a79-6a46-40ea-9a31-93dd5bb61daa/container1.jpeg`,
  container2: `${BASE}/59cb648c-3018-4191-837b-ca6887df3fb8/container2.jpeg`,
};

/* ── Contact constants ── */
const PHONE    = "+919080987178";
const PHONE2   = "+917200712090";
const WHATSAPP = "919080987178";
const EMAIL    = "trinityinfra333@gmail.com";
const ADDRESS  = "Mother Theresa St, Nagamalaipudukottai, TN 625019, India";

/* ── Set all asset src attributes ── */
function populateAssets() {
  document.querySelectorAll("[data-asset]").forEach((el) => {
    const key = el.getAttribute("data-asset");
    if (ASSETS[key]) {
      if (el.tagName === "IMG") el.src = ASSETS[key];
      else el.style.backgroundImage = `url(${ASSETS[key]})`;
    }
  });
  /* Also set gallery hrefs */
  document.querySelectorAll("[data-asset-href]").forEach((el) => {
    const key = el.getAttribute("data-asset-href");
    if (ASSETS[key]) el.href = ASSETS[key];
  });
  /* Update copyright year */
  const yr = document.getElementById("copy-year");
  if (yr) yr.textContent = new Date().getFullYear();
}

/* ── Mobile menu toggle ── */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu   = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    // swap hamburger ↔ close icon
    const path = toggle.querySelector("path");
    if (path) {
      path.setAttribute("d", open
        ? "M18 6L6 18M6 6l12 12"
        : "M3 12h18M3 6h18M3 18h18"
      );
    }
  });

  /* Close on link click */
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      const path = toggle.querySelector("path");
      if (path) path.setAttribute("d", "M3 12h18M3 6h18M3 18h18");
    })
  );
}

/* ── Scroll-reveal (IntersectionObserver) ── */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".section").forEach((el) => io.observe(el));
}

/* ── Animated counters ── */
function animateCounter(el) {
  const to  = parseInt(el.getAttribute("data-to"),  10) || 0;
  const sfx = el.getAttribute("data-suffix") || "";
  const dur = 1600;
  const start = performance.now();

  const tick = (now) => {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.floor(p * to) + sfx;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".counter").forEach((el) => io.observe(el));
}

/* ── Booking form submission ── */
function initBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    if (btn) { btn.textContent = "Thank you! We'll contact you shortly."; btn.disabled = true; }
  });
}

/* ── Boot ── */
document.addEventListener("DOMContentLoaded", () => {
  populateAssets();
  initMobileMenu();
  initReveal();
  initCounters();
  initBookingForm();
});
