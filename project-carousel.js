document.addEventListener("DOMContentLoaded", () => {
  // ===== SWIPER FIXED =====
  const swiperProjects = new Swiper(".projects-swiper", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1.2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 28 },
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

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

  // ===== NAV ACTIVE ON SCROLL =====
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(
          `.nav-item[href="#${entry.target.id}"]`,
        );
        if (link) link.classList.toggle("active", entry.isIntersecting);
      });
    },
    { threshold: 0.5 },
  );

  sections.forEach((section) => observer.observe(section));

  // ===== SCROLL ANIMATIONS =====
  const animated = document.querySelectorAll(".animate");
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("visible", entry.isIntersecting),
      );
    },
    { threshold: 0.15 },
  );

  animated.forEach((el) => animateObserver.observe(el));
});
