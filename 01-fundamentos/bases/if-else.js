// let a = 10;

// if (a > 10) { //undefined, null, asignación
//     console.log('A es mayor a 10')
// } else if (a == 10) {
//     console.log('A es igual a 10');
// } else {
//     console.log('A es menor a 10');
// }

// console.log('Fin del programa')

// const hoy = new Date();

// if(hoy.getDay()=='5'){
//     console.log(hoy.getDay()=='5');
// }else{
//     console.log(false);
// }

// console.log(hoy.getDay()===5);


// const semana = [{
//     id: 0,
//     dia: 'Domingo'
// }, {
//     id: 1,
//     dia: 'Lunes'
// }, {
//     id: 2,
//     dia: 'Martes'
// }, {
//     id: 3,
//     dia: 'Miércoles'
// }, {
//     id: 4,
//     dia: 'Jueves'
// }, {
//     id: 5,
//     dia: 'Viernes'
// }, {
//     id: 6,
//     dia: 'Sábado'
// }]

// const semana = {
//     0: 'Domingo',
//     1: 'Lunes',
//     2: 'Martes',
//     3: 'Miércoles',
//     4: 'Jueves',
//     5: 'Viernes',
//     6: 'Sábado'
// }

// const semana2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']


// console.log(semana2[0] || 'No definido');


let a = 10,
    b=10;

const sumar = (a=0, b=0) => {
    return a + b
}

console.log(sumar(a,b));