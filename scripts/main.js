
const btn = document.createElement('button');
btn.className = 'toggle-theme';
btn.textContent = 'Toggle Theme';
btn.onclick = () => {
  document.body.classList.toggle('dark');
};
document.body.appendChild(btn);
