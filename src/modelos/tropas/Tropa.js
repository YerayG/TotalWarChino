class Tropa extends Modelo {
    constructor(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen) {
        super(imagen, x, y);

        this.estado = estados.moviendo;
        this.vx = vx;

        this.rango = rango;
        this.cadenciaAtaque = cadenciaAtaque;
        this.tiempoAtaque = cadenciaAtaque;
        this.vida = vida;
        this.damage = damage;

        //this.coste = 0;
        //Ver constructor de Propiedad
        //Además pueden ser tropas aliadas o enemigas

        //Los enemigos serán las mismas clases que las tropas probably
        //Y pasaremos un parametro aliado boolean a los constructores y en funcion de eso cambia vx y la imagen?

        //Animaciones
    }

    actualizar() {
        //Animaciones

        //en GameLayer tiempoAtaque-- y si <= 0 y hay enemigos en rango y misma calle ataca
    }

    dibujar (){
        //Scroll y animaciones
    }

    enRango(unidad) {
        return this.x + this.rango >= unidad.x;
    }

    mismaCalle(unidad) {
        return Math.abs(this.y - unidad.y) <= 10;
    }
}
