const chekBet = (number, numBet) => number === numBet ? 'Prabéns você ganhou!' : 'Tente novamente'

const randomNumber = (numBet, callback) => {
  const number = Math.floor(Math.random() * (1, 4) + 1);
  return callback(number, numBet);
};

console.log(randomNumber(2, chekBet));
