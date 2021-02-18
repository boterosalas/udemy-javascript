// let a = 10,
//     b = a;

//     a=30;
// console.log({a,b});

// let juan = {nombre: 'Juan'};
// let ana = {...juan};

// console.log({juan,ana});

// ana.nombre = 'Ana'
// console.log({juan,ana});

// const cambiarNombre = ({...persona})=>{
//     persona.nombre = 'Tony'
//     return persona
// }

// let peter = {nombre: 'Peter'}
// let tony = cambiarNombre(peter)

// console.log({peter,tony});

const frutas = ['Manzana','Pera','Piña']



console.time('slice')
const otrasFrutas = frutas.slice();
otrasFrutas.push('Mango')
console.timeEnd('slice')

console.time('spread')
const otrasFrutas2 = [...frutas];
otrasFrutas2.push('Uva')
otrasFrutas2.unshift('Cereza')
console.timeEnd('spread')

console.log({frutas,otrasFrutas,otrasFrutas2});