// One orchestrated entrance on load: the hero's entry tag and name
// step in like a log line being written, then everything else is static.
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero');
  if (!hero || prefersReducedMotion) return;

  const parts = hero.querySelectorAll('.entry-tag, .hero-name, .hero-role, .hero-summary, .hero-links');
  parts.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80 * i);
  });
});
