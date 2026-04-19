// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// CTA button alert
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
  alert('Welcome to DecodeLabs Internship 2026!');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});