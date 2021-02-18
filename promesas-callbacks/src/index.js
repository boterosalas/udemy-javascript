import './styles.css';

// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas.js'

//  promesaLenta.then(console.log)
//  promesaMedia.then(console.log)
//  promesaRapida.then(console.log)

// Promise.race(([promesaLenta, promesaMedia, promesaRapida]))
//     .then(console.log)

// -----------------------------------------------------------------------------------------

// import { buscarHeroe, buscarHeroeAsync } from './js/promesas.js'

// buscarHeroe('capi').then(console.log)
// buscarHeroeAsync('iron2').then(console.log)
//     .catch(console.warn)

// -----------------------------------------------------------------------------------------

// import { obtenerHeroesArr } from './js/await'

// console.time('await')
// obtenerHeroesArr().then(heroes=>{
//     console.table(heroes)
//     console.timeEnd('await')
// })

// console.log('Fin del programa');

// -----------------------------------------------------------------------------------------

// import { obtenerHeroeAwait } from './js/await'

// console.time('await')
// obtenerHeroeAwait('capi2')
//     .then(heroe => {
//         console.log(heroe);
//         console.timeEnd('await')
//     }).catch(err=>{
//        console.warn; 
//     })

// -----------------------------------------------------------------------------------------

// import { heroesCiclos } from './js/await.js'

// heroesCiclos()

// -----------------------------------------------------------------------------------------

import { heroeIfAway } from './js/await'

heroeIfAway('iron')