let personaje = {
    nombre: 'Tony Stark',
    CodeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.032,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
}

// delete personaje.edad

// console.log({personaje});


const entriesPares = Object.entries(personaje)
console.log(entriesPares);