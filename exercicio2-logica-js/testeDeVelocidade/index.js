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