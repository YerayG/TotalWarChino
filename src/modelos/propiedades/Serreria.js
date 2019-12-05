class Serreria extends Propiedad {
    constructor(x, y) {
        super(x, y, 1, 200, imagenes.serreria);

        this.generarCada = 10;
        this.contador = 0;
    }

    actualizar() {
        super.actualizar();
        this.contador--;
    }

    generarPara(bando) {
        if(this.contador <= 0) {
            bando.madera += this.cantidad;
            this.contador = this.generarCada;
        }
    }
}