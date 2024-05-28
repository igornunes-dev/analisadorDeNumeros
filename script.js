const num = document.querySelector('input#fnum')
const lista = document.querySelector('select#flista')
const resultado = document.querySelector('div#resultado')
const buttonAdicionar = document.querySelector('input#adicionar')
const buttonFinalizar = document.querySelector('input#finalizar')
const erro = document.querySelector('p#erro')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} Adicionado`
    lista.appendChild(item)
    resultado.innerHTML = ''
    erro.innerHTML = ''
  } else {
    erro.innerHTML = 'Por favor Digite um valor valido ou que não esteja na lista'
  }
  
  num.value = ''
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar')
  } else {
    let totalValores = valores.length
    let maiorNumero = valores[0]
    let menorNumero = valores[0]
    let soma = 0
    let media = 0
    for(let posicao in valores) {
      soma += valores[posicao]
      if(valores[posicao] >= maiorNumero){
        maiorNumero = valores[posicao]
      }
      if(valores[posicao] <= menorNumero) {
        menorNumero = valores[posicao]
      }
    }
    media = (soma / totalValores).toFixed(2)
    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Ao todo temos ${totalValores} número(s) cadastradado.</p>`
    resultado.innerHTML += `<p>O maior número informado foi ${maiorNumero}.</p>`
    resultado.innerHTML += `<p>O menor número informado foi ${menorNumero}.</p>`
    resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
  }
}


buttonFinalizar.addEventListener('click', finalizar)
buttonAdicionar.addEventListener('click', adicionar)