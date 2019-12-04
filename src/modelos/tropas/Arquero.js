class Arquero extends Tropa {
    constructor(x, y, aliado, animaciones) {
        var imagen, vx, rango;

        if (aliado) {
            imagen = imagenes.arquero_aliado;
            vx = 3;
            rango = 300;
        } else {
            imagen = imagenes.arquero_enemigo;
            vx = -3;
            rango = -300
        }

        var cadenciaAtaque = 15,
            vida = 150,
            damage = 40;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen, animaciones);
        this.aliado = aliado;
    }

    actualizar() {
        super.actualizar();
        if (this.estado == estados.moviendo) this.vx = this.aliado ? 3 : -3;
        else this.vx = 0;
    }
}