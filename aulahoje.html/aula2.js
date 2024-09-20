// let nota1 = Number(prompt)("digite a nota 1")
// let nota2 = Number(prompt)("digite a nota 2")
// let nota3 = Number(prompt)("digite a nota 3")
// let media = (nota1 + nota2 + nota3)/3
// if(media>7){
//     alert(`aprovado e a sua média é ${media.tofixed(2)}`)
// } else {
//     alert(`você foi reprovado e sua média é ${media.toFixed(2)}`)
// 

let peso = number(prompt("digite o seu peso").replaceAll(',','.'))
let altura = number(prompt("digite o seu altura").replaceAll(',','.'))
let imc = peso / (altura ** 2) 

//analise do imc
//menor que 18 significa abaixo
if(imc < 18) {
    alert(`seu imc ${imc.toFixed(2)} está numa faixa de abaixo do peso`)
} else if(imc<=30){
    alert(`seu imc ${imc.toFixed(2)} está numa faixa de peso ideal`)
} else{
    alert(`seu imc ${imc.toFixed(2)} está numa faixa de acima do peso ideal`)
}