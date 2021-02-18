/*
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0; //0: domingo... 1: lunes
const horaActual = 9;

const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const apertura = [9, 11, 11, 11, 11, 11, 9]

let horaApertura,
    mensaje //Está abierto, si está abierto/está cerrado, hoy abrimos a las XX

// const disponible = (dia, horaActual) => {
//     if ((dia == 0 || dia == 6) && (horaActual>=apertura[dia])){
//         return 'Está abierto'
//     }else{
//         return `Está cerrado, hoy abrimos a las ${apertura[dia]}`
//     }
// }
// console.log(disponible(dia, horaActual));

horaApertura = [0, 6].includes(dia) ? 9 : 11
mensaje = horaActual >= horaApertura ? 'Está abierto' : `Está Cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});

