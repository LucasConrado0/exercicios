chefe()

function chefe(){
    exe7()

}

function exe7(){

    var soma = 0
    var conta = 0
    var numero = number(prompt("Informe um numero"))
    do {
        conta++
        soma = soma + numero
        numero = number(prompt("Informe outro numero. Digite número negativo para encerrar"))

    }
    while(numero >- 0)

    console.log(' A média dos números informados é ${soma/conta}')




}