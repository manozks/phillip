/* ============================================================
   footer.js  —  Phillip Kloeckner · Shared Footer
   Injects the 4-column footer grid + bottom bar into every
   page and wires up the newsletter subscribe form.
   ============================================================ */
(function () {

  var footerHTML =
    '<div class="pk-footer-wrap">' +
      '<div class="pk-footer-grid">' +

        /* COL 1 — Contact */
        '<div>' +
          '<span class="pk-fcol-label">Contact</span>' +
          '<div class="pk-finfo">' +
            '<strong>Phillip Kloeckner, DMA</strong>' +
            'Founder &amp; Artistic Director<br>' +
            'Chicago International Organ Academy<br>' +
            '77 W. Washington St, Ste 200<br>' +
            'Chicago, Illinois 60602' +
          '</div>' +
        '</div>' +

        /* COL 2 — Get in Touch */
        '<div>' +
          '<span class="pk-fcol-label">Get in Touch</span>' +
          '<div class="pk-finfo">' +
            '<a href="tel:7733091769">773-309-1769</a><br>' +
            '<a href="mailto:info@cioa.global">info@cioa.global</a>' +
          '</div>' +
       
        '</div>' +

        /* COL 3 — Newsletter */
        '<div>' +
          '<span class="pk-fcol-label">Newsletter</span>' +
          '<p class="pk-sub-head">Stay Close to the Music</p>' +
          '<p class="pk-sub-desc">Recitals, premieres &amp; recordings &mdash; to your inbox.</p>' +
          '<div class="pk-sub-row" id="pk-sub-row">' +
            '<input type="email" class="pk-sub-input" id="pk-sub-email" placeholder="Your email address" autocomplete="email"/>' +
            '<button class="pk-sub-btn" id="pk-sub-btn">Go</button>' +
          '</div>' +
          '<div class="pk-sub-ok" id="pk-sub-ok">' +
            '<svg width="14" height="14" viewBox="0 0 18 18" fill="none">' +
              '<circle cx="9" cy="9" r="8.5" stroke="#b8965a" stroke-width="1"/>' +
              '<path d="M5 9l3 3 5-5" stroke="#b8965a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
            ' Thank you &mdash; we&rsquo;ll be in touch soon.' +
          '</div>' +
          '<p class="pk-sub-note">No spam, ever. Unsubscribe at any time.</p>' +
        '</div>' +

        /* COL 4 — Follow */
        '<div>' +
          '<span class="pk-fcol-label">Follow</span>' +
          '<div class="pk-soclist">' +
            '<a href="http://www.linkedin.com/pub/phillip-kloeckner/38/634/1b6" target="_blank" rel="noopener" class="pk-soc-link">' +
              '<span class="pk-dot"></span>' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                '<rect x="2" y="2" width="20" height="20" rx="3"/>' +
                '<path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>' +
              '</svg>LinkedIn' +
            '</a>' +
            '<a href="http://www.cioa.global/" target="_blank" rel="noopener" class="pk-soc-link">' +
              '<span class="pk-dot"></span>' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                '<circle cx="12" cy="12" r="10"/>' +
                '<path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>' +
              '</svg>CIOA Website' +
            '</a>' +
            '<a href="#" class="pk-soc-link">' +
              '<span class="pk-dot"></span>' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>' +
                '<polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>' +
              '</svg>YouTube' +
            '</a>' +
            '<a href="recording.html" class="pk-soc-link">' +
              '<span class="pk-dot"></span>' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M9 18V5l12-2v13"/>' +
                '<circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>' +
              '</svg>Recordings' +
            '</a>' +
          '</div>' +
        '</div>' +

      '</div>' + /* end footer-grid */
    '</div>' +   /* end footer-wrap */

    /* Bottom bar */
    '<div class="pk-foot-bottom">' +
      '<p class="pk-foot-copy">&copy; 2024 Phillip Kloeckner, D.M.A. All rights reserved.</p>' +
      '<ul class="pk-foot-nav">' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="biography.html">Biography</a></li>' +
        '<li><a href="vision.html">Vision</a></li>' +
        '<li><a href="listen.html">Listen</a></li>' +
        '<li><a href="news.html">News</a></li>' +
        '<li><a href="recording.html">Recording</a></li>' +
        '<li><a href="contact.html">Contact</a></li>' +
      '</ul>' +
    '</div>';

  function injectFooter() {
    var wrap = document.createElement('div');
    wrap.id = 'pk-footer-root';
    wrap.innerHTML = footerHTML;
    document.body.appendChild(wrap);

    /* ── Subscribe form ── */
    var btn   = document.getElementById('pk-sub-btn');
    var input = document.getElementById('pk-sub-email');
    var row   = document.getElementById('pk-sub-row');
    var ok    = document.getElementById('pk-sub-ok');

    function doSubscribe() {
      if (!input) return;
      var val = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        input.style.borderColor = 'rgba(200,80,80,0.5)';
        input.style.transition  = 'border-color 0.3s';
        setTimeout(function () { input.style.borderColor = 'rgba(184,150,90,0.2)'; }, 1800);
        return;
      }
      if (row) row.style.display = 'none';
      if (ok)  ok.style.display  = 'flex';
    }

    if (btn)   btn.addEventListener('click', doSubscribe);
    if (input) input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doSubscribe();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }

})();
