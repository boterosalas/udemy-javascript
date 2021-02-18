import { buscarHeroeAsync, buscarHeroe } from './promesas'

const heroesId = ['capi', 'iron', 'spider']
const heroesPromesas = heroesId.map(buscarHeroe)

const obtenerHeroesArr = async () => {
    // const heroesArr = [];

    // for (const id of heroesId) {
    //     heroesArr.push( buscarHeroe( id ) )
    // }

    // return await Promise.all(heroesArr);


    return await Promise.all(heroesId.map(buscarHeroe))
}

const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.warn('CATCH!!!'); 
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}

const heroesCiclos = async ()=>{
    console.time('HeroesCiclos')

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => {
    //     console.log(heroe);
    // })

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclos')
}

const heroeIfAway = async ( id )=>{
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('Nah!');
    }
}

export {
    obtenerHeroesArr,
    obtenerHeroeAwait,
    heroesCiclos,
    heroeIfAway
}