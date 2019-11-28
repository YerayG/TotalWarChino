class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.scrollX = 0;
        this.espacio = new Espacio(1);

        this.bloques = [];

        this.enemigos = [];

        this.obstaculos = [];

        this.propiedades = [];

        this.cargarMapa("res/" + nivelActual + ".txt");
    }

    actualizar() {
        this.espacio.actualizar();

        for (var i = 0; i < this.enemigos.length; i++) {
            this.enemigos[i].actualizar();
        }

        // colisiones , disparoJugador - Enemigo
        for (var j = 0; j < this.enemigos.length; j++) {
            if (this.enemigos[j] != null &&
                this.enemigos[j].estado == estados.muerto) {

                this.espacio
                    .eliminarCuerpoDinamico(this.enemigos[j]);

                this.enemigos.splice(j, 1);
                j = j - 1;
            }
        }
    }

    calcularScroll() {
        // limite izquierda
        if (this.jugador.x > 480 * 0.3) {
            if (this.jugador.x - this.scrollX < 480 * 0.3) {
                this.scrollX = this.jugador.x - 480 * 0.3;
            }
        }

        // limite derecha
        if (this.jugador.x < this.anchoMapa - 480 * 0.3) {
            if (this.jugador.x - this.scrollX > 480 * 0.7) {
                this.scrollX = this.jugador.x - 480 * 0.7;
            }
        }
    }

    dibujar() {
        this.calcularScroll();
        for (var i = 0; i < this.bloques.length; i++) {
            this.bloques[i].dibujar(this.scrollX);
        }
        for (var i = 0; i < this.enemigos.length; i++) {
            this.enemigos[i].dibujar(this.scrollX);
        }
        // HUD
        if (!this.pausa && entrada == entradas.pulsaciones) {
            this.botonDisparo.dibujar();
            this.botonSalto.dibujar();
            this.pad.dibujar();
        }
    }



    procesarControles() {
        // disparar
        if (controles.disparo) {
            var nuevoDisparo = this.jugador.disparar();
            if (nuevoDisparo != null) {
                this.espacio.agregarCuerpoDinamico(nuevoDisparo);
                this.disparosJugador.push(nuevoDisparo);
            }
        }

        // Eje X
        if (controles.moverX > 0) {
            this.jugador.moverX(1);

        } else if (controles.moverX < 0) {
            this.jugador.moverX(-1);

        } else {
            this.jugador.moverX(0);
        }

        // Eje Y
        if (controles.moverY > 0) {
            //this.jugador.moverY(-1);
            this.jugador.saltar();

        } else if (controles.moverY < 0) {
            //this.jugador.moverY(1);

        } else {
            //this.jugador.moverY(0);
        }

    }

    cargarMapa(ruta) {
        var fichero = new XMLHttpRequest();
        fichero.open("GET", ruta, false);

        fichero.onreadystatechange = function() {
            var texto = fichero.responseText;
            var lineas = texto.split('\n');
            this.anchoMapa = (lineas[0].length - 1) * 40;
            for (var i = 0; i < lineas.length; i++) {
                var linea = lineas[i];
                for (var j = 0; j < linea.length; j++) {
                    var simbolo = linea[j];
                    var x = 40 / 2 + j * 40; // x central
                    var y = 32 + i * 32; // y de abajo
                    this.cargarObjetoMapa(simbolo, x, y);
                }
            }
        }.bind(this);

        fichero.send(null);
    }

    cargarObjetoMapa(simbolo, x, y) {
        switch (simbolo) {
            case "E":
                var espadachin = new Espadachin(x, y);
                espadachin.y = espadachin.y - espadachin.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.aliados.push(espadachin);
                this.espacio.agregarCuerpoDinamico(espadachin);
                break;
            case "A":
                var arquero = new Arquero(x, y);
                arquero.y = arquero.y - arquero.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.aliados.push(arquero);
                this.espacio.agregarCuerpoDinamico(arquero);
                break;

            case "C":
                //supongo que es el aliado
                var animaciones = {
                    animacion_caballero_ataque_abajo = imagenes.animacion_caballero_aliado_ataque_abajo,
                    animacion_caballero_ataque_arriba = imagenes.animacion_caballero_aliado_ataque_arriba,
                    animacion_caballero_ataque_derecha = imagenes.animacion_caballero_aliado_ataque_derecha,
                    animacion_caballero_ataque_izquierda = imagenes.animacion_caballero_aliado_ataque_izquierda,
                    animacion_caballero_abajo = imagenes.animacion_caballero_aliado_abajo,
                    animacion_caballero_arriba = imagenes.animacion_caballero_aliado_arriba,
                    animacion_caballero_derecha = imagenes.animacion_caballero_aliado_derecha,
                    animacion_caballero_izquierda = imagenes.animacion_caballero_aliado_izquierda
                }
                var caballero = new Caballero(x, y, animaciones);
                caballero.y = caballero.y - caballero.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.aliados.push(caballero);
                this.espacio.agregarCuerpoDinamico(caballero);
                break;

            case "L":
                var lanzero = new Lancero(x, y);
                lanzero.y = lanzero.y - lanzero.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.aliados.push(lanzaro);
                this.espacio.agregarCuerpoDinamico(lanzero);
                break;
                //Al crear una unidad hay que pasarle las animaciones.
            case "R":
                //suponemos que es el rey bueno
                var animaciones = {
                    animacion_rey_ataque_abajo = imagenes.animacion_rey_aliado_ataque_abajo,
                    animacion_rey_ataque_arriba = imagenes.animacion_rey_aliado_ataque_arriba,
                    animacion_rey_ataque_derecha = imagenes.animacion_rey_aliado_ataque_derecha,
                    animacion_rey_ataque_izquierda = imagenes.animacion_rey_aliado_ataque_izquierda,
                    animacion_rey_abajo = imagenes.animacion_rey_aliado_abajo,
                    animacion_rey_arriba = imagenes.animacion_rey_aliado_arriba,
                    animacion_rey_derecha = imagenes.animacion_rey_aliado_derecha,
                    animacion_rey_izquierda = imagenes.animacion_rey_aliado_izquierda
                }
                var rey = new Rey(x, y, animaciones);
                rey.y = rey.y - rey.alto / 2;
                this.aliados.push(rey);
                this.espacio.agregarCuerpoDinamico(rey);
                break;

            case "T":
                var tropa = new Tropa(x, y);
                tropa.y = tropa.y - tropa.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.aliados.push(tropa);
                this.espacio.agregarCuerpoDinamico(tropa);
                break;

            case "#":
                var bloque = new Bloque(imagenes.bloque_tierra, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoDinamico(bloque);
                break;
            case ".":
                var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoDinamico(bloque);
                break;
            case "M":
                var bloque = new Bloque(imagenes.bloque_monte, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoEstatico(bloque);
                break;
            case "B":
                var barrera = new Barrera(x, y);
                barrera.y = barrera.y - barrera.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.obstaculos.push(barrera);
                this.espacio.agregarCuerpoEstatico(barrera);
                break;
            case "Y":
                var ayuntamiento = new ayuntamiento(x, y);
                ayuntamiento.y = ayuntamiento.y - ayuntamiento.alto / 2;
                this.propiedades.push(ayuntamiento);
                this.espacio.agregarCuerpoEstatico(ayuntamiento);
                break;
        }
    }

    calcularPulsaciones(pulsaciones) {
        // Suponemos botones no estan pulsados
        this.botonDisparo.pulsado = false;
        this.botonSalto.pulsado = false;
        // suponemos que el pad está sin tocar
        controles.moverX = 0;

        for (var i = 0; i < pulsaciones.length; i++) {
            if (this.pad.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                var orientacionX = this.pad.obtenerOrientacionX(pulsaciones[i].x);
                if (orientacionX > 20) { // de 0 a 20 no contabilizamos
                    controles.moverX = orientacionX;
                }
                if (orientacionX < -20) { // de -20 a 0 no contabilizamos
                    controles.moverX = orientacionX;
                }
            }

            if (this.botonDisparo.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonDisparo.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    controles.disparo = true;
                }
            }

            if (this.botonSalto.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonSalto.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    controles.moverY = 1;
                }
            }

        }

        // No pulsado - Boton Disparo
        if (!this.botonDisparo.pulsado) {
            controles.disparo = false;
        }

        // No pulsado - Boton Salto
        if (!this.botonSalto.pulsado) {
            controles.moverY = 0;
        }
    }
}