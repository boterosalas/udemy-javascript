let juegos = ['Fire Emblem','Zelda', 'Mario', 'Metroid', 'Chrono','Donkey Kong']
// console.log('Largo: ', juegos.length);

// let nuevaLongitud = juegos.push('Donkey Kong')

// console.log({nuevaLongitud})

// console.log(juegos);
// juegos.forEach((elemento, id, arr) => {
//     console.log(elemento,id,arr);
// })

// let nuevaLongitud = juegos.unshift('Fire Emblem')
// console.log({nuevaLongitud});
// console.log(juegos);
// let juegoBorrado = juegos.pop()
// console.log({juegoBorrado});

let pos = 1

// console.log({'juegos borrados':juegos.splice(pos,2)})

// let arrayEspejo = juegos.slice()

let arrayEspejo = [...juegos]

arrayEspejo.forEach((element,index)=>{
    arrayEspejo[index] = element.toLowerCase()
})

// let juegoParaBorrar = prompt('Escribe cuál juego quieres borrar')

// console.log({
//     juegos
// });
// console.log({
//     arrayEspejo
// });

// console.log('Index:',juegos.indexOf('Mario'));