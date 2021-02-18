function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido) => ({
    nombre,
    apellido
})

// function imprimirArgumentos(){
//     console.log(arguments)
// }

const imprimirArgumentos = (...arguments)=>{
    console.log(arguments)
}

imprimirArgumentos(1,'david','botero',false,['muestra','hola'])

const persona = crearPersona2('David', 'Botero')
console.log(persona);