const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de arañas'
    },
}

export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000)
        } else {
            reject(`No existe un héroe con el id: ${id}`)
        }
    })
}

export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe) {
        return heroe
    } else {
        throw `No existe un héroe con el id: ${id}`
        // throw Error(`No existe un héroe con el id: ${id}`)
        // La palabra reservada Error nos va decir en qué línea dio el error e información adicional
    }
}



const promesaLenta = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promesa Lenta')
    }, 2000)
});

const promesaMedia = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promesa Media')
    }, 1500)
});

const promesaRapida = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promesa Rapida')
    }, 1000)
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}