export default function initScroll() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}
