const custoProdutu = 80;
const valorVenda = 120;
let imposto = custoProdutu * 20 / 100

let lucro = (valorVenda - (custoProdutu + imposto)) * 1000;

if (custoProdutu <= 0 || valorVenda <= 0) {
  console.log('erro, valor informado é invalido')
}
else {

}
console.log(lucro)