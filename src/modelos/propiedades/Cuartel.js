class Cuartel extends Propiedad {
    constructor(x, y) {
        super(x, y, 0, 1000, imagenes.cuartel);

        this.generado = false;
    }

    actualizar() {
        super.actualizar();
    }

    generarPara(bando) {
        if (!this.generado) {
            bando.cuarteles++;
            this.generado = true;
        }
    }
}