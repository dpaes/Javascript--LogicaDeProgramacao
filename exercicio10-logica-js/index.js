let vagas = []

function executar() {
    let opcao = '';

    do {

        opcao = menu()
    
        switch (opcao) {
            case '1':
                listarVagas()
            break;
            case '2':
                criarVaga()
            break;
            case '3':
                visualizarVaga()
            break;
            case '4':
                inscreverCandidato()
            break;
            case '5':
                excluirVaga()
            break;
            case '6':
                alert('Saindo...')
            break;
            default:
            alert('Selecione uma das opções apresentadas!')
            break;
        }
    
    } while (opcao != '6');
}

function menu() {
    const opcao = prompt(' - Bem Vindo ao Vagas de Emprego - \n' + 
    'Menu:\n' + 
    '1- Listar Vagas Disponíveis\n' +
    '2- Criar Nova Vaga\n' +
    '3- Visualizar uma Vaga\n' +
    '4- Inscrever Candidato a uma Vaga\n' +
    '5- Excluir uma Vaga\n' +
    '6- Sair')

    return opcao
}

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + '. '
        textoFinal += vaga.nomeVaga
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFinal
    }, '')

    alert(vagasEmTexto)
}

function criarVaga() {

    nomeVaga = prompt('Digite o nome da vaga:')
    descricaoVaga = prompt('Digite uma descrição para a vaga:')
    dataLimiteVaga = prompt('Digite a data limite para a vaga:')

    const confirmacao = confirm('Tem certeza de que deseja criar esta vaga?' +
    '\nNome da vaga: ' + nomeVaga +
    '\nDescrição: ' + descricaoVaga +
    '\nData limite: ' + dataLimiteVaga)

    if(confirmacao){
        const vaga = { nomeVaga, descricaoVaga, dataLimiteVaga, candidatos: [] }
        vagas.push(vaga)
        alert('Vaga incluida com sucesso!')
    } else {
        alert('Voltando ao menu...')
    }
}

function visualizarVaga() {
    const indice = prompt('Digite qual o indice da vaga:')
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal,candidato) => {
        return textoFinal + '\n - ' + candidato
    }, '');

    alert('Vaga Nº ' + indice +
    '\nNome: ' + vaga.nomeVaga + 
    '\nDescrição: ' + vaga.descricaoVaga +
    '\nData Limite: ' + vaga.dataLimiteVaga +
    '\nQuantidade Candidatos: ' + vaga.candidatos.length +
    '\nCandidatos Inscritos: ' + candidatosEmTexto)
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do Candidato:')
    const indice = prompt('Informe o indice da vaga em que o mesm deseja se inscrever:')
    const vaga = vagas[indice]

    const confirmacao = confirm('Deseja inscrever o candidato ' + candidato + ' na vaga ' + indice + '?\n' +
    'Nome: ' + vaga.nomeVaga + '\nDescrição: ' + vaga.descricaoVaga + '\nData Limite: ' + vaga.dataLimiteVaga)

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert('Inscrição concluida com sucesso!')
    } else {
        alert('Voltando ao menu...')
    }
}

function excluirVaga() {
    const indice = prompt('Informe o indice da vaga que deseja excluir:')
    const vaga = vagas[indice]

    const confirmacao = confirm('Tem certeza que deseja excluir a vaga ' + indice + '?\n' +
    'Nome: ' + vaga.nomeVaga + '\nDescrição: ' + vaga.descricaoVaga + '\nData Limite: ' + vaga.dataLimiteVaga)

    if(confirmacao){
        vagas.splice(indice, 1)
        alert('Vaga excluida com sucesso!')
    }
}

executar()

/* Escreva um programa em javascript que simule um sistema de vagas de emprego, 
onde é possível gerenciar as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:

    - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair

    - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

    - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, 
    e também deve pedir que o usuário confirme as informações antes de salvá-las.

    - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela:
    índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

    - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e
    então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

    - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário
    confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível,
como os objetos, arrays e funções. */