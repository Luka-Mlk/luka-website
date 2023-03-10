const hamburger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileUl = document.querySelector(".mobile--ul");

const scrollToBio = () => {
  window.scrollTo(0, 0);
};
const scrollToSkill = () => {
  if (window.innerWidth <= 655) {
    window.scrollTo(0, document.body.scrollHeight / 4);
    return;
  }
  window.scrollTo(0, document.body.scrollHeight / 6);
};
const scrollToWork = () => {
  if (window.innerWidth <= 655) {
    window.scrollTo(0, document.body.scrollHeight / 2.2);
    return;
  }
  window.scrollTo(0, document.body.scrollHeight / 2.4);
};
const scrollToProject = () => {
  if (window.innerWidth <= 655) {
    window.scrollTo(0, document.body.scrollHeight / 1.38);
    return;
  }
  window.scrollTo(0, document.body.scrollHeight / 1.4);
};
hamburger.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
  console.log(e.target, mobileMenu);
});
document.addEventListener("click", (e) => {
  if (
    e.target !== hamburger &&
    e.target !== mobileMenu &&
    e.target !== mobileUl
  ) {
    mobileMenu.classList.add("hidden");
  }
  console.log(window.innerWidth);
});
