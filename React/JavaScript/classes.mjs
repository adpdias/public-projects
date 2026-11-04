
class Animal {
    constructor(classe, especie) {
        this.classe = classe;
        this.especie = especie;
    }
    emitirSom(som) {
        return `Som emitido: ${som}`;
    }

}


class Cachorro extends Animal {
    constructor(nome, idade) {
        super('Mamífero', 'Canis lupus familiaris');
        this.nome = nome;
        this.idade = idade
    }

    latir() {
        return super.emitirSom('Au Au!');
    }
}

let rex = new Cachorro('Rex', 3);
console.log(rex);
console.log(rex.latir());

