const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliador = (index) => {
  if (RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index]) {
    return STUDENT_ANSWERS[index]==='N.A'?0:-0.5;
  }
  return 1
};

const joinDates = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  let total = 0;
  for(let index in RIGHT_ANSWERS){
    total += callback(index);
  }
  return total;
};

console.log(joinDates(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliador));
