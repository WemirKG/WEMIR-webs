// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("show");
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("show");
    });
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple placeholder submit handler (prevents full refresh for now)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thanks for reaching out to WEMIR-Webs! When you're ready, we'll connect this form to your email or Notion."
    );
    contactForm.reset();
  });
}
