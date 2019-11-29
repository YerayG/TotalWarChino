class Arquero extends Tropa {
    constructor(x, y, aliado) {
        var imagen, vx, rango;
        if(aliado) {
            //imagen = imagenes.arquero;
            vx = 3;
            rango = 300;
        } else {
            //imagen = imagenes.arqueroEnemigo;
            vx = -3;
            rango = -300
        }

        var cadenciaAtaque = 15, vida = 150, damage = 40;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}