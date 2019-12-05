class Ayuntamiento extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 1000, imagenes.base_aliada);

        this.generarCada = 10;
        this.contador = 0;
    }

    actualizar() {
        super.actualizar();
        this.contador--;
    }

    generarPara(bando) {
        if (this.contador <= 0) {
            bando.dinero += this.cantidad;
            this.contador = this.generarCada;
        }
    }
}