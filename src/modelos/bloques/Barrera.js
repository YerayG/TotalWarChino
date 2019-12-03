class Barrera extends Bloque {
    constructor(x, y) {
        super(x, y, /*imagenes.barrera*/);
        this.vida = 500;
    }

    isDestruido() {
        return this.vida <= 0;
    }
}