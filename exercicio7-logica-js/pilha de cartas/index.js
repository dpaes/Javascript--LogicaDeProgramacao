let opcao = 0;

let cartas = [];

let cartasNumero = 0;

do{
    opcao = parseFloat(prompt(` - BEM VINDO -

    Cartas: ${cartasNumero}

    Menu: 
    1- Adicionar uma carta
    2- Puxar uma carta
    3- Sair`))

    switch(opcao){
        case 1:
            cartasNumero++
            let carta = prompt('Qual o nome da carta?')
            cartas.push(`${carta}`);
        break;
        case 2:
            cartasNumero--
            let puxaCarta = cartas.pop()
            alert(`Carta: ${puxaCarta}.`)
        break;
        case 3:
            alert('Saindo...')
        break;
        default:
            alert('Selecione uma das opções apresentadas!')
        break;
    }

} while(opcao != 3)

/* Escreva um programa em javascript para simular um baralho de cartas.

O programa deve iniciar mostrando na tela um menu interativo contendo
a quantidade de cartas que estão atualmente no baralho e as opções de
“Adicionar uma carta”, “Puxar uma carta” e “Sair”. 
Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho.

Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.

O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */