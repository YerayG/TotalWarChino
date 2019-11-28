class Lancero extends Tropa {
    constructor(x, y) {
        var imagen, vx;
        if(aliado) {
            //imagen = imagenes.lancero;
            vx = 2;
        } else {
            //imagen = imagenes.lanceroEnemigo;
            vx = -2;
        }

        var cadenciaAtaque = 20, rango = 40, vida = 300, damage = 70;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}