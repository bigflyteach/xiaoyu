const body = document.body;
const panel = document.querySelector('#contactPanel');
const openButtons = document.querySelectorAll('.js-contact');
const closeButton = document.querySelector('.panel-close');
const backdrop = document.querySelector('.panel-backdrop');
const toast = document.querySelector('.toast');
const wardrobeGallery = document.querySelector('#wardrobeGallery');
const lightbox = document.querySelector('#lookLightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxNumber = document.querySelector('#lightboxNumber');
const lightboxClose = document.querySelector('.look-lightbox-close');
const lightboxPrev = document.querySelector('.look-lightbox-prev');
const lightboxNext = document.querySelector('.look-lightbox-next');
const guzhengAudio = document.querySelector('#guzhengAudio');
const musicPlayer = document.querySelector('.music-player');
const musicNow = document.querySelector('#musicNow');
const trackButtons = document.querySelectorAll('.track-button');
const wardrobeLooks = Array.from({ length: 53 }, (_, index) => ({
  number: index + 1,
  src: `assets/images/outfits/image${index + 1}.jpeg`,
}));
let activeLookIndex = 0;

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
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  else if (event.key === 'Escape') closePanel();
  if (event.key === 'ArrowLeft' && lightbox.classList.contains('open')) showLook(activeLookIndex - 1);
  if (event.key === 'ArrowRight' && lightbox.classList.contains('open')) showLook(activeLookIndex + 1);
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

function stopMusic() {
  guzhengAudio.pause();
  musicPlayer.classList.remove('is-playing');
  trackButtons.forEach(button => {
    button.classList.remove('active');
    button.querySelector('i').textContent = '播放';
  });
}

trackButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const isCurrent = button.classList.contains('active');
    if (isCurrent && !guzhengAudio.paused) {
      stopMusic();
      musicNow.textContent = '已暂停，可选择另一段音乐试听';
      return;
    }
    stopMusic();
    guzhengAudio.src = button.dataset.src;
    try {
      await guzhengAudio.play();
      button.classList.add('active');
      button.querySelector('i').textContent = '暂停';
      musicPlayer.classList.add('is-playing');
      musicNow.textContent = `${button.querySelector('b').textContent} · 正在播放`;
    } catch {
      musicNow.textContent = '音频暂未就绪，请稍后再试';
    }
  });
});

guzhengAudio.addEventListener('ended', () => {
  stopMusic();
  musicNow.textContent = '本段试听结束，可选择另一首';
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

function showLook(index) {
  activeLookIndex = (index + wardrobeLooks.length) % wardrobeLooks.length;
  const look = wardrobeLooks[activeLookIndex];
  const label = `造型 ${String(look.number).padStart(2, '0')}`;
  lightboxImage.src = look.src;
  lightboxImage.alt = `小雨老师${label}`;
  lightboxNumber.textContent = `LOOK ${String(look.number).padStart(2, '0')} / 53`;
}

function openLightbox(index) {
  showLook(index);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  body.classList.add('lightbox-open');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  body.classList.remove('lightbox-open');
}

if (wardrobeGallery) {
  wardrobeGallery.innerHTML = wardrobeLooks.map(look => `
    <button class="wardrobe-look" type="button" data-look-index="${look.number - 1}" aria-label="放大查看造型 ${String(look.number).padStart(2, '0')}">
      <img src="${look.src}" loading="lazy" alt="小雨老师可选演出造型 ${String(look.number).padStart(2, '0')}">
      <span><b>LOOK ${String(look.number).padStart(2, '0')}</b><i>点击放大</i></span>
    </button>
  `).join('');

  wardrobeGallery.querySelectorAll('.wardrobe-look').forEach(button => {
    button.addEventListener('click', () => openLightbox(Number(button.dataset.lookIndex)));
  });
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showLook(activeLookIndex - 1));
lightboxNext.addEventListener('click', () => showLook(activeLookIndex + 1));
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});

if (new URLSearchParams(window.location.search).get('contact') === '1') {
  openPanel();
}
