export default function initModal() {
  const open = document.querySelector('[data-modal="abrir"]');
  const close = document.querySelector('[data-modal="fechar"]');
  const contModal = document.querySelector('[data-modal="container"]');
  function abrirModal() {
    open.addEventListener('click', (event) => {
      event.preventDefault();
      contModal.classList.toggle('active');
    });
  }
  function fecharModal() {
    close.addEventListener('click', (event) => {
      event.preventDefault();
      contModal.classList.remove('active');
    });
  }
  function clickOut(event) {
    if (event.target === this) {
      contModal.classList.remove('active');
    }
  }
  if (open && close && contModal) {
    abrirModal();
    fecharModal();
    contModal.addEventListener('click', clickOut);
  }
}
