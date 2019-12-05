class Enemigo {

    constructor() {
        this.madera = 100;
        this.dinero = 100;
        this.hierro = 100;
        this.cuarteles = 0;

        this.recursosAutomaticosCada = 20;
        this.recursosAutomaticosContador = this.recursosAutomaticosCada;

        //0 si espadachin, 1 si arquero...
        this.siguienteCompra = 0;
        this.decidido = false;
        this.isTropaSiguiente = false;
    }

    generarRecursos(propiedades) {
        for (var i = 0; i < propiedades.length; i++) {
            propiedades[i].generarPara(this);
        }

        if (this.recursosAutomaticosContador <= 0) {
            this.dinero++;
            this.hierro++;
            this.madera++;
            this.recursosAutomaticosContador = this.recursosAutomaticosCada;
        } else {
            this.recursosAutomaticosContador--;
        }
    }

    //TODO inteligencia mas compleja?
    decidirSiguiente(tropas, propiedades) {
        if (!this.decidido) {
            //Si tiene pocas propiedades y alguna tropa genera propiedad random
            if (propiedades.length < 1 && tropas.length > 0) {
                this.isTropaSiguiente = false;
                this.siguienteCompra = parseInt(Math.random() * 5);
            } else {
                //80% de nueva tropa, 20% de nueva propiedad
                if (Math.random() > 0.3) {
                    this.isTropaSiguiente = true;
                    this.siguienteCompra = parseInt(Math.random() * (this.cuarteles + 1));
                } else {
                    this.isTropaSiguiente = false;
                    this.siguienteCompra = parseInt(Math.random() * 5);
                }
            }
            this.decidido = true;
        }
    }

    decrementarRecursos(costeDinero, costeHierro, costeMadera) {
        if (costeDinero != null) {
            this.dinero -= costeDinero;
        }
        if (costeHierro != null) {
            this.hierro -= costeHierro;
        }
        if (costeMadera != null) {
            this.madera -= costeMadera;
        }
        this.decidido = false;
    }

    comprobarRecursos(costeDinero, costeHierro, costeMadera) {
        var result = true;
        if (costeDinero != null && this.dinero < costeDinero) {
            result = false;
        }
        if (costeHierro != null && this.hierro < costeHierro) {
            result = false;
        }
        if (costeMadera != null && this.madera < costeMadera) {
            result = false;
        }

        return result;
    }
}