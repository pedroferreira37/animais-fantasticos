export default class Horario {
  constructor(display) {
    this.funcionamento = document.querySelector(display);
    this.activeClass = 'active';
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  nowDate() {
    this.dateNow = new Date();
    this.diaAgora = this.dateNow.getDay();
    this.horarioAgora = this.dateNow.getUTCHours() - 3;
  }

  itsOpen() {
    this.semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;

    this.horarioAberto = this.horarioAgora
    >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    return this.semanaAberto && this.semanaAberto;
  }

  estaAberto() {
    if (this.itsOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.nowDate();
      this.estaAberto();
    }
  }
}
