class GameLayer extends Layer {


    constructor() {
        super();
        this.iniciar();

    }


    iniciar() {
        this.scrollX = 0;

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


        this.fondoMonedas = new Fondo(imagenes.icono_monedas, 480 * 0.885, 320 * 0.05);
        this.fondoHierro = new Fondo(imagenes.icono_hierro, 480 * 0.74, 320 * 0.06);
        this.fondoMadera = new Fondo(imagenes.icono_madera, 480 * 0.59, 320 * 0.05);

        this.hierro = new Texto(0, 480 * 0.78, 320 * 0.06);
        this.oro = new Texto(0, 480 * 0.92, 320 * 0.06);
        this.madera = new Texto(0, 480 * 0.63, 320 * 0.06);


        //botones tropas
        this.botonArquero = new Boton(imagenes.boton_arquero, 480 * 0.20, 320 * 0.94);
        this.botonEspadachin = new Boton(imagenes.boton_espadachin, 480 * 0.05, 320 * 0.94);
        this.botonLancero = new Boton(imagenes.boton_lancero, 480 * 0.35, 320 * 0.94);
        this.botonCaballero = new Boton(imagenes.boton_caballero, 480 * 0.50, 320 * 0.94);
        this.botonRey = new Boton(imagenes.boton_rey, 480 * 0.65, 320 * 0.94);
        this.botonCatapulta = new Boton(imagenes.boton_catapulta, 480 * 0.80, 320 * 0.94);
        this.botonBarrera = new Boton(imagenes.boton_barrera, 480 * 0.95, 320 * 0.94);

        //botones edificios
        this.botonAyuntamiento = new Boton(imagenes.boton_Ayuntamiento, 480 * 0.1, 320 * 0.07);
        this.botonMina = new Boton(imagenes.boton_Mina, 480 * 0.23, 320 * 0.07);
        this.botonSerreria = new Boton(imagenes.boton_Serreria, 480 * 0.36, 320 * 0.07);
        this.botonCuartel = new Boton(imagenes.boton_Cuartel, 480 * 0.49, 320 * 0.07);


        //coste tropas
        this.textoEspadachin = new TextoOro(costeEspadachin, 480 * 0.065, 320 * 0.975);
        this.textoArquero = new TextoOro(costeArquero, 480 * 0.22, 320 * 0.975);
        this.textoLancero = new TextoOro(costeLancero, 480 * 0.370, 320 * 0.975);
        this.textoCaballero = new TextoOro(costeCaballero, 480 * 0.515, 320 * 0.975);
        this.textoRey = new TextoOro(costeRey, 480 * 0.665, 320 * 0.975);
        this.textoCatapulta = new TextoOro(costeCatapulta, 480 * 0.820, 320 * 0.975);
        this.textoBarrera = new TextoMadera(costeBarreraMadera, 480 * 0.965, 320 * 0.975);

        //coste Edificios
        this.textoAyuntamientoOro = new TextoOro(costeAyuntamientoDinero, 480 * 0.13, 320 * 0.06);
        this.textoAyuntamientoMadera = new TextoMadera(costeAyuntamientoMadera, 480 * 0.13, 320 * 0.09);
        this.textoAyuntamientoHierro = new TextoHierro(costeAyuntamientoHierro, 480 * 0.13, 320 * 0.12);

        this.textoMinaOro = new TextoOro(costeMinaDinero, 480 * 0.266, 320 * 0.06);
        this.textoMinaMadera = new TextoMadera(costeMinaMadera, 480 * 0.266, 320 * 0.09);
        this.textoMinaHierro = new TextoHierro(costeMinaHierro, 480 * 0.266, 320 * 0.12);

        this.textoSerreriaOro = new TextoOro(costeSerreriaDinero, 480 * 0.399, 320 * 0.06);
        this.textoSerreriaMadera = new TextoMadera(costeSerreriaMadera, 480 * 0.399, 320 * 0.09);
        this.textoSerreriaHierro = new TextoHierro(costeSerreriaHierro, 480 * 0.399, 320 * 0.12);

        this.textoCuartelOro = new TextoOro(costeCuartelDinero, 480 * 0.529, 320 * 0.06);
        this.textoCuartelMadera = new TextoMadera(costeCuartelMadera, 480 * 0.529, 320 * 0.09);
        this.textoCuartelHierro = new TextoHierro(costeSerreriaHierro, 480 * 0.529, 320 * 0.12);

        this.cargarMapa("res/" + nivelActual + ".txt");

        this.baseAliada = new Base(30, 150, this.altoMapa / 2);
        this.baseEnemiga = new Base(this.anchoMapa - 30, this.altoMapa / 2);

        //this.obstaculos.push(new Obstaculo(400, 180));
    }

