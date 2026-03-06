const listaHerois = [
    {
        nome: 'Steve Rogers',
        codinome: 'Capitão América',
        armaPrincipal: 'Escudo americano',
        armaSecundaria: '',
        velocidade: 85,
        forca: 75,
        resistencia: 80
    },
    {
        nome: 'Tony Stark',
        codinome: 'Homem de Ferro',
        armaPrincipal: 'Armadura de ferro',
        armaSecundaria: '',
        velocidade: 90,
        forca: 70,
        resistencia: 90
    },
    {
        nome: 'Thor Odinson',
        codinome: 'Thor',
        armaPrincipal: 'Mjolnir',
        armaSecundaria: '',
        velocidade: 95,
        forca: 99,
        resistencia: 99
    },
    {
        nome: 'Bruce Banner',
        codinome: 'Hulk',
        armaPrincipal: 'Força',
        armaSecundaria: '',
        velocidade: 70,
        forca: 98,
        resistencia: 98
    },
    {
        nome: 'Natasha Romanoff',
        codinome: 'Viúva Negra',
        armaPrincipal: 'Pistolas',
        armaSecundaria: 'Bastões de choque',
        velocidade: 80,
        forca: 55,
        resistencia: 70
    },
    {
        nome: 'Clint Barton',
        codinome: 'Gavião Arqueiro',
        armaPrincipal: 'Arco e flechas',
        armaSecundaria: '',
        velocidade: 75,
        forca: 60,
        resistencia: 65
    },
    {
        nome: 'Thanos',
        codinome: 'Thanos',
        armaPrincipal: 'Manopla do infinito',
        armaSecundaria: '',
        velocidade: 100,
        forca: 100,
        resistencia: 100
    }
]

function descricao(heroi) {
    console.log(`
Nome: ${heroi.nome}
Codinome: ${heroi.codinome}
Arma principal: ${heroi.armaPrincipal}
Arma secundária: ${heroi.armaSecundaria}
Velocidade: ${heroi.velocidade}
Força: ${heroi.forca}
Resistência: ${heroi.resistencia}
`)
}

let maisForte = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisForte.forca<listaHerois[i].forca){
        console.log(`${listaHerois[i].codinome} ganha de ${maisForte.codinome} na força`)
        maisForte = listaHerois[i]
    }
    else{
        console.log(`${listaHerois[i].codinome} perde de ${maisForte.codinome} na força`)
    }
}
console.log(`O personagem mais forte é ${maisForte.codinome} com ${maisForte.forca} de força`)

let maisRapido = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisRapido.velocidade<listaHerois[i].velocidade){
        console.log(`${listaHerois[i].codinome} ganha de ${maisRapido.codinome} na velocidade`)
        maisRapido = listaHerois[i]
    }
    else{
        console.log(`${listaHerois[i].codinome} perde de ${maisRapido.codinome} na velocidade`)
    }
}
console.log(`O personagem mais rápido é ${maisRapido.codinome} com ${maisRapido.velocidade} de velocidade`)

let maisResistente = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisResistente.resistencia<listaHerois[i].resistencia){
        console.log(`${listaHerois[i].codinome} ganha de ${maisResistente.codinome} na resistência`)
        maisResistente = listaHerois[i]
    }
    else{
        console.log(`${listaHerois[i].codinome} perde de ${maisResistente.codinome} na resistência`)
    }
}
console.log(`O personagem mais resistente é ${maisResistente.codinome} com ${maisResistente.velocidade} de resistência`)

listaHerois.forEach(heroi => {
    descricao(heroi)
})