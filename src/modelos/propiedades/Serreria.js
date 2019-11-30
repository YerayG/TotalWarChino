class Serreria extends Propiedad {
    constructor(x, y) {
        super(x, y, 5, 1000, /*imagenes.serreria*/);
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.madera += this.cantidad;
    }
}