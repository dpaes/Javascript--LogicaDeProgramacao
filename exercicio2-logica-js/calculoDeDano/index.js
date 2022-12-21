let nomeAvatarAtk = prompt('Digite o nome do Personagem de Atk: ')

let atk = parseFloat(prompt('Digite quantos pontos de atk possui o ' + nomeAvatarAtk))

let nomeAvatarDef = prompt('Digite o nome do Personagem de Defesa: ')

let ptsVida = parseFloat(prompt('Digite quantos pontos de vida possui o ' + nomeAvatarDef))

let def = parseFloat(prompt('Digite quantos pontos de defesa possui ' + nomeAvatarDef))

let escudo = parseFloat(prompt('Digite 0 se ' + nomeAvatarDef + ' não possui escudo e 1 se possui: '))

while(ptsVida > 0){

    if(escudo != 0 && escudo != 1){

        escudo = parseFloat(prompt('Digite 0 ou 1, sendo 0 para não ter escudo e 1 para ter: '))

    } else if(atk > def && escudo == 0){

        ptsVida -= (atk - def)

        alert(nomeAvatarAtk + ' Atacou ' + nomeAvatarDef)

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk + '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef + '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def + '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)

    } else if(atk > def && escudo == 1){

        ptsVida -= ((atk - def)/2)

        alert(nomeAvatarAtk + ' Atacou ' + nomeAvatarDef)

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk + '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef + '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def + '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)

    } else if(atk == def || atk <= def){

        alert('Informações:\n' + 'Nome: ' + nomeAvatarAtk + '\nPontos de Atk: ' + atk + '\nNome: ' + nomeAvatarDef + '\nPontos de Vida: ' + ptsVida + '\nPontos de Defesa: ' + def + '\nEscudo de ' + nomeAvatarDef + ': ' + escudo)
    }
}