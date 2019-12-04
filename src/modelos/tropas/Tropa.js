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

        //Animaciones
        this.aMover = new Animacion(animaciones.animacion_mover.imagenSrc, this.ancho, this.alto, 6, animaciones.animacion_mover.frames);
        this.aAtacar = new Animacion(animaciones.animacion_atacar.imagenSrc, this.ancho, this.alto, 6, animaciones.animacion_atacar.frames);
        this.aMorir = new Animacion(imagenes.animacion_morir, this.ancho, this.alto, 6, 4, this.finAnimacionMorir.bind(this));

        this.animacion = this.aMover;
    }

    actualizar() {
        //Animaciones
        this.animacion.actualizar();
        //en GameLayer tiempoAtaque-- y si <= 0 y hay tropasEnemigas en rango y misma calle ataca
        this.x = this.x + this.vx;

        if (this.tiempoAtaque > 0) {
            this.tiempoAtaque--;
        }
        switch (this.estado) {
            case estados.atacando:
                this.animacion = this.aAtacar;
                break;
            case estados.moviendo:
                this.animacion = this.aMover;
                break;
            case estados.muriendo:
                this.animacion = this.aMorir;
                break;
        }
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    enRango(unidad) {
        if (this.rango < 0) {
            return this.x + this.rango >= unidad.x;
        } else {
            return this.x + this.rango <= unidad.x;
        }
    }

    mismaCalle(unidad) {
        return Math.abs(this.y - unidad.y) <= 30;
    }

    atacar(unidad) {
        if (this.tiempoAtaque <= 0) {
            this.estado = estados.atacando;
            unidad.vida -= this.damage;
            this.tiempoAtaque = this.cadenciaAtaque;
            //TODO controlar animaciones y vx según las animaciones
        }
        if (unidad.vida <= 1) {
            this.estado = estados.moviendo;
        }
    }

    checkVida() {
        if (this.vida <= 0) {
            if (this.estado == estados.moviendo || this.estado == estados.atacando) {
                this.estado = estados.muriendo;
            }
            //primero a estados.muriendo y luego pasarle el callback a la animacion para pasar a estados.muerto
            //TODO cuando tengamos las animaciones si hay de morir
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

    //TODO esto no va aun
    moverseHacia(y) {
        if (this.y > y) {
            this.vy = -1;
        } else if (this.y < y) {
            this.vy = 1;
        } else {
            this.vy = 0;
        }
    }

    finAnimacionMorir() {
        this.estado = estados.muerto
    }
}