    actualizar() {
        //Actualiza en el mapa el dinero , madera y hierro del jugador
        this.oro.valor = this.jugador.dinero;
        this.madera.valor = this.jugador.madera;
        this.hierro.valor = this.jugador.hierro;

        console.log(this.jugador.cuarteles);

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].actualizar();
        }

        for (var i = 0; i < this.tropasAliadas.length; i++) {
            this.tropasAliadas[i].actualizar();
        }

        //Esquivar obstáculos
        for (var i = 0; i < this.obstaculos.length; i++) {
            for (var j = 0; j < this.tropasAliadas.length; j++) {
                if (this.tropasAliadas[j].obstaculoDelante(this.obstaculos[i])) {
                    this.tropasAliadas[j].esquivar(this.obstaculos[i]);
                } else {
                    this.tropasAliadas[j].dejarDeEsquivar();
                }
            }

            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (this.tropasEnemigas[j].obstaculoDelante(this.obstaculos[i])) {
                    this.tropasEnemigas[j].esquivar(this.obstaculos[i]);
                } else {
                    this.tropasEnemigas[j].dejarDeEsquivar();
                }
            }
        }

        //Esquivar propiedades
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            for (var j = 0; j < this.propiedadesAliadas.length; j++) {
                if (!this.tropasAliadas[i].esquivando) {
                    if (this.tropasAliadas[i].obstaculoDelante(this.propiedadesAliadas[j])) {
                        this.tropasAliadas[i].esquivar(this.propiedadesAliadas[j]);
                    } else {
                        this.tropasAliadas[i].dejarDeEsquivar();
                    }
                }
            }

            for (var j = 0; j < this.barrerasAliadas.length; j++) {
                if (!this.tropasAliadas[i].esquivando) {
                    if (this.tropasAliadas[i].obstaculoDelante(this.barrerasAliadas[j])) {
                        this.tropasAliadas[i].esquivar(this.barrerasAliadas[j]);
                    } else {
                        this.tropasAliadas[i].dejarDeEsquivar();
                    }
                }
            }
        }

        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (!this.tropasEnemigas[j].esquivando) {
                    if (this.tropasEnemigas[j].obstaculoDelante(this.propiedadesEnemigas[i])) {
                        this.tropasEnemigas[j].esquivar(this.propiedadesEnemigas[i]);
                    } else {
                        this.tropasEnemigas[j].dejarDeEsquivar();
                    }
                }
            }
        }


        //Generar recursos
        this.jugador.generarRecursos(this.propiedadesAliadas);
        this.enemigo.generarRecursos(this.propiedadesEnemigas);

        //Generar algo enemigo
        this.enemigo.decidirSiguiente(this.tropasEnemigas, this.propiedadesEnemigas);
        this.generarSiguienteCompraEnemiga();


        //Atacar (tropasAliadas)
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            for (var j = 0; j < this.tropasEnemigas.length; j++) {
                if (this.tropasAliadas[i].enRango(this.tropasEnemigas[j]) && this.tropasAliadas[i].mismaCalle(this.tropasEnemigas[j])) {
                    this.tropasAliadas[i].moverseHacia(this.tropasEnemigas[j].y);
                    this.tropasAliadas[i].atacar(this.tropasEnemigas[j]);
                    this.tropasEnemigas[j].checkVida();
                }
                if (this.tropasEnemigas[j].enRango(this.tropasAliadas[i]) && this.tropasEnemigas[j].mismaCalle(this.tropasAliadas[i])) {
                    this.tropasEnemigas[j].moverseHacia(this.tropasAliadas[i].y);
                    this.tropasEnemigas[j].atacar(this.tropasAliadas[i]);
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

            //Si están en la base enemiga, moverse hacia ella o atacarla
            if (this.baseEnemiga != undefined) {
                if (this.tropasAliadas[i].x > this.anchoMapa - 300) {
                    this.tropasAliadas[i].moverseHacia(this.baseEnemiga.y);
                }
                if (this.tropasAliadas[i].enRango(this.baseEnemiga) && this.tropasAliadas[i].mismaCalle(this.baseEnemiga)) {
                    this.tropasAliadas[i].atacar(this.baseEnemiga);
                    if (this.baseEnemiga.vida <= 0) {
                        this.ganarLayer = new GanarLayer();
                        layer = this.ganarLayer;

                        setInterval(loop, 1000 / 30);
                    }
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

            if (this.baseAliada != undefined) {
                if (this.tropasEnemigas[i].x < 300) {
                    this.tropasEnemigas[i].moverseHacia(this.baseAliada.y);
                }
                if (this.tropasEnemigas[i].enRango(this.baseAliada) && this.tropasEnemigas[i].enRango(this.baseAliada)) {
                    this.tropasEnemigas[i].atacar(this.baseAliada);
                    if (this.baseAliada.vida <= 0) {
                        this.perderLayer = new PerderLayer();
                        layer = this.perderLayer;

                        setInterval(loop, 1000 / 30);
                    }
                }
            }
        }


        // Tropas muertas fuera del juego
        for (var i = 0; i < this.tropasAliadas.length; i++) {
            if (this.tropasAliadas[i] != null &&
                this.tropasAliadas[i].estado == estados.muerto) {

                this.tropasAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            if (this.tropasEnemigas[i] != null &&
                this.tropasEnemigas[i].estado == estados.muerto) {

                this.tropasEnemigas.splice(i, 1);
                i = i - 1;
            }
        }

        //Propiedades y barreras destruidas fuera del juego
        for (var i = 0; i < this.propiedadesAliadas.length; i++) {
            if (this.propiedadesAliadas[i] != null && this.propiedadesAliadas[i].isDestruido()) {
                this.propiedadesAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.barrerasAliadas.length; i++) {
            if (this.barrerasAliadas[i] != null && this.barrerasAliadas[i].isDestruido()) {
                this.barrerasAliadas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            if (this.propiedadesEnemigas[i] != null && this.propiedadesEnemigas[i].isDestruido()) {
                this.propiedadesEnemigas.splice(i, 1);
                i = i - 1;
            }
        }

        for (var i = 0; i < this.barrerasEnemigas.length; i++) {
            if (this.barrerasEnemigas[i] != null && this.barrerasEnemigas[i].isDestruido()) {
                this.barrerasEnemigas.splice(i, 1);
                i = i - 1;
            }
        }
    }

    dibujar() {
        this.fondo.dibujar();

        for (var i = 0; i < this.bloques.length; i++) {
            this.bloques[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.propiedadesAliadas.length; i++) {
            this.propiedadesAliadas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            this.propiedadesEnemigas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.obstaculos.length; i++) {
            this.obstaculos[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.barrerasEnemigas; i++) {
            this.barrerasEnemigas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.barrerasAliadas.length; i++) {
            this.barrerasAliadas[i].dibujar(this.scrollX);
        }

        this.baseAliada.dibujar(this.scrollX);
        this.baseEnemiga.dibujar(this.scrollX);

        for (var i = 0; i < this.tropasEnemigas.length; i++) {
            this.tropasEnemigas[i].dibujar(this.scrollX);
        }

        for (var i = 0; i < this.tropasAliadas.length; i++) {
            this.tropasAliadas[i].dibujar(this.scrollX);
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
        this.botonBarrera.dibujar();

        //coste dibujar
        this.textoArquero.dibujar();
        this.textoEspadachin.dibujar();
        this.textoLancero.dibujar();
        this.textoCaballero.dibujar();
        this.textoRey.dibujar();
        this.textoCatapulta.dibujar();
        this.textoBarrera.dibujar();

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
            this.altoMapa = lineas.length * 32;
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
        if (controles.back) {
            this.scrollX = 0;
        }

    }

    cargarObjetoMapa(simbolo, x, y) {
        switch (simbolo) {
            case '.':
                var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                break;
            case "O":
                var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                var obstaculo = new Obstaculo(x, y);
                obstaculo.y = obstaculo.y - obstaculo.alto / 2;
                this.obstaculos.push(obstaculo);
                break;
            case "*":
                var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                bloque.y = bloque.y - bloque.alto / 2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                var bandera = new Bloque(imagenes.bandera, x, y);
                bandera.y = bandera.y - bandera.alto / 2;
                this.bloques.push(bandera);
                break;
            case "A":
                var base = new Base(x, y);
                base.y = base.y - base.alto / 2;
                this.baseAliada = base;
                break;
            case "V":
                var base = new Base(x, y);
                base.y = base.y - base.alto / 2;
                this.baseEnemiga = base;
                break;
        }
    }

    calcularPulsaciones(pulsaciones) {
        for (var i = 0; i < pulsaciones.length; i++) {

            if (this.botonEspadachin.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonEspadachin.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoEspadachin.valor) {
                        alert("NECESITAS" + "\n" + costeEspadachin + " oro");
                    } else {
                        this.jugador.siguienteCompra = 1;
                    }
                }
            }
            if (this.botonArquero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonArquero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoArquero.valor || this.jugador.cuarteles < 1) {
                        alert("NECESITAS" + "\n" + costeArquero + " oro y 1 cuartel");
                    } else {
                        this.jugador.siguienteCompra = 2;
                    }
                }
            }
            if (this.botonLancero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonLancero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoLancero.valor || this.jugador.cuarteles < 2) {
                        alert("NECESITAS" + "\n" + costeLancero + " oro y 2 cuarteles");
                    } else {
                        this.jugador.siguienteCompra = 3;
                    }
                }
            }
            if (this.botonCaballero.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCaballero.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCaballero.valor || this.jugador.cuarteles < 3) {
                        alert("NECESITAS" + "\n" + costeCaballero + " oro y 3 cuarteles");
                    } else {
                        this.jugador.siguienteCompra = 4;
                    }
                }
            }
            if (this.botonRey.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonRey.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoRey.valor || this.jugador.cuarteles < 5) {
                        alert("NECESITAS" + "\n" + costeRey + " oro y 5 cuarteles");
                    } else {
                        this.jugador.siguienteCompra = 5;
                    }
                }
            }

            if (this.botonCatapulta.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCatapulta.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCatapulta.valor || this.jugador.cuarteles < 4) {
                        alert("NECESITAS" + "\n" + costeCatapulta + " oro y 4 cuarteles");
                    } else {
                        this.jugador.siguienteCompra = 6;
                    }
                }
            }

            if (this.botonBarrera.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonBarrera.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoBarrera.valor) {
                        alert("NECESITAS" + "\n" + costeBarreraDinero + " oro");
                    } else {
                        this.jugador.siguienteCompra = 11;
                    }
                }
            }

            if (this.botonAyuntamiento.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonAyuntamiento.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoAyuntamientoOro.valor || this.jugador.madera < this.textoAyuntamientoMadera.valor || this.jugador.hierro < this.textoAyuntamientoHierro.valor) {
                        alert("NECESITAS" + "\n"+ costeAyuntamientoDinero + " oro" + "\n" + costeAyuntamientoMadera + " madera" + "\n" + costeAyuntamientoHierro + " hierro");
                    } else {
                        this.jugador.siguienteCompra = 7;
                    }
                }
            }
            if (this.botonCuartel.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonCuartel.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoCuartelOro.valor || this.jugador.madera < this.textoCuartelMadera.valor || this.jugador.hierro < this.textoCuartelHierro.valor) {
                        alert("NECESITAS" + "\n" + costeCuartelDinero + " oro" + "\n" + costeCuartelMadera + " madera" + "\n" + costeCuartelHierro + " hierro");
                    } else {
                        this.jugador.siguienteCompra = 8;
                    }
                }
            }
            if (this.botonMina.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonMina.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoMinaOro.valor || this.jugador.madera < this.textoMinaMadera.valor || this.jugador.hierro < this.textoMinaHierro.valor) {
                        alert("NECESITAS" + "\n" + costeMinaDinero + " oro" + "\n" + costeMinaMadera + " madera" + "\n" + costeMinaHierro + " hierro");
                    } else {
                        this.jugador.siguienteCompra = 9;
                    }
                }
            }
            if (this.botonSerreria.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.botonSerreria.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if (this.jugador.dinero < this.textoSerreriaOro.valor || this.jugador.madera < this.textoSerreriaMadera.valor || this.jugador.hierro < this.textoSerreriaHierro.valor) {
                        alert("NECESITAS" + "\n" + costeSerreriaDinero + " oro" + "\n" + costeSerreriaMadera + " madera" + "\n" + costeSerreriaHierro + " hierro");
                    } else {
                        this.jugador.siguienteCompra = 10;
                    }
                }
            }

            if (this.mapa.contienePunto(pulsaciones[i].x, pulsaciones[i].y)) {
                this.mapa.pulsado = true;
                if (pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    var posicionX = pulsaciones[i].x;
                    var posicionY = pulsaciones[i].y;
                    //Solo se puede colocar al principio del mapa
                    if (posicionX + this.scrollX <= 480) {
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
                        imagenSrc: imagenes.animacion_caballero_aliado_ataque_derecha,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_caballero_aliado_derecha,
                        frames: 4
                    }
                };
                var espadachin = new Espadachin(posicionX, posicionY, true, animaciones);
                if (!this.colisionaPropiedad(espadachin)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoEspadachin.valor;
                    this.tropasAliadas.push(espadachin);
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
                //arquero.y = arquero.y - arquero.alto / 2;
                if (!this.colisionaPropiedad(arquero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoArquero.valor;
                    this.tropasAliadas.push(arquero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 3:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_lancero_aliado_ataque,
                        frames: 4
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_lancero_aliado_mover,
                        frames: 4
                    }
                };
                var lancero = new Lancero(posicionX, posicionY, true, animaciones);
                if (!this.colisionaPropiedad(lancero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoLancero.valor;
                    this.tropasAliadas.push(lancero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 4:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_caballero_enemigo_ataque_derecha,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_caballero_enemigo_derecha,
                        frames: 4
                    }
                };
                var caballero = new Caballero(posicionX, posicionY, true, animaciones);
                if (!this.colisionaPropiedad(caballero)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCaballero.valor;
                    this.tropasAliadas.push(caballero);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 5:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_rey_aliado_ataque_derecha,
                        frames: 7
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_rey_aliado_derecha,
                        frames: 4
                    }
                };
                var rey = new Rey(posicionX, posicionY, true, animaciones);
                if (!this.colisionaPropiedad(rey)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoRey.valor;
                    this.tropasAliadas.push(rey);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 6:
                var animaciones = {
                    animacion_atacar: {
                        imagenSrc: imagenes.animacion_catapulta_aliada_ataque,
                        frames: 4
                    },
                    animacion_mover: {
                        imagenSrc: imagenes.animacion_catapulta_aliada_mover,
                        frames: 5
                    }
                };
                var catapulta = new Catapulta(posicionX, posicionY, true, animaciones);
                if (!this.colisionaPropiedad(catapulta)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCatapulta.valor;
                    this.tropasAliadas.push(catapulta);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 7:
                var ayuntamiento = new Ayuntamiento(posicionX, posicionY);
                if (!this.colisionaPropiedad(ayuntamiento) && !this.colisionaTropas(ayuntamiento)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoAyuntamientoOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoAyuntamientoMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoAyuntamientoHierro.valor;
                    this.propiedadesAliadas.push(ayuntamiento);
                    this.jugador.siguienteCompra = 0;
                }
                break;
            case 8:
                var cuartel = new Cuartel(posicionX, posicionY);
                if (!this.colisionaPropiedad(cuartel) && !this.colisionaTropas(cuartel)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoCuartelOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoCuartelMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoCuartelHierro.valor;
                    this.propiedadesAliadas.push(cuartel);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 9:
                var mina = new Mina(posicionX, posicionY);
                if (!this.colisionaPropiedad(mina) && !this.colisionaTropas(mina)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoMinaOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoMinaMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoMinaHierro.valor;
                    this.propiedadesAliadas.push(mina);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 10:
                var serreria = new Serreria(posicionX, posicionY);
                if (!this.colisionaPropiedad(serreria) && !this.colisionaTropas(serreria)) {
                    this.jugador.dinero = this.jugador.dinero - this.textoSerreriaOro.valor;
                    this.jugador.madera = this.jugador.madera - this.textoSerreriaMadera.valor;
                    this.jugador.hierro = this.jugador.hierro - this.textoSerreriaMadera.valor;
                    this.propiedadesAliadas.push(serreria);
                    this.jugador.siguienteCompra = 0;
                    break;
                }
            case 11:
                var barrera = new Barrera(posicionX, posicionY);
                if (!this.colisionaPropiedad(barrera) && !this.colisionaTropas(barrera)) {
                    this.jugador.madera = this.jugador.madera - this.textoBarrera.valor;
                    this.barrerasAliadas.push(barrera);
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
        for (var i = 0; i < this.barrerasAliadas.length; i++) {
            if (objeto.colisiona(this.barrerasAliadas[i])) {
                alert("Ya hay una barrera en esa zona, colocalo en otra");
                return true;
            }
        }

        return false;
    }

    colisionaPropiedadEnemiga(objeto) {
        for (var i = 0; i < this.propiedadesEnemigas.length; i++) {
            if (objeto.colisiona(this.propiedadesEnemigas[i])) {
                return true;
            }
        }
        for (var i = 0; i < this.barrerasEnemigas.length; i++) {
            if (objeto.colisiona(this.barrerasEnemigas[i])) {
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
        if (this.enemigo.decidido) {
            var xEnemigo = this.anchoMapa - parseInt(Math.random() * 480);
            var yEnemigo = parseInt(Math.random() * (this.altoMapa - 50) + 25);
        }

        if (this.enemigo.isTropaSiguiente) {
            switch (this.enemigo.siguienteCompra) {
                case 0:
                    if (this.enemigo.comprobarRecursos(costeEspadachin)) {
                        var animaciones = {
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_espadachin_enemigo_atacar,
                                frames: 7
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_espadachin_enemigo_mover,
                                frames: 4
                            }
                        };
                        var espadachin = new Espadachin(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(espadachin);
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
                        this.enemigo.decrementarRecursos(costeArquero);
                    }
                    break;
                case 2:
                    if (this.enemigo.comprobarRecursos(costeLancero)) {
                        var animaciones = {
                            animacion_atacar: {
                                imagenSrc: imagenes.animacion_lancero_enemigo_ataque,
                                frames: 4
                            },
                            animacion_mover: {
                                imagenSrc: imagenes.animacion_lancero_enemigo_mover,
                                frames: 4
                            },
                        };
                        var lancero = new Lancero(xEnemigo, yEnemigo, false, animaciones);
                        this.tropasEnemigas.push(lancero);
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
                        if (!this.colisionaPropiedadEnemiga(ayuntamiento)) {
                            this.propiedadesEnemigas.push(ayuntamiento);
                            this.enemigo.decrementarRecursos(costeAyuntamientoDinero, costeAyuntamientoHierro, costeAyuntamientoMadera);
                        } else {
                            this.enemigo.decidido = false;
                        }
                    }
                    break;
                case 1:
                    if (this.enemigo.comprobarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera)) {
                        var cuartel = new Cuartel(xEnemigo, yEnemigo);
                        if (!this.colisionaPropiedadEnemiga(cuartel)) {
                            this.propiedadesEnemigas.push(cuartel);
                            this.enemigo.cuarteles++;
                            this.enemigo.decrementarRecursos(costeCuartelDinero, costeCuartelHierro, costeCuartelMadera);
                        } else {
                            this.enemigo.decidido = false;
                        }
                    }
                    break;
                case 2:
                    if (this.enemigo.comprobarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera)) {
                        var mina = new Mina(xEnemigo, yEnemigo);
                        if (!this.colisionaPropiedadEnemiga(mina)) {
                            this.propiedadesEnemigas.push(mina);
                            this.enemigo.decrementarRecursos(costeMinaDinero, costeMinaHierro, costeMinaMadera);
                        } else {
                            this.enemigo.decidido = false;
                        }
                    }
                    break;
                case 3:
                    if (this.enemigo.comprobarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera)) {
                        var serreria = new Serreria(xEnemigo, yEnemigo);
                        if (!this.colisionaPropiedadEnemiga(serreria)) {
                            this.propiedadesEnemigas.push(serreria);
                            this.enemigo.decrementarRecursos(costeSerreriaDinero, costeSerreriaHierro, costeSerreriaMadera);
                        } else {
                            this.enemigo.decidido = false;
                        }
                    }
                    break;
                case 4:
                    if (this.enemigo.comprobarRecursos(costeBarreraDinero, costeBarreraHierro, costeBarreraMadera)) {
                        var barrera = new Barrera(xEnemigo, yEnemigo);
                        if (!this.colisionaPropiedadEnemiga(barrera)) {
                            this.barrerasEnemigas.push(barrera);
                            this.enemigo.decrementarRecursos(costeBarreraDinero, costeBarreraHierro, costeBarreraMadera);
                        } else {
                            this.enemigo.decidido = false;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
}