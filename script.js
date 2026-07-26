document.documentElement.classList.add('js-enabled');

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealAll = () => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  window.setTimeout(revealAll, 1400);
} else {
  revealAll();
}
