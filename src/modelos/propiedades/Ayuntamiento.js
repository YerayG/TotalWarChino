class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 1000, imagenes.bloque_metal);
        //TODO cambiar por imagen de verdad
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.dinero += this.cantidad;
    }
}