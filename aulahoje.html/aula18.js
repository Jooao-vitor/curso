// exercicio 1:
// solicitar um valor de quilometros para o usuário
let quilometros = Number(prompt("digite um valor em quilometros"))
// converter valor para milhas 
// 10 km = 10 * 0.621371 milhas
// 50 km = 50 * 0.621371 milhas
let milhas = quilometros * 0.621371
// exibir o resultado
alert("o valor em milhas é" + milhas)
alert(`o valor em milhas é ${milhas}`)
// exercicio 2:
let peso = Number(prompt("digite seu peso em kg")).replaceAll(',',".")
let altura = Number(prompt("digite sua altura em cm"))
let imc = peso / (altura * altura)
imc = peso / (altura ** 2)
// exibir o resultado 
alert(`o seu imc é ${imc.toFixed(2)}`)
// exibir que o imc está estável se for menor ou igual a 30
if(imc <= 30){
    alert(`seu imc está estável é ${imc}`)
} else { // else = senao
    alert(`seu imc está estável é ${imc}`)
}

