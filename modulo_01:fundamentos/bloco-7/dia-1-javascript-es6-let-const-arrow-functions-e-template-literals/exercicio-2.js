// //            fatorial com Recursividade
// const fatorialComRecursividade = (num) => num===1?1:num*fatorialComRecursividade(num-1);

// console.log(fatorialComRecursividade(5))


// //                fatorial com For
// const fatorialComFor = (num) => {
//   let fatorial = num;
//   for (let index = num; index > 1; index -= 1){
//     fatorial *= index -1;
//   }
//   return fatorial;
// }

// console.log(fatorialComFor(5));



//            retorna a maior palavra de um arrey

const biggestWord = (word) => {
  const wordSplit = word.split(" ");
  let larger = '';
  for (let index in wordSplit){
    if(wordSplit[index].length > larger.length){
      larger = wordSplit[index];
    };
  }
  return larger;
}

console.log(`A maior palavra encontrada foi: "${biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu')}"`);
