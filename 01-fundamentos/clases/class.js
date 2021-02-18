class Persona {

    static _conteo = 0;
    static get getConteo(){
        return `${Persona._conteo} instancias`
    }

    static nombre = 'David'
    static mensaje(){
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

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

spiderman.quienSoy()
spiderman.miFrase()

spiderman.setComidaFavorita = 'El pie de cereza de la tía May'
console.log(spiderman);
// console.log(spiderman.getComidaFavorita)
Persona.mensaje()