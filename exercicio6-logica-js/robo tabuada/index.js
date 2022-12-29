let num = prompt('Digite um número: ');

let resultado = '';

let resultados = [];

for (let i = 1; i <= 20; i++) {

    resultado = num * i;

    resultados[i] = resultado;
}

alert('Resultado da multiplicação de ' + num + ' entre 1 à 20:\n\n' + resultados);

/* Escreva um programa em javascript que seja capaz de calcular
a tabuada de um determinado número (de 1 a 20). O programa deve 
começar pedindo o número a ser usado nos cálculos e então salvar
todos os resultados de multiplicações de 1 a 20 usando o número 
informado dentro de uma variável do tipo string. 
Depois o programa deve exibir esses resultados e finalizar. */