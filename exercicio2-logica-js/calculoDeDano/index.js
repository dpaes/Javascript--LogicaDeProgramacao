let nomeAvatarAtk = prompt('Digite o nome do Personagem de Atk: ')

let atk = parseFloat(prompt('Digite quantos pontos de atk possui o '
+ nomeAvatarAtk))


let nomeAvatarDef = prompt('Digite o nome do Personagem de Defesa: ')

let ptsVida = parseFloat(prompt('Digite quantos pontos de vida possui o '
+ nomeAvatarDef))

let def = parseFloat(prompt('Digite quantos pontos de defesa possui '
+ nomeAvatarDef))

let escudo = parseFloat(prompt('Digite 0 se ' + nomeAvatarDef +
' não possui escudo e 1 se possui: '))


while(ptsVida > 0){

    if(escudo != 0 && escudo != 1){

        escudo = parseFloat(prompt(
            'Digite 0 ou 1, sendo 0 para não ter escudo e 1 para ter: '
            ))

    } else if(atk > def && escudo == 0){

        ptsVida -= (atk - def)

        alert(nomeAvatarAtk + ' Atacou ' + nomeAvatarDef)

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk +
        '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef +
        '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def +
        '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)

    } else if(atk > def && escudo == 1){

        ptsVida -= ((atk - def)/2)

        alert(nomeAvatarAtk + ' Atacou ' + nomeAvatarDef)

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk +
        '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef +
        '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def +
        '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)

    } else if(atk == def || atk <= def){

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk +
        '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef +
        '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def +
        '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)
    }
}

/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem,
depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se
ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo,
o dano causado será igual a diferença entre o ataque e a defesa.

- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano
causado será igual a metade da diferença entre o ataque e a defesa.

- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem
defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */