const valor = parseFloat(prompt('Digite um valor em metros: '))

const opcao = parseFloat(prompt('Digite uma das opções para converter ' 
+ valor + ' em metros para: \n' + '1-(mm)\n2-(cm)\n3-(dm)\n4-(dam)\n5-(hm)\n6-(km)'))

switch (opcao) {
    case 1:
        alert(resultado = valor * 1000);
        break;
    case 2:
        alert(resultado = valor * 100);
        break;
    case 3:
        alert(resultado = valor * 10);
        break;
    case 4:
        alert(resultado = valor / 10);
        break;
    case 5:
        alert(resultado = valor / 100);
        break;
    case 6:
        alert(resultado = valor / 1000);
        break;
    default:
        alert('Opção inválida!');
        break;
}