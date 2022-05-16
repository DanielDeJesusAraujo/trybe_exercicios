let salarioBruto = 3000;
let salarioLiquido = salarioBruto
let parcelainss = 0

if (salarioBruto <= 1556.94) {
  salarioLiquido -= salarioBruto * 8 / 100;
  parcelainss = salarioBruto * 8 / 100
}
else if (salarioBruto <= 2594.92) {
  salarioLiquido -= salarioBruto * 9 / 100;
  parcelainss = salarioBruto * 9 / 100
}
else if (salarioBruto <= 5189.82) {
  salarioLiquido -= salarioBruto * 11 / 100
  parcelainss = salarioBruto * 11 / 100
}
else if (salarioBruto > 5189.82) {
  salarioLiquido -= 570.88
  parcelainss = 570.88
}
console.log(parcelainss)
console.log(salarioLiquido)

let inpostoDeRenda = 0
let parcelaADeduzir = 0

if (salarioLiquido <= 1903.98) {
  console.log('você está insento do Imposto de Renda')
}
else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
  inpostoDeRenda = salarioLiquido * 7.5 / 100
  parcelaADeduzir = 142.80
}
else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
  inpostoDeRenda = salarioLiquido * 15 / 100
  parcelaADeduzir =354.80
}
else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
  inpostoDeRenda = salarioLiquido * 22.5 / 100
  parcelaADeduzir =636.13
}
else {
  inpostoDeRenda = salarioLiquido * 27.5 / 100
  parcelaADeduzir =869.36
}
parcelaFinal = inpostoDeRenda - parcelaADeduzir
salarioLiquido -= parcelaFinal 
console.log(salarioLiquido)