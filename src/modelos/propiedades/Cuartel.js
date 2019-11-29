class Cuartel extends Propiedad {
    constructor(x, y) {
        super(x, y, 0, 1000,/*imagenes.cuartel*/);

        this.generado = false;
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        if (!this.generado) {
            jugador.cuarteles++;
            this.generado = true;
        }
    }
}