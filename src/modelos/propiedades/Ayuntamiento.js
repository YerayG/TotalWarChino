class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, /*imagenes.ayuntamiento*/);

        this.cantidad = 1;
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        jugador.dinero += cantidad;
    }
}