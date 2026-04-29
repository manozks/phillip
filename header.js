/* ============================================================
   header.js  —  Phillip Kloeckner · Shared Navigation
   Injects the top nav (desktop + mobile) into every page and
   wires up: scroll effect, dropdown toggle, mobile menu toggle,
   active link highlighting, and scroll-reveal observer.
   ============================================================ */
(function () {

  /* ── Active page detection ── */
  var currentPage = location.pathname.split('/').pop().replace('.html', '') || 'index';

  /* ── NAV HTML ── */
  var navHTML =
    '<div class="pk-mobile" id="pk-mobile">' +
      '<button class="pk-mobile-close" id="pk-mobile-close" aria-label="Close menu">' +
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8965a" stroke-width="1.5" stroke-linecap="round">' +
          '<line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>' +
        '</svg>' +
      '</button>' +
      '<a href="index.html" data-page="index">Home</a>' +
      '<a href="biography.html" data-page="biography">Biography</a>' +
      '<a href="vision.html" data-page="vision">Vision for Future</a>' +
      '<a href="listen.html" data-page="listen">Listen</a>' +
      '<a href="news.html" data-page="news">News</a>' +
      '<a href="recording.html" data-page="recording">Recording</a>' +
      '<a href="contact.html" data-page="contact">Contact</a>' +
    '</div>' +
    '<nav id="pk-nav">' +
      '<a href="index.html" class="pk-logo">Phillip Kloeckner &middot; D.M.A</a>' +
      '<ul class="pk-nav-list">' +
        '<li><a href="index.html" data-page="index">Home</a></li>' +
        '<li class="pk-dd">' +
          '<span class="pk-dd-trigger">About ' +
            '<svg width="8" height="5" viewBox="0 0 8 5" fill="none">' +
              '<path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' +
            '</svg>' +
          '</span>' +
          '<div class="pk-dd-menu">' +
            '<a href="biography.html" data-page="biography">Biography</a>' +
            '<a href="vision.html" data-page="vision">Vision for Future</a>' +
          '</div>' +
        '</li>' +
        '<li><a href="listen.html" data-page="listen">Listen</a></li>' +
        '<li><a href="news.html" data-page="news">News</a></li>' +
        '<li><a href="recording.html" data-page="recording">Recording</a></li>' +
        '<li><a href="contact.html" data-page="contact">Contact</a></li>' +
      '</ul>' +
      '<button class="pk-ham" id="pk-ham" aria-label="Open menu">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>';

  /* ── Inject nav HTML at the very start of <body> ── */
  function injectHeader() {
    var wrap = document.createElement('div');
    wrap.id = 'pk-header-root';
    wrap.innerHTML = navHTML;
    document.body.insertBefore(wrap, document.body.firstChild);

    /* Mark active links */
    document.querySelectorAll('[data-page]').forEach(function (el) {
      if (el.getAttribute('data-page') === currentPage) {
        el.classList.add('pk-active');
        /* If inside a dropdown, also highlight the parent trigger */
        var ddMenu = el.closest('.pk-dd-menu');
        if (ddMenu) {
          var trigger = el.closest('.pk-dd').querySelector('.pk-dd-trigger');
          if (trigger) trigger.style.color = 'var(--gold-light)';
        }
      }
    });

    /* ── Navbar scroll effect ── */
    var nav = document.getElementById('pk-nav');
    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* ── Mobile menu toggle ── */
    var ham = document.getElementById('pk-ham');
    var mob = document.getElementById('pk-mobile');
    var cls = document.getElementById('pk-mobile-close');

    function closeMob() { mob.classList.remove('open'); ham.classList.remove('open'); }
    function toggleMob() { mob.classList.toggle('open'); ham.classList.toggle('open'); }

    if (ham) ham.addEventListener('click', toggleMob);
    if (cls) cls.addEventListener('click', closeMob);
    if (mob) mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMob);
    });

    /* ── Dropdown: click-toggle, click outside to close ── */
    var ddItem    = document.querySelector('.pk-dd');
    var ddTrigger = ddItem ? ddItem.querySelector('.pk-dd-trigger') : null;

    if (ddTrigger) {
      ddTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        ddItem.classList.toggle('open');
      });
    }

    /* Dropdown link click: navigate and close */
    if (ddItem) {
      ddItem.querySelectorAll('.pk-dd-menu a').forEach(function (a) {
        a.addEventListener('click', function () {
          ddItem.classList.remove('open');
        });
      });
    }

    /* Click anywhere outside closes dropdown */
    document.addEventListener('click', function (e) {
      if (ddItem && !ddItem.contains(e.target)) {
        ddItem.classList.remove('open');
      }
    });

    /* ── Scroll reveal ── */
    var revEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (revEls.length && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      revEls.forEach(function (el) { obs.observe(el); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHeader);
  } else {
    injectHeader();
  }

})();
