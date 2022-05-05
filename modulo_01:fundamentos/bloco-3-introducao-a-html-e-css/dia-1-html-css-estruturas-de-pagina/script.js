function calcular(){
    let num = document.getElementById('num')
    let resp = document.getElementById('res')

    let soma = num.value * 2
    resp.innerHTML = 'aqui vai o resultado,'
    resp.innerHTML += soma
}