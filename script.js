const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const siteHeader = document.querySelector(".site-header");

const updateHeaderOnScroll = () => {
  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", updateHeaderOnScroll);
window.addEventListener("load", updateHeaderOnScroll);

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
