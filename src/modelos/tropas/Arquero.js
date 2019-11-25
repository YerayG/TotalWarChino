class Arquero extends Tropa {
    constructor(x, y) {
        super(x, y, /*imagenes.arquero*/);

        super.cadenciaAtaque = 15;
        super.tiempoAtaque = 15;
        super.rango = 300;
        super.vida = 150;
        super.damage = 40;
        //super.coste = 100;
    }

    actualizar() {
        super.actualizar();
    }
}