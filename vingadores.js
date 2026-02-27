class Heroi {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia){
        this.nome=nome
        this.codinome=codinome
        this.armaPrincipal=armaPrincipal
        this.armaSecundaria=armaSecundaria
        this.velocidade=velocidade
        this.forca=forca
        this.resistencia=resistencia
    }

    descricao() {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const listaHerois = [
    new Heroi('Steve Rogers', 'Capitão América', 'Escudo americano', '', 85, 75, 80),
    new Heroi('Tony Stark', 'Homem de Ferro', 'Armadura de ferro', '', 90, 70, 90),
    new Heroi('Thor Odinson', 'Thor', 'Mjolnir', '', 95, 100, 100),
    new Heroi('Bruce Banner', 'Hulk', 'Força', '', 70, 100, 100),
    new Heroi('Natasha Romanoff', 'Viúva Negra', 'Pistolas', 'Bastões de choque', 80, 55, 70),
    new Heroi('Clint Barton', 'Gavião Arqueiro', 'Arco e flechas', '', 75, 60, 65) //vulgo michel teló
]

let maisForte = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisForte.forca<listaHerois[i].forca){
        maisForte = listaHerois[i]
    }
}
console.log(`O herói mais forte é ${maisForte.codinome} com ${maisForte.forca} de força`)

let maisRapido = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisRapido.velocidade<listaHerois[i].velocidade){
        maisRapido = listaHerois[i]
    }
}
console.log(`O herói mais rápido é ${maisForte.codinome} com ${maisForte.velocidade} de velocidade`)

let maisResistente = listaHerois[0]
for(i=1; i<listaHerois.length; i++){
    if(maisResistente.resistencia<listaHerois[i].resistencia){
        maisResistente = listaHerois[i]
    }
}
console.log(`O herói mais resistente é ${maisResistente.codinome} com ${maisResistente.velocidade} de resistência`)

listaHerois.forEach(heroi => {
    heroi.descricao()
})