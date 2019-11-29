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
        //Ya esta hecho

        //Animaciones
    }

    actualizar() {
        //Animaciones

        //en GameLayer tiempoAtaque-- y si <= 0 y hay enemigos en rango y misma calle ataca

        if(tiempoAtaque > 0) {
            tiempoAtaque--;
        }
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

    atacar(unidad) {
        if(tiempoAtaque <= 0) {
            unidad.vida -= this.damage;
            this.tiempoAtaque = this.cadenciaAtaque;
            //controlar animaciones y vx según las animaciones
        }
    }

    checkVida() {
        if(this.vida <= 0) {
            this.estado = estados.muerto;
            //primero a estados muriendo y luego pasarle el callback a la animacion para pasar a estados.muerto
            //TODO cuando tengamos las animaciones
        }
    }
}
