// Select Elements
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

// Add Click Event Listener to Toggle Navigation Links
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
