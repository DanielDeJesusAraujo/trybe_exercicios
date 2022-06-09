// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = ifScope + `ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }

// }

// testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const alfabeto = ['f', 'e', 'g', 'a', 'b', 'c', 'd', 'u', 'F', 'o', 'p']

// Seu código aqui.

const orderArrayNum = array => array.sort((a, b) => a - b);

const ordenaStrings = (array) => {
  return array.sort()
}

console.log(orderArrayNum(oddsAndEvens)); // será necessário alterar essa linha 

console.log(ordenaStrings(alfabeto))

console.log('fim!')