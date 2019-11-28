class Espadachin extends Tropa {
    constructor(x, y, aliado) {
        var imagen, vx;
        if(aliado) {
            //imagen = imagenes.espadachin;
            vx = 2;
        } else {
            //imagen = imagenes.espadachinEnemigo;
            vx = -2;
        }

        var cadenciaAtaque = 20, rango = 20, vida = 200, damage = 50;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}