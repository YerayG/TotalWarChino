class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 1000, /*imagenes.ayuntamiento*/);
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        bando.dinero += this.cantidad;
    }
}