export default class Modal {
  constructor(abrir, fechar, container) {
    this.open = document.querySelector(abrir);
    this.close = document.querySelector(fechar);
    this.contModal = document.querySelector(container);

    this.eventAbrirModal = this.eventAbrirModal.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  abrirModal() {
    this.contModal.classList.toggle('active');
  }

  eventAbrirModal(event) {
    event.preventDefault();
    this.abrirModal();
  }

  clickOut(event) {
    if (event.target === this.contModal) {
      this.abrirModal(event);
    }
  }

  addModalEvents() {
    this.open.addEventListener('click', this.eventAbrirModal);
    this.close.addEventListener('click', this.eventAbrirModal);
    this.contModal.addEventListener('click', this.clickOut);
  }

  init() {
    if (this.open && this.close && this.contModal) {
      this.addModalEvents();
    }
    return this;
  }
}
