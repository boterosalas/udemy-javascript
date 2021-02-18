/*
 * 2C = Two Clubs (Tréboles)
 * 2D = Two Diamonds (Diamantess)
 * 2H = Two Hearts (Corazones)
 * 2S = Two Spades (Espadas)
 */

 

const miModulo = (() => {
    "use strict";

    let deck = [];
    const pintas = ['C', 'D', 'H', 'S'],
        numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'];


    let puntosJugadores = []

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        smallPuntos = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas')


    // Esta función crea una baraja

    //Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)
        }
        smallPuntos.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerHTML = '')
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta función crea un deck nuevo
    const crearDeck = () => {
        deck = []
        for (let numero of numeros) {
            for (let pinta of pintas) {
                deck.push(`${numero}${pinta}`)
            }
        }
        return _.shuffle(deck);
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => deck.pop() || 'No hay más cartas en el deck'

    // Esta función devuelve el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1)
        return (isNaN(valor)) ?
            (valor == 'A') ? 11 : 10 :
            parseInt(valor);
    }

    // Turno: 0 = primer jugador y el útimo será la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        smallPuntos[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]

    }

    // Esta función crea una nueva imagen de la carta
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta)
    }

    // Esta función determina el ganador
    const determinarGanador = () => {

        const [puntosJugador, puntosComputadora] = puntosJugadores

        setTimeout(() => {

            let mayor = 0,
                indice;
            for (let i = 0; i < puntosJugadores.length - 1; i++) {
                if ((puntosJugadores[i] > mayor) && (puntosJugadores[i] <= 21)) {
                    mayor = puntosJugadores[i];
                    indice = i;
                }
            }
            console.log({
                mayor,
                indice
            });
            if (mayor === puntosJugadores[puntosJugadores.length - 1]) {
                alert('Empate')
            } else if ((puntosJugadores[puntosJugadores.length - 1] > 21) || (mayor > puntosJugadores[puntosJugadores.length - 1])) {
                alert(`Ha ganado el Jugador ${indice+1}`)
            } else {
                alert('Ha ganado la computadora')
            }


        }, 1000)
    }

    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)
            crearCarta(carta, puntosJugadores.length - 1)
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
        determinarGanador();
    }

    // Obtener puntaje más cercano a 21
    const puntajeMinimo = () => {
        let mayor = 0;
        for (const puntaje of puntosJugadores) {
            mayor = (puntaje > mayor) && (puntaje <= 21) ? puntaje : mayor
        }
        return mayor;
    }


    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0)

        crearCarta(carta, 0)

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        let puntosMinimos = puntajeMinimo()
        turnoComputadora(puntosMinimos);
    })


    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    })

    return {
        inicializarJuego: inicializarJuego
    };

})();