let cidadesVisitadas = 0;
let cidades = '';

const nome = prompt('Digite seu nome:');

let perguntaVisitou = prompt('Você já visitou alguma cidade? (S/N)');

if(perguntaVisitou == 'N' || perguntaVisitou == 'n'){

    alert('Nome do turista: ' + nome + '\nCidades Visitadas: ' +
    cidadesVisitadas + '\nCidades: Nenhuma');

} else if( perguntaVisitou == 's' || perguntaVisitou == 'S'){

    cidades = prompt('Qual cidade seria?');

    cidadesVisitadas++

    while (perguntaVisitou == 's' || perguntaVisitou == 'S') {

        perguntaVisitou = prompt('Você já visitou alguma outra cidade? (S/N)');

        if(perguntaVisitou == 'S' || perguntaVisitou == 's'){

            cidadesVisitadas++;

            let cidade = prompt('Qual cidade seria?');

            cidades += ', ' + cidade

        } else if(perguntaVisitou == 'n' || perguntaVisitou == 'N'){

            cidades += '.';

            alert('Nome do turista: ' + nome + '\nCidades Visitadas: '
            + cidadesVisitadas + '\nCidades: ' + cidades);

        }

    }

}

/* Escreva um programa em javascript que peça o nome de um turista e 
então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim,
pergunte o nome da cidade e o armazene em uma variável, e então continue 
perguntando se o turista visitou alguma outra cidade até que a resposta seja não.
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */