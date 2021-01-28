import clickOutSide from './outsideclick.js';

export default class DropdownMenu {
  constructor(menu, events) {
    this.dropdownMenus = document.querySelectorAll(menu);
    this.activeClass = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    clickOutSide(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEventMenu() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventMenu();
    }
    return this;
  }
}
