let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log('número na ', index + 1, 'º posição é', numbers[index]);
}

//segundo exercicio
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
console.log('A soma de todos os números é', soma);

//terceiro exercicio

let media = soma / numbers.length
console.log('A média aritimética do array é', media)

//quarto exercicio

if (media < 20) {
  console.log('valor maior que 20')
}
else {
  console.log('valor menor que 20')
}

//quinto exercicio

let maior = 0
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior){
    maior = numbers[index]
  }
}

console.log('O maior valor encontrado foi', maior)

//sexto exercicio

let impares = []
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] % 2 == 0){
    impares.push(numbers[index])
  }
}
if(impares.length == 0){
    console.log('nenhum número par encontrado.')
  }
else{
  console.log('os números pares encontrados foram', impares)
}

//sétimo exercicio

let menor = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor){
    menor = numbers[index]
  }
}
console.log('o menor valor encontrado foi', menor)

//oitavo exercicio

let array1a25 = []
for(let index = 1; index <= 25;index+=1){
  array1a25.push(index);
}
console.log(array1a25)

//nono exercicio

for (let index = 1;index < array1a25.length;index+=1){
  console.log(array1a25[index], 'x 2 =', array1a25[index]*2)
}