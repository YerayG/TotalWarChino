class Caballero extends Tropa {
    constructor(x, y, aliado) {
        var imagen, vx;
        if(aliado) {
            //imagen = imagenes.caballero;
            vx = 3;
        } else {
            //imagen = imagenes.caballeroEnemigo;
            vx = -3;
        }

        var cadenciaAtaque = 30, rango = 30, vida = 600, damage = 50;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}