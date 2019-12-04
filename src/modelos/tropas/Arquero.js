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
            rango = -100;
        }

        var cadenciaAtaque = 20,
            vida = 1000,
            damage = 10;

        super(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 1 : -1;
        else this.vx = 0;
    }
}