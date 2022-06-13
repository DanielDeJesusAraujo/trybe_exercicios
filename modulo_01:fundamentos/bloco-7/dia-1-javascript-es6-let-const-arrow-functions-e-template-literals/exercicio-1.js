// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordenaArray = (array) => array.sort((a, b) => a - b)

console.log(ordenaArray([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉

module.exports = {ordenaArray};