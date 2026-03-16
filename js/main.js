// ── Mobile nav toggle ──────────────────────────────────────────

const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav-links--open');
  navToggle.setAttribute(
    'aria-label',
    isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
  );
});

// Close nav when a link is clicked (mobile)
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-links--open');
    navToggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

// ── Active nav highlight via IntersectionObserver ──────────────

const sections = document.querySelectorAll('#projets, #about, #competences, #contact');
const navLinkEls = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      navLinkEls.forEach(link => {
        link.classList.remove('nav-link--active');
        const href = link.getAttribute('href').replace('#', '');
        if (href === id) {
          link.classList.add('nav-link--active');
        }
      });
    });
  },
  {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  }
);

sections.forEach(section => observer.observe(section));
