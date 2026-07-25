// Smooth scroll for in-page links
const nav = document.querySelector('.nav');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        
        // Close mobile nav if open
        if (nav && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            if (mobileNavToggle) mobileNavToggle.setAttribute('aria-expanded', 'false');
        }

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile nav toggle handler
if (mobileNavToggle && nav) {
    mobileNavToggle.addEventListener('click', () => {
        const expanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('nav-active');
    });
}

// Header background on scroll
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// Scroll reveal observer
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .metrics-section').forEach(section => {
    section.classList.add('section-reveal');
    observer.observe(section);
});

// Card Subtle Mouse Tracking Effect
document.querySelectorAll('.project-card, .skill-card, .visual-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
