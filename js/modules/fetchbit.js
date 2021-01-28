export default function fetchBit(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / json.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
