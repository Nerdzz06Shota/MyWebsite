// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            `Thanks, ${name}! Your message has been received.`;

        contactForm.reset();
    });
}