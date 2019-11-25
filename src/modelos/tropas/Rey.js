class Rey extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.rey*/);

        super.cadenciaAtaque = 20;
        super.tiempoAtaque = 20;
        super.rango = 20;
        super.vida = 1000;
        super.damage = 100;
        //super.coste = 1000;
    }

    actualizar() {
        super.actualizar();
    }
}