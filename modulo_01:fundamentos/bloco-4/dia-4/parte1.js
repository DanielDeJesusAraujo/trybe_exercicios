let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem vinda, ${info.personagem}!`);

// segundo exercicio

info['recorrente'] = 'sim';

console.log(info);
console.log('================================')

// terceiro exercicio

for (let key in info) {//mostra todas as chaves do objeto.
  console.log(key);
}
console.log('================================')

//quarto exercicio

for (let key in info) {
  console.log(`${info[key]}`);
}
console.log('================================')
//quinto exercicio

let objeto2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info, objeto2) {
  console.log(info[key], ' e ', objeto2[key])
};

//sexto exercicio

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//console.log(leitor.nome, leitor.sobrenome, leitor.livrosFavoritos[0].titulo);
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);