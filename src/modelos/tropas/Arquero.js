class Arquero extends Tropa {
    constructor(x, y, aliado) {
        var imagen, vx;
        if(aliado) {
            //imagen = imagenes.arquero;
            vx = 3;
        } else {
            //imagen = imagenes.arqueroEnemigo;
            vx = -3;
        }

        var cadenciaAtaque = 15, rango = 300, vida = 150, damage = 40;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}