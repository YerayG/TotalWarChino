class Propiedad extends Modelo {
    constructor(x, y, imagen) {
        super(imagen, x, y);

        this.cantidad = 0;
        /*this.costeMadera = 0;
        this.costeDinero = 0;
        this.costeHierro = 0;*/
        //Esto es mejor almacenarlo en el GameLayer porque se comprueba antes de comprarlo
        // (antes de que la Propiedad esté creada)
    }

    actualizar() {

    }

    generarParaJugador(jugador) {

    }
}