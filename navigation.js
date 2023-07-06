const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    navToggle.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
    nav.setAttribute("data-visible", false);
  }
});
