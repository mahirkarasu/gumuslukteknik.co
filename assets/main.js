// ============================================
// GÜMÜŞLÜK TEKNİK - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initLanguageSwitcher();
  initConversionTracking();
  initHeroBanner();
});

// ============================================
// GTM / Google Ads Dönüşüm Takibi (Hatasız)
// ============================================
function initConversionTracking() {
  window.dataLayer = window.dataLayer || [];

  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-759216396/zVqbCL-giKgbEIzyguoC',
          'transaction_id': ''
        });
      }
      window.dataLayer.push({
        'event': 'phone_call_click',
        'phone_number': '05324962448',
        'page_path': window.location.pathname
      });
    });
  });

  document.querySelectorAll('a[href*="api.whatsapp.com"]').forEach(function(link) {
    link.addEventListener('click', function() {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'page_path': window.location.pathname
      });
    });
  });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================
// Dil Seçici
// ============================================
function initLanguageSwitcher() {
  var langSwitcher = document.querySelector('.lang-switcher');
  if (!langSwitcher) return;

  langSwitcher.addEventListener('click', function(e) {
    if (e.target.classList.contains('lang-btn')) {
      var lang = e.target.dataset.lang || e.target.textContent.trim().toLowerCase();
      if (lang === 'en') {
        window.location.href = 'index=en.html';
      } else {
        window.location.href = 'index.html';
      }
    }
  });
}

// ============================================
// Hero Arka Planı (Karartma Katmanını Korur)
// ============================================
function initHeroBanner() {
  var heroBanner = document.querySelector('.hero');
  if (!heroBanner) return;

  heroBanner.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url('./assets/800x500-dark.webp')";
  heroBanner.style.backgroundSize = 'cover';
  heroBanner.style.backgroundPosition = 'center';
}