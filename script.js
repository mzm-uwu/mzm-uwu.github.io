document.addEventListener("DOMContentLoaded", () => {
  const tham = document.querySelector(".tham");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  const toggleClass = (element, className) => {
    element.classList.toggle(className);
  };

  if (tham) {
    tham.addEventListener("click", () => toggleClass(tham, "tham-active"));
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      toggleClass(navMenu, "hidden");
      navMenu.classList.add("flex");
    });
  }
});
