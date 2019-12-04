class Barrera extends Bloque {
    constructor(x, y) {
        super(imagenes.barrera, x, y);
        this.vida = 500;
    }

    isDestruido() {
        return this.vida <= 0;
    }
}