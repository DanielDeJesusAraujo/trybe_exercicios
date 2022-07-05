const books = require('./arqArray');

//console.log(books);

const authorsNames = (listBooks) => {
  return listBooks.reduce((acc, current) => {
    return acc + `${current.author.name}${listBooks.indexOf(current)===listBooks.length-1?'.':', '}`
  }, '')
}

console.log(authorsNames(books));
