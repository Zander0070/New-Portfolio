const fadeInElements = document.querySelectorAll<HTMLElement>(".fade-in-section");

const fadeInObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        target.classList.add("show-on-scroll");
        target.classList.remove("hidden-on-load");
        observer.unobserve(target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeInElements.forEach(el => fadeInObserver.observe(el));