class Caballero extends Tropa {
    constructor(x, y, animaciones) {
        super(x, y, /*imagenes.caballero*/ );

        super.cadenciaAtaque = 30;
        super.tiempoAtaque = 30;
        super.rango = 30;
        super.vida = 600;
        super.damage = 50;
        //super.coste = 200;
        this.orientacion = orientaciones.derecha;

        this.aAtaqueAbajo = new Animacion(animaciones.animacion_caballero_ataque_abajo, this.ancho, this.alto, 6, 8);
        this.aAtaqueArriba = new Animacion(animaciones.animacion_caballero_ataque_arriba, this.ancho, this.alto, 6, 8);
        this.aAtaqueDerecha = new Animacion(animaciones.animacion_caballero_ataque_derecha, this.ancho, this.alto, 6, 8);
        this.aAtaqueIzquierda = new Animacion(animaciones.animacion_rey_ataque_izquierda, this.ancho, this.alto, 6, 8);

        this.aMoverArriba = new Animacion(animaciones.animacion_caballero_arriba, this.ancho, this.alto, 6, 8);
        this.aMoverAbajo = new Animacion(animaciones.animacion_caballero_abajo, this.ancho, this.alto, 6, 8);
        this.aMoverDerecha = new Animacion(animaciones.animacion_caballero_derecha, this.ancho, this.alto, 6, 8);
        this.aMoverIzquierda = new Animacion(animaciones.animacion_caballero_izquierda, this.ancho, this.alto, 6, 8);

        this.animacion = this.aMoverDerecha;
    }

    actualizar() {
        super.actualizar();
    }
}