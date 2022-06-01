window.onload = function () {
  
  function customSubmit(event){
    event.preventDefault();
    console.log('chamou')
    
  }

  function addEvents(){
    const button = document.getElementById('enviar');
    button.addEventListener('click', customSubmit)
  }
  addEvents()
}