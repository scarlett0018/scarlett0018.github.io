// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav border on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Count-up animation for hero stats
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function countUp(el, target, duration, isDecimal, prefix, suffix) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const val = easeOutCubic(progress) * target;
    el.textContent = prefix + (isDecimal ? val.toFixed(2) : Math.floor(val).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll(".stat__num[data-target]");
if (statEls.length && "IntersectionObserver" in window) {
  const statsObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.target);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const isDecimal = el.dataset.decimal === "true";
        countUp(el, target, 1400, isDecimal, prefix, suffix);
        statsObs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => statsObs.observe(el));
}
