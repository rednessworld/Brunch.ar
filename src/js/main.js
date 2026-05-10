/* ============================================================
   BRUNCH.AR — MAIN JS
   Handles: loader, nav scroll, mobile menu, smooth scroll,
   WhatsApp links, fade-up observer, back-to-top, cookie consent
   ============================================================ */

'use strict';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SCROLL_THRESHOLD = 400;

/* ── Storage helpers (resilient to private-browsing blocks) ── */
function storageGet(store, key) {
  try { return store.getItem(key); } catch { return null; }
}
function storageSet(store, key, val) {
  try { store.setItem(key, val); } catch { /* storage unavailable */ }
}

/* ── Smooth scroll ──────────────────────────────────────── */
function smoothScrollTo(selector) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!el) return;
  const navH = document.querySelector('.nav')?.offsetHeight ?? 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
  if (REDUCED_MOTION) {
    window.scrollTo(0, top);
  } else {
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/* ── WhatsApp links ─────────────────────────────────────── */
function updateWhatsAppLinks() {
  const lang = storageGet(localStorage, 'preferred_lang') || 'es';
  const t = window.i18n?.[lang];
  const msg = t?.whatsapp?.message || 'Hola, me gustaría hacer una reserva en Brunch.ar 🥐';
  const encoded = encodeURIComponent(msg);

  document.querySelectorAll('[data-phone]').forEach(el => {
    const phone = el.dataset.phone.replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encoded}`;
    if (el.tagName === 'A') {
      el.href = url;
    } else {
      el.querySelectorAll('a').forEach(a => { a.href = url; });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ── Loading screen ───────────────────────────────────── */
  const loader = document.getElementById('loader');
  if (loader) {
    if (storageGet(sessionStorage, 'visited')) {
      loader.classList.add('hidden');
    } else {
      storageSet(sessionStorage, 'visited', '1');
      setTimeout(() => loader.classList.add('hidden'), 1800);
    }
  }

  /* ── Nav scroll effect ──────────────────────────────────── */
  const nav = document.querySelector('.nav');
  function syncNav() {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', syncNav, { passive: true });
  syncNav();

  /* ── Mobile menu ────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function getMenuFocusable() {
    return Array.from(
      mobileMenu?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    );
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const els = getMenuFocusable();
    if (!els.length) return;
    const first = els[0];
    const last  = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openMenu() {
    mobileMenu?.classList.remove('hidden');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    getMenuFocusable()[0]?.focus();
    document.addEventListener('keydown', trapFocus);
  }
  function closeMenu() {
    mobileMenu?.classList.add('hidden');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', trapFocus);
    hamburger?.focus();
  }

  hamburger?.addEventListener('click', () => {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  mobileMenu?.querySelectorAll('a[href^="#"], .lang-btn').forEach(el => {
    el.addEventListener('click', () => closeMenu());
  });

  /* ── Smooth scroll links ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      smoothScrollTo(href);
    });
  });

  /* ── Fade-up observer ───────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (REDUCED_MOTION) {
    fadeEls.forEach(el => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => io.observe(el));
  }

  /* ── Back to top ────────────────────────────────────────── */
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btt?.classList.toggle('visible', window.scrollY > SCROLL_THRESHOLD);
  }, { passive: true });
  btt?.addEventListener('click', () => {
    REDUCED_MOTION ? window.scrollTo(0, 0) : window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Cookie consent ─────────────────────────────────────── */
  const banner   = document.getElementById('cookie-banner');
  const consent  = storageGet(localStorage, 'cookie_consent');
  const GA_ID    = 'G-XXXXXXXXXX';

  function loadAnalytics() {
    const s = document.createElement('script');
    s.async = true;
    s.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  if (consent === 'accepted') {
    loadAnalytics();
  } else if (!consent) {
    setTimeout(() => banner?.classList.add('visible'), 600);
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    storageSet(localStorage, 'cookie_consent', 'accepted');
    banner?.classList.remove('visible');
    loadAnalytics();
  });

  document.getElementById('cookie-necessary')?.addEventListener('click', () => {
    storageSet(localStorage, 'cookie_consent', 'necessary');
    banner?.classList.remove('visible');
  });

  /* ── WhatsApp links (initial + on lang change) ──────────── */
  updateWhatsAppLinks();
  document.addEventListener('langChanged', updateWhatsAppLinks);

});
