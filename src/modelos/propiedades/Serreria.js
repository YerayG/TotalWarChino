class Serreria extends Propiedad {
    constructor(x, y) {
        super(x, y, /*imagenes.serreria*/);

        this.cantidad = 5;
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        jugador.madera += cantidad;
    }
}