document.addEventListener("DOMContentLoaded", function () {
  // ===== SWIPER =====
  const swiperProjects = new Swiper(".projects-swiper", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // ===== HAMBURGER =====
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
    });
  });

  // ===== NAV LINK ACTIVE =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => navObserver.observe(section));

  // ===== SCROLL ANIMATIONS =====
  const animatedElements = document.querySelectorAll(".animate");

  console.log("Found animated elements:", animatedElements.length); // ← check this

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(
        "Observed:",
        entry.target.className,
        "isIntersecting:",
        entry.isIntersecting,
      );
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  animatedElements.forEach((el) => animationObserver.observe(el));
});
