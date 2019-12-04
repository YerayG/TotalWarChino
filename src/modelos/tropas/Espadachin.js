class Espadachin extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;
        if (aliado) {
            imagen = imagenes.arquero_aliado;
            vx = 2;
            rango = 20;
        } else {
            imagen = imagenes.arquero_aliado;
            vx = -2;
            rango = -20;
        }

        var cadenciaAtaque = 20,
            vida = 200,
            damage = 50;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
    }

    actualizar() {
        super.actualizar();
    }
}