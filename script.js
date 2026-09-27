const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const navDropdown = document.querySelector(".nav-dropdown");


menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.textContent = isOpen ? "\u00D7" : "\u2630";
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

dropdownToggle.addEventListener("click", () => {
    const isOpen = navDropdown.classList.toggle("active");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll(".main-nav > a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const spamAnswer = document.getElementById("spamAnswer");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (spamAnswer.value.trim() === "8") {
            formMessage.textContent = "Thank you for your message.";
            formMessage.style.color = "#07f71b";

            contactForm.reset();
        } else {
            formMessage.textContent = "Wrong answer.";
            formMessage.style.color = "#f10808";
        }
    });
}