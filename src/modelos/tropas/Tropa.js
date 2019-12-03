class Tropa extends Modelo {
    constructor(x, y, vx, rango, cadenciaAtaque, vida, damage, imagen, animaciones) {
        super(imagen, x, y);

        this.estado = estados.moviendo;
        this.vx = vx;
        this.vy = 0;

        this.rango = rango;
        this.cadenciaAtaque = cadenciaAtaque;
        this.tiempoAtaque = cadenciaAtaque;
        this.vida = vida;
        this.damage = damage;

        this.esquivando = false;
        //this.coste = 0;
        //Ver constructor de Propiedad
        //Además pueden ser tropas aliadas o enemigas

        //Los tropasEnemigas serán las mismas clases que las tropas probably
        //Y pasaremos un parametro aliado boolean a los constructores y en funcion de eso cambia vx y la imagen?
        //Ya esta hecho

        //Animaciones
        this.aMover = new Animacion(animaciones.animacion_mover.imagenSrc, this.ancho, this.alto, 6, animaciones.animacion_mover.frames);
        this.aAtacar = new Animacion(animaciones.animacion_atacar.imagenSrc, this.ancho, this.alto, 6, animaciones.animacion_atacar.frames);
        this.aMorir = new Animacion(imagenes.animacion_morir, this.ancho, this.alto, 6, 4);

        this.animacion = this.aMover;
    }

    actualizar() {
        //Animaciones

        //en GameLayer tiempoAtaque-- y si <= 0 y hay tropasEnemigas en rango y misma calle ataca

        if (this.tiempoAtaque > 0) {
            this.tiempoAtaque--;
        }
    }

    dibujar() {
        //Scroll y animaciones
    }

    enRango(unidad) {
        if (this.rango > 0) {
            return this.x + this.rango >= unidad.x;
        } else {
            return this.x + this.rango <= unidad.x;
        }
    }

    mismaCalle(unidad) {
        return Math.abs(this.y - unidad.y) <= 10;
    }

    atacar(unidad) {
        if (this.tiempoAtaque <= 0) {
            unidad.vida -= this.damage;
            this.tiempoAtaque = this.cadenciaAtaque;
            //controlar animaciones y vx según las animaciones
        }
    }

    checkVida() {
        if (this.vida <= 0) {
            this.estado = estados.muerto;
            //primero a estados.muriendo y luego pasarle el callback a la animacion para pasar a estados.muerto
            //TODO cuando tengamos las animaciones
        }
    }

    //TODO a partir de aquí ajustar valores según cómo de anchas sean las calles cuando lo sepamos
    //TODO estado.esquivando?
    obstaculoDelante(obstaculo) {
        var xDifference = obstaculo.x - this.x;
        var yDifference = Math.abs(obstaculo.y - this.y);
        //Si va hacia la derecha y hay un obstaculo cerca a la derecha
        if (this.vx > 0 && xDifference <= 40 && xDifference > 0 && yDifference < 30) {
            return true;
        }
        //Si va hacia la izquierda y hay un obstaculo cerca a la izquierda
        if (this.vx < 0 && xDifference >= -40 && xDifference < 0 && yDifference < 30) {
            return true;
        }
        return false;
    }

    //Si está cerca de arriba esquiva hacia abajo, si está cerca de abajo hacia arriba y si no random
    esquivar() {
        if (!this.esquivando) {
            if (this.y < 50) {
                this.vy = 3;
            } else if (this.y > 270) {
                this.vy = -3;
            } else {
                if (Math.random() < 0.5) {
                    this.vy = 3;
                } else {
                    this.vy = -3;
                }
            }

            this.esquivando = true;
        }
    }

    dejarDeEsquivar() {
        this.vy = 0;
        this.esquivando = false;
    }
}