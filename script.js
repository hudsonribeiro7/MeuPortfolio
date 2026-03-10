/* =============================================
   SCRIPT.JS — HUDSON RIBEIRO PORTFOLIO
   Liquid Midnight v2
   =============================================
   Módulos:
   1. Cursor customizado (com lag suave)
   2. Reveal on Scroll (IntersectionObserver)
   3. Skills Carousel (drag + touch)
   4. Parallax na seção About
   5. Feedback visual no formulário
============================================= */


/* ─────────────────────────────────────────────
   1. CURSOR CUSTOMIZADO
   Ponto coral que segue o mouse instantaneamente.
   Ring que segue com easing (efeito de "peso").
───────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mx = 0, my = 0; // posição atual do mouse
let rx = 0, ry = 0; // posição do ring (com lag)

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  // Cursor segue imediatamente
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';

  // Ring segue com easing (interpola 12% da diferença por frame)
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();


/* ─────────────────────────────────────────────
   2. REVEAL ON SCROLL
   Elementos com classe .reveal aparecem ao entrar
   na viewport. .reveal-delay-1/2/3 adicionam atraso.
───────────────────────────────────────────── */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px' // dispara um pouco antes de chegar no final
});

revealElements.forEach((el) => revealObserver.observe(el));


/* ─────────────────────────────────────────────
   3. SKILLS CAROUSEL — DRAG & TOUCH
   Permite arrastar o carousel com mouse ou dedo.
───────────────────────────────────────────── */
const track = document.getElementById('skillsTrack');
let isDown   = false;
let startX;
let scrollLeft;

// Mouse
track.addEventListener('mousedown', (e) => {
  isDown     = true;
  startX     = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('mouseleave', () => { isDown = false; });
track.addEventListener('mouseup',    () => { isDown = false; });
track.addEventListener('mousemove',  (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x    = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5; // velocidade do arrasto
  track.scrollLeft = scrollLeft - walk;
});

// Touch (mobile)
track.addEventListener('touchstart', (e) => {
  isDown     = true;
  startX     = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('touchend',  () => { isDown = false; });
track.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x    = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});


/* ─────────────────────────────────────────────
   4. PARALLAX — SEÇÃO ABOUT
   As imagens laterais se movem em velocidades
   diferentes ao rolar, criando profundidade.
───────────────────────────────────────────── */
const imgA = document.getElementById('aboutA');
const imgB = document.getElementById('aboutB');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (imgA) imgA.style.transform = `translateY(${y * 0.06}px)`;
  if (imgB) imgB.style.transform = `translateY(${y * -0.04}px)`;
});


/* ─────────────────────────────────────────────
   5. FORMULÁRIO — FEEDBACK VISUAL
   Ao enviar, o botão muda de estado e volta
   ao normal após 3 segundos.
───────────────────────────────────────────── */
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');

  // Estado de sucesso
  btn.textContent        = '✓ Mensagem enviada!';
  btn.style.background   = 'var(--green)';
  btn.style.color        = '#000';
  btn.style.pointerEvents = 'none'; // evita duplo envio

  // Restaura após 3s
  setTimeout(() => {
    btn.textContent        = 'Enviar mensagem →';
    btn.style.background   = 'var(--coral)';
    btn.style.color        = '#000';
    btn.style.pointerEvents = 'auto';
    form.reset();
  }, 3000);
});

  // Fim do script.js
  