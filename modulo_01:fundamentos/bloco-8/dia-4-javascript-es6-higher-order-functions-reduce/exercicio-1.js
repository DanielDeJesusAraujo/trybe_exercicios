const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];



function flatten(array) {
  // escreva seu código aqui
  const saida = [];
  array.forEach((element) => {
    saida.push(element.reduce((acc, current)=> acc+current));
  });
  return saida;
}

console.log(flatten(arrays))