class Singleton {

    static instancia;
    nombre = '';

    constructor({
        nombre = '',
    }) {
        if(!!Singleton.instancia){
            return Singleton.instancia
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton({
    nombre: 'David'
})
const instancia2 = new Singleton({
    nombre: 'Botero'
})
console.log(instancia2);