const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__links");
  const navLinks = document.querySelectorAll(".navbar__links li");

  // Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    // Index used to animate delay between each listitem
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1 ease forwards ${index / 7 + 1.5}s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
