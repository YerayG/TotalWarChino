class Rey extends Tropa {

    constructor(x, y, aliado, animaciones) {

        var imagen, vx, rango;
        if (aliado) {
            imagen = imagenes.rey_aliado;
            vx = 3;
            rango = 20;
        } else {
            imagen = imagenes.rey_enemigo;
            vx = -3;
            rango = -20;
        }

        var cadenciaAtaque = 20,
            vida = 1000,
            damage = 100;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 3 : -3;
        else this.vx = 0;
    }
}