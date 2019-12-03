class Base extends Bloque {
    constructor(x, y, aliado) {
        var imagen;
        if (aliado) {
            imagen = imagenes.base_aliada;
        } else {
            //imagenes.baseEnemiga;
        }
        super(imagenes.base_aliada, x, y);

        this.vida = 5000;
    }
}