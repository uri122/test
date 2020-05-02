const toggleBtn = document.querySelector('.nav-toggle-btn');
const menu = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
