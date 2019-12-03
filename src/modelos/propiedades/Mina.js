class Mina extends Propiedad {
    constructor(x, y) {
        super(x, y, 5, 1000, imagenes.bloque_tierra);
        //TODO cambiar por imagen de verdad
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.hierro += this.cantidad;
    }
}