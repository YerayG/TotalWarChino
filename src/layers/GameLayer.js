class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.scrollX = 0;
        this.espacio = new Espacio(1);

        this.bloques = [];

        this.fondo = new Fondo(imagenes.fondo_2, 480 * 0.5, 320 * 0.5);

        //this.jugador = new Jugador();
        this.enemigo = new Enemigo(); //El enemigo no son las tropas, es lo que las controla. Las tropas enemigas están en el array tropasEnemigas

        this.tropasEnemigas = [];
        this.tropasAliadas = [];

        this.obstaculos = [];

        this.propiedadesAliadas = [];
        this.propiedadesEnemigas = [];

        this.torresAliadas = [];
        this.torresEnemigas = [];

        this.barrerasAliadas = [];
        this.barrerasEnemigas = [];

        this.fondoPuntos =
            new Fondo(imagenes.icono_puntos, 480 * 0.85, 320 * 0.05);


        this.disparosJugador = [];
        this.puntos = new Texto(0, 480 * 0.9, 320 * 0.07);

        this.botonSalto = new Boton(imagenes.boton_salto, 480 * 0.9, 320 * 0.55);
        this.botonDisparo = new Boton(imagenes.boton_disparo, 480 * 0.75, 320 * 0.83);

        this.pad = new Pad(480 * 0.14, 320 * 0.8);

        this.cargarMapa("res/" + nivelActual + ".txt");
    }

    actualizar() {
        this.espacio.actualizar();
        console.log("disparosJugador: " + this.disparosJugador.length);
        // Eliminar disparos fuera de pantalla
        for (var i = 0; i < this.disparosJugador.length; i++) {
            if (this.disparosJugador[i] != null &&
                !this.disparosJugador[i].estaEnPantalla()) {

                this.espacio
                    .eliminarCuerpoDinamico(this.disparosJugador[i]);

                this.disparosJugador.splice(i, 1);
                i = i - 1;
            }
        }


        // Jugador se cae
        if (this.jugador.y > 480) {
            this.iniciar();
        }

        this.jugador.actualizar();
        // Eliminar disparos sin velocidad
        for (var i = 0; i < this.disparosJugador.length; i++) {
            if (this.disparosJugador[i] != null &&
                this.disparosJugador[i].vx == 0) {

                this.espacio
                    .eliminarCuerpoDinamico(this.disparosJugador[i]);
                this.disparosJugador.splice(i, 1);
            }
        }

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].actualizar();
        }
        for (var i = 0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].actualizar();
        }

        // colisiones
        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            if (this.jugador.colisiona(this.tropasEnemigas[i])) {
                this.jugador.golpeado();
                if (this.jugador.vidas <= 0) {
                    this.iniciar();
                }
            }
        }
        // colisiones , disparoJugador - Enemigo
        for (var i = 0; i < this.disparosJugador.length; i++) {
            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (this.disparosJugador[i] != null &&
                    this.tropasEnemigas[j] != null &&
                    this.disparosJugador[i].colisiona(this.tropasEnemigas[j])) {

                    this.espacio
                        .eliminarCuerpoDinamico(this.disparosJugador[i]);

                    this.disparosJugador.splice(i, 1);
                    i = i - 1;
                    this.tropasEnemigas[j].impactado();
                    this.puntos.valor++;
                }
            }
        }

        //Esquivar obstáculos
        //TODO va a haber que arreglarlo cuando tengamos las animaciones, es imposible hacerlo bien a ojo
        for (var i = 0; i < this.obstaculos.length; i++) {
            for (var j = 0; j < this.tropasAliadas.length; j++) {
                if (this.tropasAliadas[j].obstaculoDelante(i)) {
                    this.tropasAliadas[j].esquivar();
                } else {
                    this.tropasAliadas[j].dejarDeEsquivar();
                }
            }

            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (this.tropasEnemigas[j].obstaculoDelante(i)) {
                    this.tropasEnemigas[j].esquivar();
                } else {
                    this.tropasEnemigas[j].dejarDeEsquivar();
                }
            }
        }

        //Generar recursos
        this.jugador.generarRecursos(this.propiedadesAliadas);
        this.enemigo.generarRecursos(this.propiedadesEnemigas);

        //Generar algo enemigo
        //TODO descomentar cuando esté hecho el mapa
        this.enemigo.decidirSiguiente(this.tropasEnemigas, this.propiedadesEnemigas);
        this.generarSiguienteCompraEnemiga();

        //Atacar (tropasAliadas)
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (this.tropasAliadas[i].enRango(this.tropasEnemigas[j]) && this.tropasAliadas[i].mismaCalle(this.tropasEnemigas[j])) {
                    this.tropasAliadas[i].atacar(this.tropasEnemigas[j]);
                    this.tropasEnemigas[j].checkVida();
                }
                if (this.tropasEnemigas[j].enRango(this.tropasAliadas[i]) && this.tropasEnemigas[j].mismaCalle(this.tropasAliadas[i])) {
                    this.tropasEnemigas[i].atacar(this.tropasAliadas[i]);
                    this.tropasAliadas[i].checkVida();
                }
            }

            for (var j = 0; j < this.propiedadesEnemigas.length; j++) {
                if (this.tropasAliadas[i].enRango(this.propiedadesEnemigas[j]) && this.tropasAliadas[i].mismaCalle(this.propiedadesEnemigas[j])) {
                    this.tropasAliadas[i].atacar(this.propiedadesEnemigas[j]);
                }
            }

            for (var j = 0; j < this.barrerasEnemigas.length; j++) {
                if (this.tropasAliadas[i].enRango(this.barrerasEnemigas[j]) && this.tropasAliadas[i].mismaCalle(this.barrerasEnemigas[j])) {
                    this.tropasAliadas[i].atacar(this.barrerasEnemigas[j]);
                }
            }

            if (this.tropasAliadas[i].enRango(this.baseEnemiga)) {
                this.tropasAliadas[i].atacar(this.baseEnemiga);
                //TODO Si vida de baseEnemiga <= 0 game over y ganas
            }
        }

        //Atacar (tropasEnemigas)
        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            for (var j = 0; j < this.propiedadesAliadas.length; j++) {
                if (this.tropasEnemigas[i].enRango(this.propiedadesAliadas[j]) && this.tropasEnemigas[i].mismaCalle(this.propiedadesAliadas[j])) {
                    this.tropasEnemigas[i].atacar(this.propiedadesAliadas[j]);
                }
            }

            for (var j = 0; j < this.barrerasAliadas.length; j++) {
                if (this.tropasEnemigas[i].enRango(this.barrerasAliadas[j]) && this.tropasEnemigas[i].mismaCalle(this.barrerasAliadas[j])) {
                    this.tropasEnemigas[i].atacar(this.barrerasAliadas[j]);
                }
            }

            if (this.tropasEnemigas[i].enRango(this.baseAliada)) {
                this.tropasEnemigas[i].atacar(this.baseAliada);
                //TODO Si vida de baseAliada <= 0 game over y pierdes
            }
        }

        // Tropas muertas fuera del juego
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            if (this.tropasAliadas[i] != null &&
                this.tropasAliadas[i].estado == estados.muerto) {

                this.espacio
                    .eliminarCuerpoDinamico(this.tropasAliadas[i]);

                this.tropasAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            if (this.tropasEnemigas[i] != null &&
                this.tropasEnemigas[i].estado == estados.muerto) {

                this.espacio
                    .eliminarCuerpoDinamico(this.tropasEnemigas[i]);

                this.tropasEnemigas.splice(i, 1);
                i = i - 1;
            }
        }

        //Propiedades y barreras destruidas fuera del juego
        for (var i = 0; i < this.propiedadesAliadas.length; i++) {
            if (this.propiedadesAliadas[i] != null && this.propiedadesAliadas[i].isDestruido()) {
                this.espacio.eliminarCuerpoEstatico(this.propiedadesAliadas[i]);
                this.propiedadesAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.barrerasAliadas.length; i++) {
            if (this.barrerasAliadas[i] != null && this.barrerasAliadas[i].isDestruido()) {
                this.espacio.eliminarCuerpoEstatico(this.barrerasAliadas[i]);
                this.barrerasAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            if (this.propiedadesEnemigas[i] != null && this.propiedadesEnemigas[i].isDestruido()) {
                this.espacio.eliminarCuerpoEstatico(this.propiedadesEnemigas[i]);
                this.propiedadesEnemigas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.barrerasEnemigas.length; i++) {
            if (this.barrerasEnemigas[i] != null && this.barrerasEnemigas[i].isDestruido()) {
                this.espacio.eliminarCuerpoEstatico(this.barrerasEnemigas[i]);
                this.barrerasEnemigas.splice(i, 1);
                i = i - 1;
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
        this.fondo.dibujar();

        for (var i = 0; i < this.bloques.length; i++) {
            this.bloques[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].dibujar(this.scrollX);
        }

        this.jugador.dibujar(this.scrollX);
        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].dibujar(this.scrollX);
        }

        this.fondoPuntos.dibujar();

        this.puntos.dibujar();

        // HUD
        this.fondoPuntos.dibujar();
        this.puntos.dibujar();
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
            case "M":
                var mina = new Mina(x, y);
                mina.y = mina.y - mina.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.propiedadesAliadas.push(mina);
                this.espacio.agregarCuerpoDinamico(mina);
                break;
            case "B":
                var barrera = new Barrera(x, y);
                barrera.y = barrera.y - barrera.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.obstaculos.push(barrera);
                this.espacio.agregarCuerpoEstatico(barrera);
                break;

            case "T":
                var torre = new Torre(x, y);
                torre.y = torre.y - torre.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.obstaculos.push(torre);
                this.espacio.agregarCuerpoEstatico(torre);
                break;

            case "1":
                this.jugador = new Jugador(x, y);
                // modificación para empezar a contar desde el suelo
                this.jugador.y = this.jugador.y - this.jugador.alto / 2;
                this.espacio.agregarCuerpoDinamico(this.jugador);
                break;


            case "#":
                var bloque = new Bloque(imagenes.bloque_tierra, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoEstatico(bloque);
                break;

            case "C":
                this.copa = new BloqueAntiguo(imagenes.copa, x, y);
                this.copa.y = this.copa.y - this.copa.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.espacio.agregarCuerpoDinamico(this.copa);
                break;


            case "E":
                var enemigo = new Nave(x, y);
                enemigo.y = enemigo.y - enemigo.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.tropasEnemigas.push(enemigo);
                this.espacio.agregarCuerpoDinamico(enemigo);
                break;

            case "A":
                this.baseAliada = new Base(x, y, true);
                this.espacio.agregarCuerpoEstatico(this.baseAliada);
                break;

            case "V":
                this.baseEnemiga = new Base(x, y, false);
                this.espacio.agregarCuerpoEstatico(this.baseEnemiga);
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

    generarSiguienteCompraEnemiga() {
        var calle = parseInt(Math.random() * 6); //TODO cambiar esto, depende de las dimensiones del mapa y no las sabemos aún
        var xEnemigo = 700; //TODO cambiar esto, depende de las dimensiones del mapa y no las sabemos aún
        var yEnemigo = this.getYFromCalle(calle);

        if (this.enemigo.isTropaSiguiente) {
            switch (this.enemigo.siguienteCompra) {
                case 0:
                    if (this.enemigo.comprobarRecursos(costeEspadachin)) {
                        var espadachin = new Espadachin(xEnemigo, yEnemigo, false);
                        this.tropasEnemigas.push(espadachin);
                        this.espacio.agregarCuerpoDinamico(espadachin);
                        this.enemigo.decrementarRecursos(costeEspadachin);
                    }
                    break;
                case 1:
                    if (this.enemigo.comprobarRecursos(costeArquero)) {
                        var animaciones = {
                            animacion_atacar = {
                                imagenSrc = imagenes.animacion_arquero_enemigo_ataque,
                                frames = 7
                            },
                            animacion_mover = {
                                imagenSrc = imagenes.animacion_arquero_enemigo_ataque,
                                frames = 7
                            }
                        };
                        var arquero = new Arquero(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(arquero);
                        this.espacio.agregarCuerpoDinamico(arquero);
                        this.enemigo.decrementarRecursos(costeArquero);
                    }
                    break;
                case 2:
                    if (this.enemigo.comprobarRecursos(costeLancero)) {
                        var animaciones = {
                            animacion_atacar = {
                                imagenSrc = imagenes.animacion_lancero_enemigo_ataque,
                                frames = 7
                            },
                            animacion_mover = {
                                imagenSrc = imagenes.animacion_lancero_enemigo_ataque,
                                frames = 7
                            },
                        };
                        var lancero = new Lancero(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(lancero);
                        this.espacio.agregarCuerpoDinamico(lancero);
                        this.enemigo.decrementarRecursos(costeLancero);
                    }
                    break;
                case 3:
                    if (this.enemigo.comprobarRecursos(costeCaballero)) {
                        var animaciones = {
                            animacion_atacar = {
                                imagenSrc = imagenes.animacion_caballero_enemigo_ataque_izquierda,
                                frames = 7
                            },
                            animacion_mover = {
                                imagenSrc = imagenes.animacion_caballero_enemigo_izquierda,
                                frames = 4
                            },
                        };
                        var caballero = new Caballero(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(caballero);
                        this.espacio.agregarCuerpoDinamico(caballero);
                        this.enemigo.decrementarRecursos(costeCaballero);
                    }
                    break;
                case 4:
                    if (this.enemigo.comprobarRecursos(costeCatapulta)) {
                        var animaciones = {
                            animacion_atacar = {
                                imagenSrc = imagenes.animacion_caballero_enemigo_ataque_izquierda,
                                frames = 7
                            },
                            animacion_mover = {
                                imagenSrc = imagenes.animacion_caballero_enemigo_izquierda,
                                frames = 4
                            },
                        };
                        var catapulta = new Catapulta(xEnemigo, yEnemigo, false);
                        this.tropasEnemigas.push(catapulta);
                        this.espacio.agregarCuerpoDinamico(catapulta);
                        this.enemigo.decrementarRecursos(costeCatapulta);
                    }
                    break;
                case 5:
                    if (this.enemigo.comprobarRecursos(costeRey)) {
                        var animaciones = {
                            animacion_atacar = {
                                imagenSrc = imagenes.animacion_rey_enemigo_ataque_izquierda,
                                frames = 7
                            },
                            animacion_mover = {
                                imagenSrc = imagenes.animacion_rey_enemigo_izquierda,
                                frames = 4
                            },
                        };
                        var rey = new Rey(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(rey);
                        this.espacio.agregarCuerpoDinamico(rey);
                        this.enemigo.decrementarRecursos(costeRey);
                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (this.enemigo.siguienteCompra) {
                case 0:
                    if (this.enemigo.comprobarRecursos(costeAyuntamientoDinero, costeAyuntamientoHierro, costeAyuntamientoMadera)) {
                        var ayuntamiento = new Ayuntamiento(xEnemigo, yEnemigo);
                        this.tropasEnemigas.push(ayuntamiento);
                        this.espacio.agregarCuerpoEstatico(ayuntamiento);
                        this.enemigo.decrementarRecursos(costeAyuntamientoDinero, costeAyuntamientoHierro, costeAyuntamientoMadera);
                    }
                    break;
                case 1:
                    if (this.enemigo.comprobarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera)) {
                        var cuartel = new Cuartel(xEnemigo, yEnemigo);
                        this.tropasEnemigas.push(cuartel);
                        this.espacio.agregarCuerpoEstatico(cuartel);
                        this.enemigo.decrementarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera);
                    }
                    break;
                case 2:
                    if (this.enemigo.comprobarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera)) {
                        var mina = new Mina(xEnemigo, yEnemigo);
                        this.tropasEnemigas.push(mina);
                        this.espacio.agregarCuerpoEstatico(mina);
                        this.enemigo.decrementarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera);
                    }
                    break;
                case 3:
                    if (this.enemigo.comprobarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera)) {
                        var serreria = new Serreria(xEnemigo, yEnemigo);
                        this.tropasEnemigas.push(serreria);
                        this.espacio.agregarCuerpoEstatico(serreria);
                        this.enemigo.decrementarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera);
                    }
                    break;
                case 4:
                    if (this.enemigo.comprobarRecursos(costeBarreraDinero, costeBarreraHierro, costeBarreraMadera)) {
                        var barrera = new Barrera(xEnemigo, yEnemigo);
                        this.tropasEnemigas.push(barrera);
                        this.espacio.agregarCuerpoEstatico(barrera);
                        this.enemigo.decrementarRecursos(costeBarreraDinero, costeBarreraHierro, costeBarreraMadera);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    //TODO cambiar esto, depende de las dimensiones del mapa y no las sabemos aún
    getYFromCalle(calle) {
        return 15 + (calle * 30);
    }

}