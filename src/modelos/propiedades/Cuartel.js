class Cuartel extends Propiedad {
    constructor(x, y) {
        super(x, y, /*imagenes.cuartel*/);

        this.generado = false;
    }

    actualizar() {
        super.actualizar();
    }

    generarParaJugador(jugador) {
        if (!generado) {
            jugador.cuarteles++;
            generado = true;
        }
    }
}