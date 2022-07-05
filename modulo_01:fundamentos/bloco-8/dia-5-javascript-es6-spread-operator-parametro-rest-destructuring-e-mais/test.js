// =================================spread================================
{
// const lanches = ['coxinha', 'pastél', 'churros', 'suco', 'coca cola'];

// const preco = [3.50, 2.00, 2.50, 2.00, 7.00];

// const all = [...lanches,...preco];

// console.log(preco)

// console.log(lanches)

// console.log(all)
}

// ================================rest===================================

{
const test = (...rest) => console.log(rest);

test(1,3,4,5,6,7) 
}

const people = {
  name: 'ana',
  age: 23,
  like: 'wolk'
}

const {name} = people

console.log(name)