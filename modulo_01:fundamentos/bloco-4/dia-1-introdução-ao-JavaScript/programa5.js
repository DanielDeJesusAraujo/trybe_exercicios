const ang1 = 6
const ang2 = 8
const ang3 = 0

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0){
  console.log('ângulo ivalido.')
}
else{
  let soma = ang1 + ang2 + ang3
  if (soma > 180 || soma < 0){
    console.log('ângulo invalido.')
  }
  else{
    console.log('Os ângulos podem formar um triângulo')
  }
}

