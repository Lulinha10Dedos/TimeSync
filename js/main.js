/* ============================
   TimeSync 1.0 — Script Principal
   Funções:
   - Menu responsivo
   - Animações de rolagem (fade / slide)
   - Atualização dinâmica do ano
   - Efeitos visuais na Home
   ============================ */

// ===== Menu Mobile =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}

// ===== Atualizar ano do rodapé =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Animações de Fade-In na rolagem =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== Barra de progresso animada =====
const progressFills = document.querySelectorAll('.progress-fill');

progressFills.forEach(fill => {
  const width = fill.style.width;
  fill.style.width = '0';
  setTimeout(() => {
    fill.style.transition = 'width 1.5s ease';
    fill.style.width = width;
  }, 500);
});

// ===== Pequena animação no botão da CTA =====
const ctaBtn = document.querySelector('.cta-card .btn-primary');
if (ctaBtn) {
  ctaBtn.addEventListener('mouseenter', () => {
    ctaBtn.style.transform = 'scale(1.08)';
  });
  ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = 'scale(1)';
  });
}
