let cidadesVisitadas = 0;
let cidades = '';

const nome = prompt('Digite seu nome:');

let perguntaVisitou = prompt('Você já visitou alguma cidade? (S/N)');

if(perguntaVisitou == 'N' || perguntaVisitou == 'n'){

    alert('Nome do turista: ' + nome + '\nCidades Visitadas: ' + cidadesVisitadas + '\nCidades: Nenhuma');

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

            alert('Nome do turista: ' + nome + '\nCidades Visitadas: ' + cidadesVisitadas + '\nCidades: ' + cidades);

        }

    }

}