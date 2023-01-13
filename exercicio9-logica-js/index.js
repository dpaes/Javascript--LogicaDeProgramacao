    let opcao = 0;
    
    do {

        menu()

        switch (opcao) {
            case 1:
                areaTriangulo()
            break;
            case 2:
                areaRetangulo()
            break;
            case 3:
                areaQuadrado()
            break;
            case 4:
                areaTrapezio()
            break;
            case 5:
                areaCirculo()
            break;
            case 6:
                alert('Saindo...')
            break;
            default:
                alert('Selecione uma das opções apresentadas!')
            break;
        }

    } while (opcao != 6);
    
    function areaTriangulo() {
        const base = parseFloat(prompt('Digite o valor da base:'))
        const altura = parseFloat(prompt('Digite o valor da altura:'))
        const resultado = (base * altura) / 2
        alert('Resultado da area do Triangulo: ' + resultado)
    }

    function areaRetangulo() {
        const base = parseFloat(prompt('Digite o valor da base:'))
        const altura = parseFloat(prompt('Digite o valor da altura:'))
        const resultado = base * altura
        alert('Resultado da area do Retangulo: ' + resultado)
    }

    function areaQuadrado() {
        const lado = parseFloat(prompt('Digite o valor do lado:'))
        const resultado = lado*lado
        alert('Resultado da area do quadrado: ' + resultado)
    }

    function areaTrapezio() {
        const baseMaior = parseFloat(prompt('Digite o valor da base maior:'))
        const baseMenor = parseFloat(prompt('Digite o valor da base menor:'))
        const altura = parseFloat(prompt('Digite o valor da altura:'))
        const resultado = ((baseMaior + baseMenor) * altura)/2
        alert('Resultado da area do trapezio: ' + resultado)
    }

    function areaCirculo() {
        const pi = 3.14;
        const raio = parseFloat(prompt('Digite o valor do raio:'))
        const resultado = pi * (raio * raio)
        alert('Resultado da area do Circulo: ' + resultado)
    }

    function menu() {
        opcao = parseFloat(prompt(
            ' - Bem vindo a Calculadora Geométrica - \n' + 
            'Menu: \n' +
            '1- Area do Triangulo\n' +
            '2- Area do Retangulo\n' +
            '3- Area do Quadrado\n' +
            '4- Area do Trapezio\n' +
            '5- Area do Circulo\n' +
            '6- Sair'
            ));
    }
/* Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */