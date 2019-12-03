class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 1000, imagenes.base_aliada);
        //TODO cambiar por imagen de verdad
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.dinero += this.cantidad;
    }
}