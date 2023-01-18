let num = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))

let opcao = parseFloat(prompt(
'Digite qual operação deseja fazer, sendo: \n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão'
))

switch (opcao) {
    case 1:
        somar();
        break;
    case 2:
        subtrair();
        break;
    case 3:
        multiplicar();
        break;
    case 4:
        dividir();
        break;
    default:
        alert('Digite um dos valores solicitados!')
        break;
}

function somar(){
    alert(num + num2)
}

function subtrair(){
    alert(num - num2)
}

function multiplicar(){
    alert(num * num2)
}

function dividir(){
    alert(num / num2)
}

/* Escreve um programa em javascript que permita inserir dois valores numéricos 
e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela. */