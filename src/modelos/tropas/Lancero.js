class Lancero extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.lancero*/);

        super.cadenciaAtaque = 20;
        super.tiempoAtaque = 20;
        super.rango = 40;
        super.vida = 300;
        super.damage = 70;
        //super.coste = 150;
    }

    actualizar() {
        super.actualizar();
    }
}