class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 1000, /*imagenes.ayuntamiento*/);
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        jugador.dinero += super.cantidad;
    }
}