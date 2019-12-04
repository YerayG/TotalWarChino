class Arquero extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.arquero_aliado;
            vx = 1;
            rango = 100;
        } else {
            imagen = imagenes.arquero_enemigo;
            vx = -1;
            rango = 0;
        }

        var cadenciaAtaque = 10,
            vida = 100,
            damage = 0;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 1 : -1;
        else this.vx = 0;
    }
}