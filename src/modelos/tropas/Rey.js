class Rey extends Tropa {
    constructor(x, y, aliado) {
        var imagen, vx;
        if(aliado) {
            //imagen = imagenes.rey;
            vx = 3;
        } else {
            //imagen = imagenes.reyEnemigo;
            vx = -3;
        }

        var cadenciaAtaque = 20, rango = 20, vida = 1000, damage = 100;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}