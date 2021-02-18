class Persona {
    static porObjeto({
        nombre,
        apellido,
        pais
    }) {
        return new Persona({nombre, apellido, pais});
    }
    
    constructor({
        nombre,
        apellido,
        pais
    }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}
const nombre1 = 'Karen',
    apelido1 = 'Ochoa',
    pais1 = 'Colombia'

const persona1 = new Persona({
    nombre: nombre1,
    apellido: apelido1,
    pais: pais1
})
const david = {
    nombre: 'David',
    apellido: 'Botero',
    pais: 'Locombia'
}

const persona2 = Persona.porObjeto(david)

// persona1.getInfo()
persona2.getInfo()