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

        var cadenciaAtaque = 40,
            vida = 1000,
            damage = 50;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 2 : -2;
        else this.vx = 0;
    }
}