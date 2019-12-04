class Base extends Propiedad {
    constructor(x, y) {
        super(x, y, 0, 1000, imagenes.base_aliada);

        this.vida = 1000;
    }

    actualizar() {
        super.actualizar();
    }
}