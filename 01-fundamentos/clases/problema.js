const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// fer.imprimir()

function Persona(name, age) {
    console.log('Se ejecutó esta línea');
    this.name = name;
    this.age = age;
    this.print = ()=> {
        console.log(`Nombre: ${this.name} - edad: ${this.age}`);
    }
}

const maria = new Persona('María',18)
maria.print()