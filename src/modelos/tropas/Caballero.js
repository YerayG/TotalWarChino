class Caballero extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.caballero*/);

        super.cadenciaAtaque = 30;
        super.tiempoAtaque = 30;
        super.rango = 30;
        super.vida = 600;
        super.damage = 50;
        //super.coste = 200;
    }

    actualizar() {
        super.actualizar();
    }
}