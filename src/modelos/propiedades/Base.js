class Base extends Propiedad {
    constructor(x, y) {
        super(x, y, 0, 3000, imagenes.base_aliada);

        this.vida = 3000;
    }

    actualizar() {
        super.actualizar();
    }
}