window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  const input = document.createElement('input');
  let clicks = 0;

  const addButton = () => {
    input.setAttribute('type', 'button');
    input.value = 'click em min';
    body.appendChild(input);
  }

  addButton();

  function creatP() {
    let counter = document.createElement('p');
    body.appendChild(counter);
  }

  creatP()

  const showCounter = (value) => {
    let p = document.getElementsByTagName('p')[0];
    p.innerText = `Você clicou ${value} vez(es)`;
  }


  const counterClick = () => {
    clicks += 1;
    showCounter(clicks);
  }

  const listenerButton = () => {
    input.addEventListener('click', counterClick)
  }

  listenerButton()

}