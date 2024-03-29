class Lancero extends Tropa {

    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.lancero_aliado;
            vx = 2;
            rango = 50;
        } else {
            imagen = imagenes.lancero_enemigo;
            vx = -2;
            rango = -50;
        }

        var cadenciaAtaque = 20,
            vida = 250,
            damage = 40;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 2 : -2;
        else this.vx = 0;
    }
}