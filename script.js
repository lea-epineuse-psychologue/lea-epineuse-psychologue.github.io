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
  var buttons = document.querySelectorAll('.price-summary-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.price-details');
      var content = item.querySelector('.price-details-content');
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      content.hidden = !isOpen;
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.getElementById('open-booking-modal');
  var modal = document.getElementById('booking-modal');
  if (!openBtn || !modal) return;

  var closeBtn = document.getElementById('close-booking-modal');

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    openBtn.focus();
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
});
