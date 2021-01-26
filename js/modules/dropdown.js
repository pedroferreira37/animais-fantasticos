import clickOutSide from './outsideclick.js';

export default function initDropdown() {
  const dropdown = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    clickOutSide(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdown.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
