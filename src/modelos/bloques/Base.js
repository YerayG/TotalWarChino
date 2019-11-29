class Base extends Bloque {
    constructor(x, y, aliado) {
        var imagen;
        if (aliado) {
            //imagenes.baseAliada;
        } else {
            //imagenes.baseEnemiga;
        }
        super(x, y, imagen);

        this.vida = 5000;
    }
}