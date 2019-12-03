class Serreria extends Propiedad {
    constructor(x, y) {
        super(x, y, 5, 1000, imagenes.bloque_fondo_muro);
        //TODO cambiar por imagen de verdad
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.madera += this.cantidad;
    }
}