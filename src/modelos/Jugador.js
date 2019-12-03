class Jugador {

    constructor() {
        this.madera = 2000;
        this.dinero = 2000;
        this.hierro = 2000;
        this.cuarteles = 0;
        this.siguienteCompra =0;

        this.recursosAutomaticosCada = 20;
        this.recursosAutomaticosContador = this.recursosAutomaticosCada;
    }

    generarRecursos(propiedades) {
        for(var i = 0; i < propiedades.length; i++) {
            propiedades[i].generarPara(this);
        }

        if(this.recursosAutomaticosContador <= 0) {
            this.dinero++;
            this.hierro++;
            this.madera++;
            this.recursosAutomaticosContador = this.recursosAutomaticosCada;
        } else {
            this.recursosAutomaticosContador--;
        }
    }
}
