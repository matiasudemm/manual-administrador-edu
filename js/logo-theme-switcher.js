function updateLogo() {
  const logo = document.getElementById('edu-logo');
  const darkMode = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';

  if (logo) {
    logo.src = darkMode ? 'img/EDU-Oscuro.png' : 'img/EDU.png';
  }
}

document.addEventListener('DOMContentLoaded', updateLogo);

// Detecta cambios en el esquema de color
const observer = new MutationObserver(updateLogo);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-md-color-scheme']
});
