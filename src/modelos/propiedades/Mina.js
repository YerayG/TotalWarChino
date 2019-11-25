class Mina extends Propiedad {
    constructor(x, y) {
        super(x, y, /*imagenes.mina*/);

        this.cantidad = 5;
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        jugador.hierro += cantidad;
    }
}