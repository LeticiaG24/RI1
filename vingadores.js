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
    new Heroi('Thor', 'Deus do trovão', 'Mjolnir', '', 95, 100, 100),
    new Heroi('Bruce Banner', 'Hulk', 'Força', '', 70, 100, 100),
    new Heroi('Natasha Romanoff', 'Viúva Negra', 'Pistolas', 'Bastões de choque', 80, 55, 70),
    new Heroi('Clint Barton', 'Gavião Arqueiro', 'Arco e flechas', '', 75, 60, 65)
]

