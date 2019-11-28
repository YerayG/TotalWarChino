class Rey extends Tropa {
    constructor(x, y, animaciones) {
        super(x, y, /*imagenes.rey*/ );

        super.cadenciaAtaque = 20;
        super.tiempoAtaque = 20;
        super.rango = 20;
        super.vida = 1000;
        super.damage = 100;
        //super.coste = 1000;

        this.orientacion = orientaciones.derecha;

        this.aAtaqueAbajo = new Animacion(animaciones.animacion_rey_ataque_abajo, this.ancho, this.alto, 6, 8);
        this.aAtaqueArriba = new Animacion(animaciones.animacion_rey_ataque_arriba, this.ancho, this.alto, 6, 8);
        this.aAtaqueDerecha = new Animacion(animaciones.animacion_rey_ataque_derecha, this.ancho, this.alto, 6, 8);
        this.aAtaqueIzquierda = new Animacion(animaciones.animacion_rey_ataque_izquierda, this.ancho, this.alto, 6, 8);

        this.aMoverArriba = new Animacion(animaciones.animacion_rey_arriba, this.ancho, this.alto, 6, 8);
        this.aMoverAbajo = new Animacion(animaciones.animacion_rey_abajo, this.ancho, this.alto, 6, 8);
        this.aMoverDerecha = new Animacion(animaciones.animacion_rey_derecha, this.ancho, this.alto, 6, 8);
        this.aMoverIzquierda = new Animacion(animaciones.animacion_rey_izquierda, this.ancho, this.alto, 6, 8);

        this.animacion = this.aMoverDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        super.actualizar();
    }
}