class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.scrollX = 0;
        this.espacio = new Espacio(1);

        this.bloques = [];

        this.fondo = new Fondo(imagenes.fondo,480*0.5,320*0.5);

        this.enemigos = [];

        this.obstaculos=[];

        this.propiedades=[];

        this.fondoMonedas = new Fondo(imagenes.icono_monedas, 480*0.92,320*0.05);
        this.fondoHierro = new Fondo(imagenes.icono_hierro, 480*0.80,320*0.05);
        this.fondoMadera = new Fondo(imagenes.icono_madera, 480*0.68,320*0.05);


        this.disparosJugador = [];
        this.hierro = new Texto(0,480*0.85,320*0.07 );
        this.dinero = new Texto(0,480*0.97,320*0.07 );
        this.madera = new Texto(0,480*0.73,320*0.07 );

        this.botonSalto = new Boton(imagenes.boton_salto,480*0.9,320*0.55);
        this.botonDisparo = new Boton(imagenes.boton_disparo,480*0.75,320*0.83);

        this.pad = new Pad(480*0.14,320*0.8);

        //botones tropas
        this.botonArquero = new Boton(imagenes.boton_arquero,480*0.25,320*0.94 );
        this.botonEspadachin = new Boton(imagenes.boton_espadachin,480*0.1,320*0.94);
        this.botonLancero = new Boton(imagenes.boton_lancero,480*0.40,320*0.94);
        this.botonCaballero = new Boton(imagenes.boton_caballero,480*0.55,320*0.94);
        this.botonRey = new Boton(imagenes.boton_rey,480*0.70,320*0.94);
        this.botonCatapulta = new Boton(imagenes.boton_catapulta,480*0.85,320*0.94);

        //botones edificios
        this.botonAyuntamiento = new Boton(imagenes.boton_Ayuntamiento,480*0.1,320*0.07);
        this.botonMina = new Boton(imagenes.boton_Mina,480*0.23,320*0.07);
        this.botonSerreria = new Boton(imagenes.boton_Serreria,480*0.36,320*0.07);
        this.botonCuartel = new Boton(imagenes.boton_Cuartel,480*0.49,320*0.07);

        //coste tropas
        this.costeEspadachin = new Texto2("20" ,480*0.115,320*0.975 );
        this.costeArquero = new Texto2("20" ,480*0.27,320*0.975 );
        this.costeLancero = new Texto2("60" ,480*0.415,320*0.975 );
        this.costeCaballero = new Texto2("60" ,480*0.565,320*0.975 );
        this.costeRey = new Texto2("60" ,480*0.715,320*0.975 );
        this.costeCatapulta = new Texto2("60" ,480*0.868,320*0.975 );

        //coste Edificios
        this.costeAyuntamiento1 = new Texto2("120" ,480*0.13,320*0.06);
        this.costeAyuntamiento2 = new Texto3("120" ,480*0.13,320*0.09);
        this.costeAyuntamiento3 = new Texto4("200" ,480*0.13,320*0.12);

        this.costeMina1 = new Texto2("120" ,480*0.263,320*0.06);
        this.costeMina2 = new Texto3("120" ,480*0.263,320*0.09);
        this.costeMina3 = new Texto4("200" ,480*0.263,320*0.12);

        this.costeSerreria1 = new Texto2("120" ,480*0.393,320*0.06);
        this.costeSerreria2 = new Texto3("120" ,480*0.393,320*0.09);
        this.costeSerreria3 = new Texto4("200" ,480*0.393,320*0.12);

        this.costeCuartel1 = new Texto2("120" ,480*0.523,320*0.06);
        this.costeCuartel2 = new Texto3("120" ,480*0.523,320*0.09);
        this.costeCuartel3 = new Texto4("200" ,480*0.523,320*0.12);

        this.cargarMapa("res/"+nivelActual+".txt");
    }

    actualizar (){
        this.espacio.actualizar();
        console.log("disparosJugador: "+this.disparosJugador.length);
        // Eliminar disparos fuera de pantalla
        for (var i=0; i < this.disparosJugador.length; i++){
            if ( this.disparosJugador[i] != null &&
                !this.disparosJugador[i].estaEnPantalla()){

                this.espacio
                    .eliminarCuerpoDinamico(this.disparosJugador[i]);

                this.disparosJugador.splice(i, 1);
                i=i-1;
            }
        }


        // Jugador se cae
        if ( this.jugador.y > 480 ){
            this.iniciar();
        }

        this.jugador.actualizar();
        // Eliminar disparos sin velocidad
        for (var i=0; i < this.disparosJugador.length; i++){
            if ( this.disparosJugador[i] != null &&
                this.disparosJugador[i].vx == 0){

                this.espacio
                    .eliminarCuerpoDinamico(this.disparosJugador[i]);
                this.disparosJugador.splice(i, 1);
            }
        }

        for (var i=0; i < this.enemigos.length; i++){
            this.enemigos[i].actualizar();
        }
        for (var i=0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].actualizar();
        }

        // colisiones
        for (var i=0; i < this.enemigos.length; i++){
            if ( this.jugador.colisiona(this.enemigos[i])){
                this.jugador.golpeado();
                if (this.jugador.vidas <= 0){
                    this.iniciar();
                }
            }
        }
        // colisiones , disparoJugador - Enemigo
        for (var i=0; i < this.disparosJugador.length; i++){
            for (var j=0; j < this.enemigos.length; j++){
                if (this.disparosJugador[i] != null &&
                    this.enemigos[j] != null &&
                    this.disparosJugador[i].colisiona(this.enemigos[j])) {

                    this.espacio
                        .eliminarCuerpoDinamico(this.disparosJugador[i]);

                    this.disparosJugador.splice(i, 1);
                    i = i-1;
                    this.enemigos[j].impactado();
                    this.dinero.valor++;
                }
            }
        }

        // Enemigos muertos fuera del juego
        for (var j=0; j < this.enemigos.length; j++){
            if ( this.enemigos[j] != null &&
                this.enemigos[j].estado == estados.muerto  ) {

                this.espacio
                    .eliminarCuerpoDinamico(this.enemigos[j]);

                this.enemigos.splice(j, 1);
                j = j-1;
            }
        }
    }

    calcularScroll(){
        // limite izquierda
        if ( this.jugador.x > 480 * 0.3) {
            if (this.jugador.x - this.scrollX < 480 * 0.3) {
                this.scrollX = this.jugador.x - 480 * 0.3;
            }
        }

        // limite derecha
        if ( this.jugador.x < this.anchoMapa - 480 * 0.3 ) {
            if (this.jugador.x - this.scrollX > 480 * 0.7) {
                this.scrollX = this.jugador.x - 480 * 0.7;
            }
        }
    }

    dibujar (){
        this.calcularScroll();
        this.fondo.dibujar();

        for (var i=0; i < this.bloques.length; i++){
            this.bloques[i].dibujar(this.scrollX);
        }

        for (var i=0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].dibujar(this.scrollX);
        }

        this.jugador.dibujar(this.scrollX);
        for (var i=0; i < this.enemigos.length; i++){
            this.enemigos[i].dibujar(this.scrollX);
        }

        this.fondoMonedas.dibujar();
        this.fondoHierro.dibujar();
        this.fondoMadera.dibujar();

        this.dinero.dibujar();
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
        this.costeArquero.dibujar();
        this.costeEspadachin.dibujar();
        this.costeLancero.dibujar();
        this.costeCaballero.dibujar();
        this.costeRey.dibujar();
        this.costeCatapulta.dibujar();

        //coste edificios
        this.costeAyuntamiento1.dibujar();
        this.costeAyuntamiento2.dibujar();
        this.costeAyuntamiento3.dibujar();

        this.costeMina1.dibujar();
        this.costeMina2.dibujar();
        this.costeMina3.dibujar();

        this.costeSerreria1.dibujar();
        this.costeSerreria2.dibujar();
        this.costeSerreria3.dibujar();

        this.costeCuartel1.dibujar();
        this.costeCuartel2.dibujar();
        this.costeCuartel3.dibujar();


        // HUD

        if ( !this.pausa && entrada == entradas.pulsaciones) {
            this.botonDisparo.dibujar();
            this.botonSalto.dibujar();
            this.pad.dibujar();
        }
    }



    procesarControles( ){
        // disparar
        if (  controles.disparo ){
            var nuevoDisparo = this.jugador.disparar();
            if ( nuevoDisparo != null ) {
                this.espacio.agregarCuerpoDinamico(nuevoDisparo);
                this.disparosJugador.push(nuevoDisparo);
            }
        }

        // Eje X
        if ( controles.moverX > 0 ){
            this.jugador.moverX(1);

        }else if ( controles.moverX < 0){
            this.jugador.moverX(-1);

        } else {
            this.jugador.moverX(0);
        }

        // Eje Y
        if ( controles.moverY > 0 ){
            //this.jugador.moverY(-1);
            this.jugador.saltar();

        } else if ( controles.moverY < 0 ){
            //this.jugador.moverY(1);

        } else {
            //this.jugador.moverY(0);
        }

    }

    cargarMapa(ruta){
        var fichero = new XMLHttpRequest();
        fichero.open("GET", ruta, false);

        fichero.onreadystatechange = function () {
            var texto = fichero.responseText;
            var lineas = texto.split('\n');
            this.anchoMapa = (lineas[0].length-1) * 40;
            for (var i = 0; i < lineas.length; i++){
                var linea = lineas[i];
                for (var j = 0; j < linea.length; j++){
                    var simbolo = linea[j];
                    var x = 40/2 + j * 40; // x central
                    var y = 32 + i * 32; // y de abajo
                    this.cargarObjetoMapa(simbolo,x,y);
                }
            }
        }.bind(this);

        fichero.send(null);
    }

    cargarObjetoMapa(simbolo, x, y){
        switch(simbolo) {
            case "M":
                var mina = new Mina(x,y);
                mina.y = mina.y - mina.alto/2;
                // modificación para empezar a contar desde el suelo
                this.propiedades.push(mina);
                this.espacio.agregarCuerpoDinamico(mina);
                break;
            case "B":
                var barrera = new Barrera(x,y);
                barrera.y = barrera.y - barrera.alto/2;
                // modificación para empezar a contar desde el suelo
                this.obstaculos.push(barrera);
                this.espacio.agregarCuerpoEstatico(barrera);
                break;

            case "T":
                var torre = new Torre(x,y);
                torre.y = torre.y - torre.alto/2;
                // modificación para empezar a contar desde el suelo
                this.obstaculos.push(torre);
                this.espacio.agregarCuerpoEstatico(torre);
                break;

            case "1":
                this.jugador = new Jugador(x, y);
                // modificación para empezar a contar desde el suelo
                this.jugador.y = this.jugador.y - this.jugador.alto/2;
                this.espacio.agregarCuerpoDinamico(this.jugador);
                break;


            case "#":
                var bloque = new Bloque(imagenes.bloque_tierra, x,y);
                bloque.y = bloque.y - bloque.alto/2;
                // modificación para empezar a contar desde el suelo
                this.bloques.push(bloque);
                this.espacio.agregarCuerpoEstatico(bloque);
                break;

            case "C":
                this.copa = new BloqueAntiguo(imagenes.copa, x,y);
                this.copa.y = this.copa.y - this.copa.alto/2;
                // modificación para empezar a contar desde el suelo
                this.espacio.agregarCuerpoDinamico(this.copa);
                break;


            case "E":
                var enemigo = new Nave(x,y);
                enemigo.y = enemigo.y - enemigo.alto/2;
                // modificación para empezar a contar desde el suelo
                this.enemigos.push(enemigo);
                this.espacio.agregarCuerpoDinamico(enemigo);
                break;

        }
    }

    calcularPulsaciones(pulsaciones){
        // Suponemos botones no estan pulsados
        this.botonDisparo.pulsado = false;
        this.botonSalto.pulsado = false;
        this.botonAyuntamiento.pulsado = false;
        // suponemos que el pad está sin tocar
        controles.moverX = 0;

        for(var i=0; i < pulsaciones.length; i++){
            if (this.pad.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                var orientacionX = this.pad.obtenerOrientacionX(pulsaciones[i].x);
                if ( orientacionX > 20) { // de 0 a 20 no contabilizamos
                    controles.moverX = orientacionX;
                }
                if ( orientacionX < -20) { // de -20 a 0 no contabilizamos
                    controles.moverX = orientacionX;
                }
            }

            if (this.botonDisparo.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                this.botonDisparo.pulsado = true;
                if ( pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    controles.disparo = true;
                }
            }

            if (this.botonSalto.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                this.botonSalto.pulsado = true;
                if ( pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    controles.moverY = 1;
                }
            }
            if (this.botonAyuntamiento.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                this.botonAyuntamiento.pulsado = true;
                if ( pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    if(this.jugador.dinero<120 || this.jugador.madera<120|| this.jugador.hierro<200){
                        alert("NECESITAS"+ "\n"+"120 oro" + "\n" + "120 madera" + "\n" + " 200 hierro");
                    }
                    else{
                        this.jugador.dinero=this.jugador.dinero-120;
                        this.jugador.madera=this.jugador.madera-120;
                        this.jugador.hierro=this.jugador.hierro-200;



                    }
                }
            }

        }

        // No pulsado - Boton Disparo
        if ( !this.botonDisparo.pulsado ){
            controles.disparo = false;
        }

        // No pulsado - Boton Salto
        if ( !this.botonSalto.pulsado ){
            controles.moverY = 0;
        }
    }

}
