let pacientes = [];

let indice = 0;

let opcao = 0;

do{
    let paciente = ''

    opcao = parseFloat(prompt(`
    - Bem vindo ao consultorio medico ficticio -

    Pacientes: ${pacientes}

    Menu: 
    1- Novo Paciente
    2- Consultar Paciente
    3- Sair
`))

    switch(opcao){
        case 1:
            indice++
            paciente = prompt('Digite o nome do Paciente:');
            pacientes.push(` ${indice}º ${paciente}`);
        break;
        case 2:
            let consultaPaciente = pacientes.shift();
            alert(`Paciente a ser consultado: ${consultaPaciente}`)
        break;
        case 3:
            alert('Saindo...')
        break;
        default:
            alert('Escolha uma das opções apresentadas!')
        break;
    }
} while(opcao != '3')

/* Escreva um programa em javascript para simular uma fila de espera
em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo
a lista de todos os pacientes esperando em ordem mostrando sua posição
ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 

O menu também deve permitir escolher entre as opções de “Novo paciente”,
para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente),
“Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela
o nome do paciente consultado, e “Sair”. 

O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */