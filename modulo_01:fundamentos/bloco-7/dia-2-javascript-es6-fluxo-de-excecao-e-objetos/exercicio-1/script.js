window.onload = () => {
  function sum(value1, value2) {
    
    if (isNaN(value1) || isNaN(value2)) {
      throw new Error('valor invalido.')
    } else {
      return value1 + value2;
    }

  }

  const valida = () => {

    try {
      const value1 = parseInt(document.getElementById('value1').value);
      const value2 = parseInt(document.getElementById('value2').value);
      document.getElementById('result').innerText = `Resultado: ${sum(value1, value2)}`;
    } catch (error) {
      document.getElementById('result').innerText = `Erro: ${error.message}`;
    } finally {
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    
  }

  const button = document.getElementById('button');
  button.addEventListener('click', valida);
}