class Arquero extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.arquero_aliado;
            vx = 1;
            rango = 200;
        } else {
            imagen = imagenes.arquero_enemigo;
            vx = -1;
            rango = -200;
        }

        var cadenciaAtaque = 15,
            vida = 100,
            damage = 20;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 1 : -1;
        else this.vx = 0;
    }
}