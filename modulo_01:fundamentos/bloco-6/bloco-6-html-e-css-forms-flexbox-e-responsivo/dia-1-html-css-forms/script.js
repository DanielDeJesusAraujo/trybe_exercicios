window.onload = function () {
  let name;
  let email;
  let answer;
  function customSubmit(event) {
    name = document.getElementById('full-name').value;
    email = document.getElementById('email').value;
    answer = document.getElementById('resposta').value;
    event.preventDefault();
    validaDados()
  }
  
  function validaDados(){
    if (10 > name.length || name.length > 40){
      window.alert('Dados Inválidos')
    }
    else if(10 > email.length || email.length > 50){
      window.alert('Dados Inválidos')
    }
    else if(answer.length > 500){
      window.alert('Dados Inválidos')
    }
    else{
      window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
  }

  function addEvents() {
    const button = document.getElementById('enviar');
    button.addEventListener('click', customSubmit)
  }
  addEvents()
}