class Persona {

    static _conteo = 0;
    static get getConteo() {
        return `${Persona._conteo} instancias`
    }

    static nombre = 'David'
    static mensaje() {
        console.log(`${this.nombre}`);
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(
        nombre = 'Sin nombre',
        codigo = 'Sin código',
        frase = 'Sin frase'
    ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy()
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

}

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Vengadores'
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} - ${this.clan}`);
        super.quienSoy()
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');

console.log(spiderman);
spiderman.quienSoy()