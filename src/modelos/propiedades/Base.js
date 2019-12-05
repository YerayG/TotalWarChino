class Base extends Propiedad {
    constructor(x, y) {
        super(x, y, 0, 2000, imagenes.base_aliada);

        this.vida = 2000;
    }

    actualizar() {
        super.actualizar();
    }
}