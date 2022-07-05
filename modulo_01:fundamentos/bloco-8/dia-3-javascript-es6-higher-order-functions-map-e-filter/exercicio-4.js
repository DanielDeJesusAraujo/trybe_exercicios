const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//🚀4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const newDate = (specific) => {
  const date = new Date();
  const listDate = {
    day: String(date.getDate()).padStart(2, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    year: String(date.getFullYear())
  }
  switch (specific) {
    case 'day':
      return listDate.day;
    case 'month':
      return listDate.month;
    case 'year':
      return listDate.year;
    default:
      return `${listDate.day}/${listDate.month}/${listDate.year}`
  };
}


const booksOver60 = arrayBooks => {
  const listBook60 = arrayBooks.filter((book) => {
    return  parseInt(newDate('year')) - book.releaseYear > 60
  });
  listBook60.sort((a, b) => 
  parseInt(newDate('year')) - b.releaseYear - parseInt(newDate('year')) - a.releaseYear);
  return listBook60;
}
console.log(booksOver60(books));