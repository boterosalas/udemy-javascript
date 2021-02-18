import './styles.css';
import { buscarHeroe as buscarHeroeCallbacks } from './js/callbacks'
import { buscarHeroe } from './js/promesas'

const heroeId1 = 'capi'
const heroeId2 = 'spider1'

// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) {
//         return console.error('ERROR: ', err);
//     }
//     console.info(heroe1);
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err){
//             return console.error('ERROR: ', err);
//         }
//         console.info(heroe2);
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión.`);
//     })
// })

// buscarHeroe(heroeId1).then(heroe => {
//     console.log(`Enviando a ${heroe.nombre} a la misión`);
// })

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroeId1, heroeId2]) => {
        console.log(`Enviando a ${heroeId1.nombre} y ${heroeId2.nombre} a la misión.`);
    })
    .catch(err=>{
        alert(err)
    })
    .finally(()=>{
        //Sirve para hacer algún tipo de limpieza en las funciones, borrar arreglos, resetear valores...
        console.log('Se terminó el Promise.all');
    })

console.log('Fin del programa');