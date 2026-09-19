const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = 'Menu';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

// Gives buttons a small, tactile pull toward the cursor on desktop devices.
document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(hover: hover)').matches) {
      const box = button.getBoundingClientRect();
      const x = (event.clientX - box.left - box.width / 2) * 0.13;
      const y = (event.clientY - box.top - box.height / 2) * 0.18;
      button.style.transform = `translate(${x}px, ${y}px)`;
    }
  });
  button.addEventListener('pointerleave', () => { button.style.transform = ''; });
});
