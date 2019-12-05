class Caballero extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.caballero_enemigo;
            vx = 1;
            rango = 30;
        } else {
            imagen = imagenes.caballero_enemigo;
            vx = -1;
            rango = -30
        }

        var cadenciaAtaque = 30,
            vida = 500,
            damage = 60;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 3 : -3;
        else this.vx = 0;
    }
}