// const array = [2, 5, 6, 3];

// [dois, sinco, seis, tres] = array;

// console.log(dois);



// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const arrayOfNum = [3, 3, 4, 5, 6, 43, 2, 6,];

const sum = (...rest) => rest.reduce((acc, current)=>acc+current);

console.log(sum(3,4,2,3,4,44,5));
