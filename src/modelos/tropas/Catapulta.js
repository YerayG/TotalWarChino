class Catapulta extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.catapulta*/);

        super.cadenciaAtaque = 10;
        super.tiempoAtaque = 20;
        super.rango = 100;
        super.vida = 100;
        super.damage = 200;
        //super.coste = 50;
    }

    actualizar() {
        super.actualizar();
    }
}