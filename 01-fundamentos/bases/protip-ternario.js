const elMayor = (a, b) => (a == b) ? 'Son iguales' : (a > b) ? {
    a
} : {
    b
}

const membresia = (miembro) => (miembro) ? '2$ USD' : '10$ USD';

let amigo = true
const amigos = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')()
]

console.log(amigos);

// console.log(elMayor(3, 4));

// console.log(`Tiene un costo de: ${membresia(true)}`)