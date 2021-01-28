import AnimaNumeros from './animanumeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }
  const numerosGrid = document.querySelector(target);
  function fillAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }
  async function criarAnimais() {
    try {
      const animaisResponde = await fetch(url);
      const animaisJson = await animaisResponde.json();
      animaisJson.forEach((animal) => fillAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
