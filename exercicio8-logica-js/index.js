let imoveisCadastrados = [];

let opcao = "";

do{
    opcao = prompt('Imóveis cadastrados: ' + imoveisCadastrados.length +
    '\nMenu: \n' +
    '1- Salvar um imóvel\n' +
    '2- Mostrar todos os imóveis\n' +
    '3- Sair')

    switch(opcao){
        case "1":
            const imovel = {};
            imovel.nomeProprietario = prompt('Digite o nome do proprietário:');
            imovel.QtdQuartos = parseFloat(prompt('Digite a quantidade de quartos:'));
            imovel.QtdBanheiros = parseFloat(prompt('Digite a quantidade de banheiros:'));
            imovel.possuiGaragem = prompt('Responda se possui garagem? (S/N)');

            const confirma = confirm('Tem certeza que deseja cadastrar este imovel?' +
            '\nImóvel:\n' +
            'Nome do proprietário: ' + imovel.nomeProprietario + '\n' +
            'Quantidade de quartos: ' + imovel.QtdQuartos + '\n' +
            'Quantidade de banheiros: ' + imovel.QtdBanheiros + '\n' +
            'Possui Garagem: ' + imovel.possuiGaragem)

            if(confirma){
                imoveisCadastrados.push(imovel)
                alert('imovel salvo com sucesso!')
            } else {
                alert('voltando ao menu')
            }
        break;

        case "2":
            for(let i = 0; i < imoveisCadastrados.length; i++) {
                alert('Imóvel ' + (i+1) + ':' +

                '\nNome do proprietário: ' + imoveisCadastrados[i].nomeProprietario + 
                '\nQuantidade de quartos: '+imoveisCadastrados[i].QtdQuartos +
                '\nQuantidade de banheiros: ' + imoveisCadastrados[i].QtdBanheiros +
                '\nPossui Garagem: ' + imoveisCadastrados[i].possuiGaragem
                )
            }
        break;
        case "3":
            alert('Saindo...')
        break;
        default:
            alert('Escolha uma das opções acima!')
        break;
    }

} while(opcao !== "3")

/* Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos. */