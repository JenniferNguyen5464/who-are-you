
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
