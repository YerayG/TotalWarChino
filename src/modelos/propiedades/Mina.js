class Mina extends Propiedad {
    constructor(x, y) {
        super(x, y, 5, 1000, /*imagenes.mina*/);
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.hierro += this.cantidad;
    }
}