class Rey extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;
        if (aliado) {
            //imagen = imagenes.rey;
            vx = 3;
            rango = 20;
        } else {
            //imagen = imagenes.reyEnemigo;
            vx = -3;
            rango = -20;
        }

        var cadenciaAtaque = 20,
            vida = 1000,
            damage = 100;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
    }

    actualizar() {
        super.actualizar();
    }
}