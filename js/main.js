document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-include').innerHTML = data;
            initNavigation();
        });

    // Load Footer
    fetch('common/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-include').innerHTML = data;
            document.getElementById('year').textContent = new Date().getFullYear();
            initAnimations();
        });
});

// Navigation Logic
function initNavigation() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const ham = document.getElementById('hamburger');
    menu.classList.toggle('open');
    ham.classList.toggle('open');
}

// Scroll Reveal Animations
function initAnimations() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => observer.observe(el));
}