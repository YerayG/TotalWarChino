class Tropa extends Modelo {
    constructor(x, y, imagen, animaciones) {
        super(imagen, x, y);

        this.estado = estados.moviendo;
        this.vx = 1;

        this.rango = 0;
        this.cadenciaAtaque = 0;
        this.tiempoAtaque = 0;
        this.vida = 0;
        this.damage = 0;

        //this.coste = 0;
        //Ver constructor de Propiedad
        //Además pueden ser tropas aliadas o enemigas

        //Los enemigos serán las mismas clases que las tropas probably
        //Y pasaremos un parametro aliado boolean a los constructores y en funcion de eso cambia vx y la imagen?

        //Animaciones
        this.orientacion = orientaciones.derecha;

        this.aAtaqueAbajo = new Animacion(animaciones.animacion_ataque_abajo, this.ancho, this.alto, 6, 8);
        this.aAtaqueArriba = new Animacion(animaciones.animacion_ataque_arriba, this.ancho, this.alto, 6, 8);
        this.aAtaqueDerecha = new Animacion(animaciones.animacion_ataque_derecha, this.ancho, this.alto, 6, 8);
        this.aAtaqueIzquierda = new Animacion(animaciones.animacion_ataque_izquierda, this.ancho, this.alto, 6, 8);

        this.aMoverArriba = new Animacion(animaciones.animacion_arriba, this.ancho, this.alto, 6, 8);
        this.aMoverAbajo = new Animacion(animaciones.animacion_abajo, this.ancho, this.alto, 6, 8);
        this.aMoverDerecha = new Animacion(animaciones.animacion_derecha, this.ancho, this.alto, 6, 8);
        this.aMoverIzquierda = new Animacion(animaciones.animacion_izquierda, this.ancho, this.alto, 6, 8);

        this.animacion = this.aMoverDerecha;
    }

    actualizar() {
        //Animaciones

        //en GameLayer tiempoAtaque-- y si <= 0 y hay enemigos en rango y misma calle ataca
    }

    dibujar() {
        //Scroll y animaciones
    }

    enRango(enemigo) {
        return this.x + this.rango >= enemigo.x && this.aliado;
    }

    mismaCalle(enemigo) {
        return Math.abs(this.y - enemigo.y) <= 10;
    }
}