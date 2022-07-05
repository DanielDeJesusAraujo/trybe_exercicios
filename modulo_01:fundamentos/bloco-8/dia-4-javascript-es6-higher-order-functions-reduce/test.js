// maior número com reduce
{
  const numbers = [1, 25, 3, 4, 5, 40, 7, 8, 9, 10];

  const numReduce = (arrayNumbers) => {
    return arrayNumbers.reduce((acc, atual) => atual > acc ? acc = atual : acc);
  }

  console.log(numReduce(numbers));
}

// maior palavra com reduce

const words = ['ola', 'mundo!', 'sou', 'tryber', 'chablau'];

const longWord = (arrayWords) => {
  return arrayWords.reduce((acc, current) => {
   return acc.length < current.length? acc=current:acc;
  });
}

console.log(longWord(words));

// 

const productsClear = [
  {
    id:1,
    name: 'sabão',
    preço: 2.50,
  },
  {
    id:2,
    name: 'água sanitaria',
    preço: 5.50,
  },
  {
    id:3,
    name: 'desinfetante',
    preço: 3.50,
  },
  {
    id:4,
    name: 'limpa vidro',
    preço: 9.50,
  }
]

const sumPrice = (listProducts) => listProducts.reduce((accumulator, current) => {
 return typeof accumulator === 'object'?accumulator.preço+current.preço
});


console.log(sumPrice(productsClear))
