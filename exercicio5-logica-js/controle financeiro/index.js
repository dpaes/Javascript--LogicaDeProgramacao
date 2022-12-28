let money = '';

let moneyInitial = parseInt(prompt('Qual a quantidade inicial de dinheiro disponível?'));

let opcao = '';

while(opcao != 3){

    alert('Valor em conta atual: R$' + moneyInitial)

    opcao = parseInt(prompt('Digite um numero referente a ação desejada:\n1-Adicionar dinheiro\n2-Remover dinheiro\n3-Sair'));

    switch (opcao) {
        case 1:
            money = parseInt(prompt('Qual a quantidade que será adicionada?'));
            moneyInitial += money;
            break;
        case 2:

            break;
    
        default:
            alert('Digite uma das opções acima!')
            break;
    }
}


/* Escreva um programa em javascript que comece
perguntando pela quantidade inicial de dinheiro disponível
e então mostre na tela essa quantidade juntamente com as opções
de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve perguntar
pela quantidade a ser adicionada, somar esse valor com a quantidade
inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções.
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
A opção de sair deve encerrar o programa. */