tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#2563EB', // blau accentué
        light: '#e5e5e5', // Blanc cassé
        dark: '#0f0f0f', // Noir profond
        darker: '#050505', // Noir plus profond
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
};

// Initialisation des animations
document.addEventListener('DOMContentLoaded', function () {
  // Animation des sections au scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Navigation mobile
  const mobileMenuButton = document.querySelector('header button');
  const navList = document.querySelector('nav ul');

  mobileMenuButton.addEventListener('click', () => {
    navList.classList.toggle('hidden');
    navList.classList.toggle('absolute');
    navList.classList.toggle('top-16');
    navList.classList.toggle('right-6');
    navList.classList.toggle('bg-darker');
    navList.classList.toggle('p-4');
    navList.classList.toggle('rounded-xl');
    navList.classList.toggle('shadow-xl');
    navList.classList.toggle('border');
    navList.classList.toggle('border-gray-800');
  });

  // Fermer le menu mobile lors du clic sur un lien
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!navList.classList.contains('hidden')) {
        navList.classList.add('hidden');
      }
    });
  });

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });
});
