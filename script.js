// One orchestrated entrance on load: the About page's hero steps in
// line by line, then everything else is static.
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.about-hero');
  if (!hero || prefersReducedMotion) return;

  const parts = hero.querySelectorAll('.about-copy h1, .hero-summary, .social-row, .about-photo');
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
