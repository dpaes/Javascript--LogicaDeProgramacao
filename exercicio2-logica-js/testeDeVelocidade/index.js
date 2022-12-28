const nome = prompt('Digite o primeiro nome: ')
const velCarro = parseFloat(prompt('Digite a velocidade do primeiro carro: '))

const nome2 = prompt('Digite o segundo nome: ')
const velCarro2 = parseFloat(prompt('Digite a velocidade do segundo carro: '))

if(velCarro > velCarro2){
    alert('O carro ' + nome + ' está mais rápido do que ' + nome2)
} else if (velCarro2 > velCarro){
    alert('O carro ' + nome2 + ' está mais rápido do que ' + nome)
} else {
    alert('Os dois carros estão na mesma velocidade.')
}

/* Escreva um programa em javascript que permita inserir o nome e a velocidade
de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido
(ou que as velocidades são iguais se este for o caso) */