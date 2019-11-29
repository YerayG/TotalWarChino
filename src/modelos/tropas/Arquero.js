class Arquero extends Tropa {
    constructor(x, y, animaciones) {
        super(x, y, imagenes.arquero_aliado, animaciones);

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