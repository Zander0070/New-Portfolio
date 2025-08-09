var fadeInElements = document.querySelectorAll(".fade-in-section");
var fadeInObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        var target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add("show-on-scroll");
            target.classList.remove("hidden-on-load");
            observer.unobserve(target);
        }
    });
}, { threshold: 0.1 });
fadeInElements.forEach(function (el) { return fadeInObserver.observe(el); });
