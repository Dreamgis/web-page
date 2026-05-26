/* ─────────────────────────────────────────
   DreamGIS v2 — Main JS
   i18n · Nav transparency · Mobile drawer ·
   Carousel · Marquee
───────────────────────────────────────── */

/* ═══════════════════════════════
   i18n
═══════════════════════════════ */
function initI18n() {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init(
      {
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        debug: false,
        backend: { loadPath: '/locales/{{lng}}/translation.json' },
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
      },
      () => {
        renderI18n();
        syncLangBtns();
      }
    );

  i18next.on('languageChanged', () => {
    renderI18n();
    syncLangBtns();
    document.documentElement.lang = i18next.language;
  });
}

function renderI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18next.t(key);
    if (val && val !== key) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = i18next.t(key);
    if (val && val !== key) el.setAttribute('placeholder', val);
  });
}

function syncLangBtns() {
  const lang = i18next.language.slice(0, 2);
  document.querySelectorAll('.lang-sw__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

window.setLang = function(lang) {
  i18next.changeLanguage(lang);
};


/* ═══════════════════════════════
   NAV — transparent on hero, opaque on scroll
═══════════════════════════════ */
function initNav() {
  const nav = document.getElementById('main-nav');
  const hero = document.querySelector('.hero');
  if (!nav) return;

  function update() {
    const scrolled = window.scrollY > 10;
    nav.classList.toggle('scrolled', scrolled);

    if (hero) {
      const heroEnd = hero.offsetTop + hero.offsetHeight - nav.offsetHeight - 40;
      nav.classList.toggle('transparent', window.scrollY < heroEnd);
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ═══════════════════════════════
   MOBILE DRAWER
═══════════════════════════════ */
function initDrawer() {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    // Animate hamburger → X
    toggle.classList.toggle('is-open', open);
  });

  // Close on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}


/* ═══════════════════════════════
   CAROUSEL helper
═══════════════════════════════ */
function makeCarousel(trackId, prevId, nextId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!track || !prevBtn || !nextBtn) return;

  function getStep() {
    const first = track.firstElementChild;
    if (!first) return 320;
    const gap = parseInt(getComputedStyle(track).gap) || 24;
    return first.offsetWidth + gap;
  }

  function updateBtns() {
    prevBtn.disabled = track.scrollLeft < 4;
    nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateBtns, { passive: true });
  updateBtns();
}


/* ═══════════════════════════════
   INIT
═══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNav();
  initDrawer();
  makeCarousel('aliados-track', 'aliados-prev', 'aliados-next');
});
