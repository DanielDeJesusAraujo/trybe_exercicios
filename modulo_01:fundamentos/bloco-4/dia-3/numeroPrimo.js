
let num = 50;

let maiPrimo = 0;
let primos = [];
for (let index = num; index > 1; index -= 1) {
  let numdivisores = 0;
  for (let cont = index - 1; cont > 1; cont -= 1) {
    if (index % cont == 0) {
      numdivisores += 1;
    }
  }
  if (numdivisores == 0) {
    if (index > maiPrimo) {
      maiPrimo = index
    }
    primos.push(index)
  }
}
console.log(primos.reverse())
console.log(`O maior número primo encontrado foi ${maiPrimo}`)
