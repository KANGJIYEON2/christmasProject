const menuIcon = document.querySelector(".menuicon");
const navMenu = document.querySelector(".nav__menu");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
  header.classList.toggle("active");
});
