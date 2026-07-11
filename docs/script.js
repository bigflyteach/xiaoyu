const body = document.body;
const panel = document.querySelector('#contactPanel');
const openButtons = document.querySelectorAll('.js-contact');
const closeButton = document.querySelector('.panel-close');
const backdrop = document.querySelector('.panel-backdrop');
const toast = document.querySelector('.toast');

function openPanel() {
  body.classList.add('panel-open');
  panel.setAttribute('aria-hidden', 'false');
  closeButton.focus();
}

function closePanel() {
  body.classList.remove('panel-open');
  panel.setAttribute('aria-hidden', 'true');
}

openButtons.forEach(button => button.addEventListener('click', openPanel));
closeButton.addEventListener('click', closePanel);
backdrop.addEventListener('click', closePanel);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closePanel();
});

document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      toast.textContent = '微信号已复制';
    } catch {
      toast.textContent = `请手动复制：${value}`;
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

if (new URLSearchParams(window.location.search).get('contact') === '1') {
  openPanel();
}
