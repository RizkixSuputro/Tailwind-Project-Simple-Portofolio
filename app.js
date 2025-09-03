const hamburger = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // smooth scroll
        block: "start",
      });
    }

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});
