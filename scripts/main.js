document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-theme';
  toggleBtn.textContent = 'Toggle Theme';
  toggleBtn.setAttribute = ('aria-label','Toggle Light and dark mode');
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Hamburger menu
  const navToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
