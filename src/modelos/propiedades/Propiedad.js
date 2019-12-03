class Propiedad extends Modelo {
    constructor(x, y, cantidad, vida, imagen) {
        super(imagen, x, y);

        this.cantidad = cantidad;
        this.vida = vida;
    }

    actualizar() {

    }

    generarPara(bando) {

    }

    isDestruido() {
        return this.vida <= 0;
    }
}