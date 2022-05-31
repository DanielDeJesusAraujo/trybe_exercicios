//criações
let body = document.getElementsByTagName('body');
//1º
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body[0].appendChild(h1);
//2º
let main = document.createElement('main');
main.className = 'main-content';
body[0].appendChild(main);
//3º
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);
//4º
let p = document.createElement('p');
p.innerText = 'terceiro exercicio de javaScript...';
section.appendChild(p);
//5º
let section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);
//6º
let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);
//7º
let image = document.createElement('img');
image.src = 'https://picsum.photos/200'
image.className = 'small-image'
section2.appendChild(image);
//8º
let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'deis'];
let list = document.createElement('ul');
for(let key in array){
  let itens = document.createElement('li');
  itens.innerText = array[key];
  itens.style.listStyleType = 'decimal'
  list.appendChild(itens);
}
section3.appendChild(list);
//9º
for (let index = 0; index < 3;index +=1){
  let h3 = document.createElement('h3')
  main.appendChild(h3)
}
// alterações

// 1º
h1.className = 'title';
//2º
for(let index = 0;index<3;index+=1){
  let h3 = document.getElementsByTagName('h3')[index];
  h3.className = 'description'
}
//3º
main.removeChild(section2)
//4º
section3.style.marginRight = 'auto'

main.style.background = 'green'

for (let key in list.children){
  console.log(key)
}







/*function createDivElement (classes){
  let newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv;
};
function addElmentAsChild(local, elemento){
  local.appendChild(elemento);
};
for(let feature of features){
  let element = createDivElement(feature);
  addElmentAsChild(container, element);
};*/


