let age = 21
let sex = 'f'
let weight = 51
let heigth = 160

let tmb = 0
if (age > 0 && weight > 0 && heigth > 0) {
  if (sex.toLowerCase() == 'm') {
    tmb = (heigth * 6.25) + (weight * 9.99) - (age * 4.92) + 5
  }
  else if (sex.toLowerCase() == 'f') {
    tmb = (heigth * 6.25) + (weight * 9.99) - (age * 4.92) + 161
  }
}
else {
  console.log('erro, valor invalido uo inesistente')
}
console.log('A taxa metabolica basal é:', tmb, 'kg')
