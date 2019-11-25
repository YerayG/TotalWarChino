class Espadachin extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.espadachin*/);

        super.cadenciaAtaque = 20;
        super.tiempoAtaque = 20;
        super.rango = 20;
        super.vida = 200;
        super.damage = 50;
        //super.coste = 50;
    }

    actualizar() {
        super.actualizar();
    }
}