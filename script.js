// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
});

// Sticky header style on scroll
const nav = document.querySelector('.site-nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.style.borderBottomColor = window.scrollY > 30 ? '#2a2a2a' : 'transparent';
    });
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => obs.observe(el));
}

// Populate email (bypass Cloudflare email obfuscation)
(function() {
    const u = 'a4avishkar';
    const d = 'gmail.com';
    const addr = u + '@' + d;
    const el = document.getElementById('email-link');
    const txt = document.getElementById('email-text');
    if (el) el.href = 'mailto:' + addr;
    if (txt) txt.textContent = addr;
})();
