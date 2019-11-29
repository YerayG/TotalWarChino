class Serreria extends Propiedad {
    constructor(x, y) {
        super(x, y, 5, 1000, /*imagenes.serreria*/);
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        jugador.madera += super.cantidad;
    }
}