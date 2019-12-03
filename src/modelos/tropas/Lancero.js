class Lancero extends Tropa {

    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;
        if (aliado) {
            imagen = imagenes.lancero_aliado;
            vx = 2;
            rango = 40;
        } else {
            imagen = imagenes.lancero_enemigo;
            vx = -2;
            rango = -40;
        }

        var cadenciaAtaque = 20,
            vida = 300,
            damage = 70;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
    }

    actualizar() {
        super.actualizar();
    }
}