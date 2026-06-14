const menuToggle = document.querySelector('.menu-toggle');
const menuLateral = document.querySelector('.menu-lateral');
const menuClose = document.querySelector('.menu-close');

if (menuToggle && menuLateral) {
  menuToggle.addEventListener('click', () => {
    menuLateral.classList.add('ativa');
    menuLateral.setAttribute('aria-hidden', 'false');
  });
}

if (menuClose && menuLateral) {
  menuClose.addEventListener('click', () => {
    menuLateral.classList.remove('ativa');
    menuLateral.setAttribute('aria-hidden', 'true');
  });
}

if (menuLateral) {
  menuLateral.addEventListener('click', (event) => {
    if (event.target === menuLateral) {
      menuLateral.classList.remove('ativa');
      menuLateral.setAttribute('aria-hidden', 'true');
    }
  });
}

flatpickr("#daterange", {
  mode: "range",
  dateFormat: "d/m/Y",
  locale: "pt"
});