export default function initHorario() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dateNow = new Date();
  const diaAgora = dateNow.getDay();
  const horarioAgora = dateNow.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
