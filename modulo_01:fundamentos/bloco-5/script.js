 
//Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//- document.getElementById()
//- document.getElementsByClassName()
//- document.getElementsByTagName()

function changeP(){
  let paragrafo1 = document.getElementById('padrão');
  paragrafo1.innerText = 'daqui a 2 anos estarei trabalhando como dev pleno!'
}
changeP()

function changecolormain(){
  let main = document.getElementsByClassName('main-content')[0];
  main.style.backgroundColor = 'rgb(76,164,109)';
}

changecolormain()

function changecolorsection(){
  let section = document.getElementsByTagName('section')[0];
  section.style.backgroundColor = 'white';
}

changecolorsection()

function correcttitle(){
  let title = document.getElementsByTagName('h1');
  title[0].innerText = 'Exercicio 5.1 - javaScript'
}

correcttitle()

function PToUpper(){
  let paragrafos = document.getElementsByTagName('p');
  for(let key = 0;key < paragrafos.length;key+=1){
    let mai = paragrafos[key].innerText;
    //console.log(mai.toUpperCase())
    paragrafos[key].innerText = mai.toUpperCase();
  }
}

PToUpper()



function showP(){
  let paragrafo = document.getElementsByTagName('p');
  for(let key in paragrafo){
    let mai = paragrafo[key].innerText;
    console.log(mai)
  }
}

showP()

/*let paragr = document.getElementsByTagName('p');
undefined
let mai = paragr[2];
undefined
mai
<p>​Trybe​</p>​
let mai = paragr[2].innerText;
undefined
mai
'Trybe'*/

 /*Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/