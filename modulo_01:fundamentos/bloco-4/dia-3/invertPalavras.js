let palavra = 'banana'

let palavrainvertida = ''
for(let index = palavra.length-1; index >= 0;index-=1){
  palavrainvertida += palavra[index]
}
console.log('a palavra '+palavra+' invertida é '+palavrainvertida)
