class Espadachin extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.caballero_aliado;
            vx = 2;
            rango = 30;
        } else {
            imagen = imagenes.espadachin_enemigo;
            vx = -2;
            rango = -30;
        }

        var cadenciaAtaque = 20,
            vida = 150,
            damage = 20;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 2 : -2;
        else this.vx = 0;
    }
}