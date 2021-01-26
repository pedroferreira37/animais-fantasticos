// function mudarClasse() {
//   document.body.classList.toggle('active')
  
// }

// setInterval(mudarClasse, 3000)

// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const time = document.querySelector('.tempo')

// iniciar.addEventListener('click', iniciate)
// pausar.addEventListener('click', stop)
// pausar.addEventListener('dblclick', reset)

// let i = 0;
// let timer;
// function iniciate() {
//  timer = setInterval(() => {
//    time.innerText = i++;
//  }, 100)
//   iniciar.setAttribute('disabled', '')
// }

// function stop(){
//   clearInterval(timer)
//   iniciar.removeAttribute('disabled')
// }

// function reset() {
//   time.innerText = 0;
//   i = 0;
// }

// const cep = document.getElementById('cep')
// const buscar = document.getElementById('buscar')
// const result = document.querySelector('.resultadoCep')
// const btc = document.querySelector('.btc')
// const piada = document.querySelector('.piada')
// const next = document.getElementById('proxima')

// buscar.addEventListener('click', buscarCep)

// function buscarCep(event) {
//   event.preventDefault()
//   const inputCep = cep.value;
//   fetchSearch(inputCep)
  
// }

// function fetchSearch(cep) {
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(r => r.json())
//   .then(body => {
//     const names = {
//       rua: body.logradouro,
//       bairros: body.bairro,
//       numero: 23,

//     }
//     result.innerText = names.bairros
//   })
// }


// function bitCoin() {
//   fetch('https://blockchain.info/ticker')
//   .then(r => r.json())
//   .then(btcJson => {
//     btc.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
//   })
// }
// setInterval(bitCoin, 40)

// bitCoin()

// next.addEventListener('click', piadaAleatoria)


// function piadaAleatoria() {
//   fetch('https://api.chucknorris.io/jokes/random')
//   .then(r => r.json())
//   .then(piadas => {
//     piada.innerText = piadas.value
//   })
// }

// piadaAleatoria()

// const frutas = {
//   lista:[],
//   set nova(fruta) {
//     this.lista.push(fruta)
//   }
// }

// frutas.nova = 'Banana'


