class Catapulta extends Tropa {

    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.catapulta_aliada;
            vx = 1;
            rango = 300;
        } else {
            imagen = imagenes.catapulta_enemiga;
            vx = -1;
            rango = -300
        }

        var cadenciaAtaque = 200,
            vida = 300,
            damage = 200;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 1 : -1;
        else this.vx = 0;
    }
}