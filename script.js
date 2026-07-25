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
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Subtle fade-in for sections
const observerOptions = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('section-reveal');
    observer.observe(section);
});

