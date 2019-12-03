class Caballero extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;
        if (aliado) {
            //imagen = imagenes.caballero;
            vx = 3;
            rango = 30;
        } else {
            //imagen = imagenes.caballeroEnemigo;
            vx = -3;
            rango = -30
        }

        var cadenciaAtaque = 30,
            vida = 600,
            damage = 50;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
    }

    actualizar() {
        super.actualizar();
    }
}