document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('cookie-banner');
  var closeBtn = document.getElementById('cookie-banner-close');
  if (!banner || !closeBtn) return;

  if (localStorage.getItem('cookieBannerDismissed') === 'true') {
    banner.classList.add('hidden');
    return;
  }

  closeBtn.addEventListener('click', function () {
    banner.classList.add('hidden');
    localStorage.setItem('cookieBannerDismissed', 'true');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cta = document.getElementById('floating-cta');
  if (!cta) return;

  var threshold = 400;

  function toggleCta() {
    if (window.scrollY > threshold) {
      cta.classList.add('visible');
    } else {
      cta.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleCta, { passive: true });
  toggleCta();
});
