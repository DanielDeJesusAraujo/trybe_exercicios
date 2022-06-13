const changeX = (name) => {
  const phrase = 'Tryber x aqui!';
  let copy = phrase.split('')
  for (let index in copy){
    if (copy[index] === 'x'){
      copy[index] = name;
    }
  }
  return copy.join('');
}



console.log(changeX('daniel'))

const createPhrase = (returne) => {
  const skills = ['javaScript', 'HTML', 'CSS'];
  console.log(`${returne}
minhas três principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`)
}

createPhrase(changeX('daniel'));