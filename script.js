// ==========================
// ✅ FORM SUBMIT (CONNECT TO BACKEND)
// ==========================
const form = document.getElementById("userForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Client-side validation
    if (!name || name.length < 3) {
      alert("Please enter a valid name (at least 3 characters)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!message || message.length < 10) {
      alert("Please provide a message (at least 10 characters)");
      return;
    }

    const userData = {
      name: name,
      email: email,
      message: message
    };

    try {
      const submitBtn = document.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      const response = await fetch("http://localhost:5000/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';

      if (response.ok) {
        alert("Application submitted successfully! We'll get back to you soon.");
        form.reset(); // clear inputs
      } else {
        alert(`Error: ${data.message}`);
      }

    } catch (error) {
      console.error("Network error:", error);
      const submitBtn = document.querySelector('.submit-btn');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
      alert("Unable to connect to server. Please try again later.");
    }
  });
}

// ==========================
// 🍔 HAMBURGER MENU TOGGLE
// ==========================
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
}

// ==========================
// ❌ CLOSE MOBILE MENU ON CLICK
// ==========================
const mobileLinks = document.querySelectorAll('.mobile-nav a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav) {
      mobileNav.classList.remove('active');
    }
  });
});

// ==========================
// 🚀 CTA BUTTON
// ==========================
const ctaButton = document.getElementById('cta-button');

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('Welcome to DecodeLabs Internship 2026!');
  });
}

// ==========================
// 🔽 SMOOTH SCROLL
// ==========================
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});