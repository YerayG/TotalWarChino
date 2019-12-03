class Propiedad extends Modelo {
    constructor(x, y, cantidad, vida, imagen) {
        super(imagen, x, y);

        this.cantidad = cantidad;
        this.vida = vida;
        /*this.costeMadera = 0;
        this.costeDinero = 0;
        this.costeHierro = 0;*/
        //Esto es mejor almacenarlo en el GameLayer porque se comprueba antes de comprarlo
        // (antes de que la Propiedad esté creada)
    }

    actualizar() {

    }

    generarPara(bando) {

    }

    isDestruido() {
        return this.vida <= 0;
    }
}