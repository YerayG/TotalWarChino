class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.scrollX = 0;
        this.espacio = new Espacio(1);

        this.bloques = [];

        this.mapa = new Mapa();

        this.fondo = new Fondo(imagenes.fondo, 480 * 0.5, 320 * 0.5);

        this.jugador = new Jugador();
        this.enemigo = new Enemigo();

        this.tropasEnemigas = [];
        this.tropasAliadas = [];

        this.obstaculos = [];

        this.propiedadesAliadas = [];
        this.propiedadesEnemigas = [];

        this.barrerasAliadas = [];
        this.barrerasEnemigas = [];

        this.disparosJugador = [];

        this.fondoMonedas = new Fondo(imagenes.icono_monedas, 480 * 0.885, 320 * 0.05);
        this.fondoHierro = new Fondo(imagenes.icono_hierro, 480 * 0.74, 320 * 0.06);
        this.fondoMadera = new Fondo(imagenes.icono_madera, 480 * 0.59, 320 * 0.05);

        this.hierro = new Texto(0, 480 * 0.78, 320 * 0.06);
        this.oro = new Texto(0, 480 * 0.92, 320 * 0.06);
        this.madera = new Texto(0, 480 * 0.63, 320 * 0.06);

        this.botonSalto = new Boton(imagenes.boton_salto, 480 * 0.9, 320 * 0.55);
        this.botonDisparo = new Boton(imagenes.boton_disparo, 480 * 0.75, 320 * 0.83);

        //botones tropas
        this.botonArquero = new Boton(imagenes.boton_arquero, 480 * 0.25, 320 * 0.94);
        this.botonEspadachin = new Boton(imagenes.boton_espadachin, 480 * 0.1, 320 * 0.94);
        this.botonLancero = new Boton(imagenes.boton_lancero, 480 * 0.40, 320 * 0.94);
        this.botonCaballero = new Boton(imagenes.boton_caballero, 480 * 0.55, 320 * 0.94);
        this.botonRey = new Boton(imagenes.boton_rey, 480 * 0.70, 320 * 0.94);
        this.botonCatapulta = new Boton(imagenes.boton_catapulta, 480 * 0.85, 320 * 0.94);

        //botones edificios
        this.botonAyuntamiento = new Boton(imagenes.boton_Ayuntamiento, 480 * 0.1, 320 * 0.07);
        this.botonMina = new Boton(imagenes.boton_Mina, 480 * 0.23, 320 * 0.07);
        this.botonSerreria = new Boton(imagenes.boton_Serreria, 480 * 0.36, 320 * 0.07);
        this.botonCuartel = new Boton(imagenes.boton_Cuartel, 480 * 0.49, 320 * 0.07);


        //coste tropas
        this.textoEspadachin = new TextoOro("20", 480 * 0.115, 320 * 0.975);
        this.textoArquero = new TextoOro("20", 480 * 0.27, 320 * 0.975);
        this.textoLancero = new TextoOro("60", 480 * 0.415, 320 * 0.975);
        this.textoCaballero = new TextoOro("60", 480 * 0.565, 320 * 0.975);
        this.textoRey = new TextoOro("60", 480 * 0.715, 320 * 0.975);
        this.textoCatapulta = new TextoOro("60", 480 * 0.868, 320 * 0.975);

        //coste Edificios
        this.textoAyuntamientoOro = new TextoOro("120", 480 * 0.13, 320 * 0.06);
        this.textoAyuntamientoMadera = new TextoMadera("120", 480 * 0.13, 320 * 0.09);
        this.textoAyuntamientoHierro = new TextoHierro("200", 480 * 0.13, 320 * 0.12);

        this.textoMinaOro = new TextoOro("120", 480 * 0.263, 320 * 0.06);
        this.textoMinaMadera = new TextoMadera("120", 480 * 0.263, 320 * 0.09);
        this.textoMinaHierro = new TextoHierro("200", 480 * 0.263, 320 * 0.12);

        this.textoSerreriaOro = new TextoOro("120", 480 * 0.393, 320 * 0.06);
        this.textoSerreriaMadera = new TextoMadera("120", 480 * 0.393, 320 * 0.09);
        this.textoSerreriaHierro = new TextoHierro("200", 480 * 0.393, 320 * 0.12);

        this.textoCuartelOro = new TextoOro("120", 480 * 0.523, 320 * 0.06);
        this.textoCuartelMadera = new TextoMadera("120", 480 * 0.523, 320 * 0.09);
        this.textoCuartelHierro = new TextoHierro("200", 480 * 0.523, 320 * 0.12);

        this.cargarMapa("res/" + nivelActual + ".txt");
    }

    actualizar() {
        this.espacio.actualizar();

        //Actualiza en el mapa el dinero , madera y hierro del jugador
        this.oro.valor = this.jugador.dinero;
        this.madera.valor = this.jugador.madera;
        this.hierro.valor = this.jugador.hierro;

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].actualizar();
        }

        for (var i = 0; i < this.tropasAliadas.length; i++) {
            this.tropasAliadas[i].actualizar();
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

            if (this.baseEnemiga != undefined) {
                if (this.tropasAliadas[i].enRango(this.baseEnemiga)) {
                    this.tropasAliadas[i].atacar(this.baseEnemiga);
                    //TODO Si vida de baseEnemiga <= 0 game over y ganas
                }
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

            if (this.baseEnemiga != undefined) {
                if (this.tropasEnemigas[i].enRango(this.baseAliada)) {
                    this.tropasEnemigas[i].atacar(this.baseAliada);
                    //TODO Si vida de baseAliada <= 0 game over y pierdes
                }
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
        console.log(this.propiedadesEnemigas.length);
    }

    dibujar() {
        this.fondo.dibujar();

        for (var i = 0; i < this.bloques.length; i++) {
            this.bloques[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.tropasAliadas.length; i++) {
            this.tropasAliadas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.propiedadesAliadas.length; i++) {
            this.propiedadesAliadas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            this.propiedadesEnemigas[i].dibujar(this.scrollX);
        }

        this.fondoMonedas.dibujar();
        this.fondoHierro.dibujar();
        this.fondoMadera.dibujar();

        this.oro.dibujar();
        this.hierro.dibujar();
        this.madera.dibujar();

        //Botones dibujar
        this.botonArquero.dibujar();
        this.botonEspadachin.dibujar();
        this.botonCaballero.dibujar();
        this.botonLancero.dibujar();
        this.botonRey.dibujar();
        this.botonCatapulta.dibujar();
        this.botonAyuntamiento.dibujar();
        this.botonMina.dibujar();
        this.botonSerreria.dibujar();
        this.botonCuartel.dibujar();

        //coste dibujar
        this.textoArquero.dibujar();
        this.textoEspadachin.dibujar();
        this.textoLancero.dibujar();
        this.textoCaballero.dibujar();
        this.textoRey.dibujar();
        this.textoCatapulta.dibujar();

        //coste edificios
        this.textoAyuntamientoOro.dibujar();
        this.textoAyuntamientoMadera.dibujar();
        this.textoAyuntamientoHierro.dibujar();

        this.textoMinaOro.dibujar();
        this.textoMinaMadera.dibujar();
        this.textoMinaHierro.dibujar();

        this.textoSerreriaOro.dibujar();
        this.textoSerreriaMadera.dibujar();
        this.textoSerreriaHierro.dibujar();

        this.textoCuartelOro.dibujar();
        this.textoCuartelMadera.dibujar();
        this.textoCuartelHierro.dibujar();
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

    procesarControles() {
        if (controles.scroll) {
            if (this.scrollX <= this.anchoMapa - 480 && controles.scroll > 0) {
                this.scrollX += controles.scroll * 3;
            } else if (this.scrollX >= 0 && controles.scroll < 0) {
                this.scrollX += controles.scroll * 3;
            }
        }
    }

    cargarObjetoMapa(simbolo, x, y) {
        switch (simbolo) {
            case '.':
                var bloque = new Bloque(imagenes.bloque_arena, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoEstatico(bloque);
                break;
            case "O":
                var obstaculo = new Obstaculo(x, y);
                obstaculo.y = obstaculo.y - obstaculo.alto / 2;
                this.obstaculos.push(obstaculo);
                this.espacio.agregarCuerpoEstatico(obstaculo);
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
        for (var i = 0; i < pulsaciones.length; i++) {

            if (this.botonEspadachin.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonEspadachin.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoEspadachin.valor) {
                        alert("NECESITAS" + "\n" + "20 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 1) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 1;
                        }
                    }
                }
            }
            if (this.botonArquero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonArquero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoArquero.valor) {
                        alert("NECESITAS" + "\n" + "20 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 2) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 2;
                        }
                    }
                }
            }
            if (this.botonLancero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonLancero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoLancero.valor) {
                        alert("NECESITAS" + "\n" + "60 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 3) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 3;
                        }
                    }
                }
            }
            if (this.botonCaballero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCaballero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCaballero.valor) {
                        alert("NECESITAS" + "\n" + "60 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 4) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 4;
                        }
                    }
                }
            }
            if (this.botonRey.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonRey.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoRey.valor) {
                        alert("NECESITAS" + "\n" + "60 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 5) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 5;
                        }
                    }
                }
            }

            if (this.botonCatapulta.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCatapulta.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCatapulta.valor) {
                        alert("NECESITAS" + "\n" + "60 oro");
                    } else {
                        if (this.jugador.siguienteCompra === 6) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 6;
                        }
                    }
                }
            }

            if (this.botonAyuntamiento.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonAyuntamiento.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoAyuntamientoOro.valor || this.jugador.madera < this.textoAyuntamientoMadera.valor || this.jugador.hierro < this.textoAyuntamientoHierro.valor) {
                        alert("NECESITAS" + "\n" + "120 oro" + "\n" + "120 madera" + "\n" + " 200 hierro");
                    } else {
                        if (this.jugador.siguienteCompra === 7) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 7;
                        }
                    }
                }
            }
            if (this.botonCuartel.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCuartel.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCuartelOro.valor || this.jugador.madera < this.textoCuartelMadera.valor || this.jugador.hierro < this.textoCuartelHierro.valor) {
                        alert("NECESITAS" + "\n" + "120 oro" + "\n" + "120 madera" + "\n" + " 200 hierro");
                    } else {

                        if (this.jugador.siguienteCompra === 8) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 8;
                        }

                    }
                }
            }
            if (this.botonMina.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonMina.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoMinaOro.valor || this.jugador.madera < this.textoMinaMadera.valor || this.jugador.hierro < this.textoMinaHierro.valor) {
                        alert("NECESITAS" + "\n" + "120 oro" + "\n" + "120 madera" + "\n" + " 200 hierro");
                    } else {

                        if (this.jugador.siguienteCompra === 9) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 9;
                        }
                    }
                }
            }
            if (this.botonSerreria.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonSerreria.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoSerreriaOro.valor || this.jugador.madera < this.textoSerreriaMadera.valor || this.jugador.hierro < this.textoSerreriaHierro.valor) {
                        alert("NECESITAS" + "\n" + "120 oro" + "\n" + "120 madera" + "\n" + " 200 hierro");
                    } else {

                        if (this.jugador.siguienteCompra === 10) {
                            this.jugador.siguienteCompra = 0;
                        } else {
                            this.jugador.siguienteCompra = 10;
                        }
                    }
                }
            }

            if (this.mapa.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.mapa.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    var posicionX = pulsaciones[i].x;
                    var posicionY = pulsaciones[i].y;
                    //Solo se puede colocar al principio del mapa
                    if (posicionX + this.scrollX <= 300) {
                        this.cargarEnMapa(this.jugador.siguienteCompra, posicionX + this.scrollX, posicionY);
                    } else {
                        alert("Solo puedes construir en tu zona del mapa (al principio)");
                    }
                }
            }


        }
    }

    cargarEnMapa(siguienteCompra, posicionX, posicionY) {
        switch (siguienteCompra) {
            case 1:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_arquero_enemigo_ataque,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_arquero_enemigo_mover,
                        frames: 4
                    }
                };
                var espadachin = new Espadachin(posicionX, posicionY, true, animaciones);
                espadachin.y = espadachin.y - espadachin.alto / 2;
                if (!this.colisionaPropiedad(espadachin)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoEspadachin.valor;
                    this.tropasAliadas.push(espadachin);
                    this.espacio.agregarCuerpoDinamico(espadachin);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 2:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_arquero_aliado_ataque,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_arquero_aliado_mover,
                        frames: 4
                    }
                };
                var arquero = new Arquero(posicionX, posicionY, true, animaciones);
                arquero.y = arquero.y - arquero.alto / 2;
                if (!this.colisionaPropiedad(arquero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoArquero.valor;
                    this.tropasAliadas.push(arquero);
                    this.espacio.agregarCuerpoDinamico(arquero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 3:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_lancero_aliado_ataque,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_lancero_aliado_mover,
                        frames: 4
                    }
                };
                var lancero = new Lancero(posicionX, posicionY, true, animaciones);
                lancero.y = lancero.y - lancero.alto / 2;
                if (!this.colisionaPropiedad(lancero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoLancero.valor;
                    this.tropasAliadas.push(lancero);
                    this.espacio.agregarCuerpoDinamico(lancero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 4:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_caballero_aliado_ataque,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_caballero_aliado_derecha,
                        frames: 4
                    }
                };
                var caballero = new Caballero(posicionX, posicionY, true, animaciones);
                caballero.y = caballero.y - caballero.alto / 2;
                if (!this.colisionaPropiedad(caballero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCaballero.valor;
                    this.tropasAliadas.push(caballero);
                    this.espacio.agregarCuerpoDinamico(caballero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 5:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_rey_aliado_ataque,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_rey_aliado_derecha,
                        frames: 4
                    }
                };
                var rey = new Rey(posicionX, posicionY, true, animaciones);
                rey.y = rey.y - rey.alto / 2;
                if (!this.colisionaPropiedad(rey)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoRey.valor;
                    this.tropasAliadas.push(rey);
                    this.espacio.agregarCuerpoDinamico(rey);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 6:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_catapulta_aliada_ataque,
                        frames: 5
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_catapulta_aliada_mover,
                        frames: 4
                    }
                };
                var catapulta = new Catapulta(posicionX, posicionY, true, animaciones);
                catapulta.y = catapulta.y - catapulta.alto / 2;
                if (!this.colisionaPropiedad(catapulta)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCatapulta.valor;
                    this.tropasAliadas.push(catapulta);
                    this.espacio.agregarCuerpoDinamico(catapulta);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 7:
                var ayuntamiento = new Ayuntamiento(posicionX, posicionY);
                //ayuntamiento.y = ayuntamiento.y - ayuntamiento.alto / 2;
                if (!this.colisionaPropiedad(ayuntamiento) && !this.colisionaTropas(ayuntamiento)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoAyuntamientoOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoAyuntamientoMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoAyuntamientoHierro.valor;
                    this.propiedadesAliadas.push(ayuntamiento);
                    this.espacio.agregarCuerpoEstatico(ayuntamiento);
                    this.jugador.siguienteCompra = 0;
                }
                break;
            case 8:
                var cuartel = new Cuartel(posicionX, posicionY);
                cuartel.y = cuartel.y - cuartel.alto / 2;
                if (!this.colisionaPropiedad(cuartel) && !this.colisionaTropas(cuartel)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCuartelOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoCuartelMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoCuartelHierro.valor;
                    this.propiedadesAliadas.push(cuartel);
                    this.espacio.agregarCuerpoEstatico(cuartel);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 9:
                var mina = new Mina(posicionX, posicionY);
                mina.y = mina.y - mina.alto / 2;
                if (!this.colisionaPropiedad(mina) && !this.colisionaTropas(mina)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoMinaOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoMinaMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoMinaHierro.valor;
                    this.propiedadesAliadas.push(mina);
                    this.espacio.agregarCuerpoEstatico(mina);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 10:
                var serreria = new Serreria(posicionX, posicionY);
                serreria.y = serreria.y - serreria.alto / 2;
                if (!this.colisionaPropiedad(serreria) && !this.colisionaTropas(serreria)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoSerreriaOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoSerreriaMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoSerreriaMadera.valor;
                    this.propiedadesAliadas.push(serreria);
                    this.espacio.agregarCuerpoEstatico(serreria);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
        }
    }

    colisionaPropiedad(objeto) {
        for (var i = 0; i < this.propiedadesAliadas.length; i++) {
            if (objeto.colisiona(this.propiedadesAliadas[i])) {
                alert("Ya hay una propiedad en esa zona, colocalo en otra");
                return true;
            }
        }

        return false;

    }

    colisionaTropas(objeto) {
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            if (objeto.colisiona(this.tropasAliadas[i])) {
                alert("Ya hay una tropa en esa zona, colocala en otra");
                return true;
            }
        }

        return false;

    }

    generarSiguienteCompraEnemiga() {
        var calle = parseInt(Math.random() * 6);
        var xEnemigo = this.anchoMapa - 100;
        var yEnemigo = this.getYFromCalle(calle);

        if (this.enemigo.isTropaSiguiente) {
            switch (this.enemigo.siguienteCompra) {
                case 0:
                    if (this.enemigo.comprobarRecursos(costeEspadachin)) {
                        var animaciones = {
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_arquero_enemigo_ataque,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_arquero_enemigo_mover,
                                frames: 4
                            }
                        };
                        var espadachin = new Espadachin(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(espadachin);
                        this.espacio.agregarCuerpoDinamico(espadachin);
                        this.enemigo.decrementarRecursos(costeEspadachin);
                    }
                    break;
                case 1:
                    if (this.enemigo.comprobarRecursos(costeArquero)) {
                        var animaciones = {
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_arquero_enemigo_ataque,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_arquero_enemigo_mover,
                                frames: 4
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
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_lancero_enemigo_ataque,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_lancero_enemigo_mover,
                                frames: 4
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
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_caballero_enemigo_ataque_izquierda,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_caballero_enemigo_izquierda,
                                frames: 4
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
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_catapulta_aliada_ataque,
                                frames: 5
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_catapulta_aliada_mover,
                                frames: 4
                            },
                        };
                        var catapulta = new Catapulta(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(catapulta);
                        this.espacio.agregarCuerpoDinamico(catapulta);
                        this.enemigo.decrementarRecursos(costeCatapulta);
                    }
                    break;
                case 5:
                    if (this.enemigo.comprobarRecursos(costeRey)) {
                        var animaciones = {
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_rey_enemigo_ataque_izquierda,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_rey_enemigo_izquierda,
                                frames: 4
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
                        this.propiedadesEnemigas.push(ayuntamiento);
                        this.espacio.agregarCuerpoEstatico(ayuntamiento);
                        this.enemigo.decrementarRecursos(costeAyuntamientoDinero, costeAyuntamientoHierro, costeAyuntamientoMadera);
                    }
                    break;
                case 1:
                    if (this.enemigo.comprobarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera)) {
                        var cuartel = new Cuartel(xEnemigo, yEnemigo);
                        this.propiedadesEnemigas.push(cuartel);
                        this.espacio.agregarCuerpoEstatico(cuartel);
                        this.enemigo.cuarteles++;
                        this.enemigo.decrementarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera);
                    }
                    break;
                case 2:
                    if (this.enemigo.comprobarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera)) {
                        var mina = new Mina(xEnemigo, yEnemigo);
                        this.propiedadesEnemigas.push(mina);
                        this.espacio.agregarCuerpoEstatico(mina);
                        this.enemigo.decrementarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera);
                    }
                    break;
                case 3:
                    if (this.enemigo.comprobarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera)) {
                        var serreria = new Serreria(xEnemigo, yEnemigo);
                        this.propiedadesEnemigas.push(serreria);
                        this.espacio.agregarCuerpoEstatico(serreria);
                        this.enemigo.decrementarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera);
                    }
                    break;
                case 4:
                    if (this.enemigo.comprobarRecursos(costeBarreraDinero, costeBarreraHierro, costeBarreraMadera)) {
                        var barrera = new Barrera(xEnemigo, yEnemigo);
                        this.propiedadesEnemigas.push(barrera);
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