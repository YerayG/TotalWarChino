// Lista re recursos a precargar
var imagenes = {
    jugador: "res/jugador.png",
    fondo: "res/fondo.png",
    enemigo: "res/enemigo.png",
    enemigo_movimiento: "res/enemigo_movimiento.png",
    disparo_jugador: "res/disparo_jugador.png",
    disparo_jugador_2: "res/disparo_jugador2.png",
    disparo_enemigo: "res/disparo_enemigo.png",
    icono_monedas: "res/monedas.png",
    icono_hierro: "res/hierro.png",
    icono_madera: "res/madera.png",
    icono_puntos: "res/icono_puntos.png",
    icono_vidas: "res/icono_vidas.png",
    icono_recolectable: "res/icono_recolectable.png",
    fondo_2: "res/fondo_2.png",
    jugador_idle_derecha: "res/jugador_idle_derecha.png",
    jugador_idle_izquierda: "res/jugador_idle_izquierda.png",
    jugador_corriendo_derecha: "res/jugador_corriendo_derecha.png",
    jugador_corriendo_izquierda: "res/jugador_corriendo_izquierda.png",
    jugador_disparando_derecha: "res/jugador_disparando_derecha.png",
    jugador_disparando_izquierda: "res/jugador_disparando_izquierda.png",
    jugador_saltando_derecha: "res/jugador_saltando_derecha.png",
    jugador_saltando_izquierda: "res/jugador_saltando_izquierda.png",
    enemigo_morir: "res/enemigo_morir.png",
    bloque_tierra: "res/bloque_tierra.png",
    bloque_metal: "res/bloque_metal.png",
    bloque_fondo_muro: "res/bloque_fondo_muro.png",
    copa: "res/copa.png",
    pad: "res/pad.png",
    boton_disparo: "res/boton_disparo.png",
    boton_arquero: "res/boton-Arquero.png",
    boton_lancero: "res/boton-Lancero.png",
    boton_rey: "res/boton-Rey.png",
    boton_catapulta: "res/boton-Catapulta.png",
    boton_espadachin: "res/boton-Espadachin.png",
    boton_caballero: "res/boton-Caballero.png",
    boton_Ayuntamiento: "res/boton-Ayuntamiento.png",
    boton_Mina: "res/boton-Mina.png",
    boton_Serreria: "res/boton-Serreria.png",
    boton_Cuartel: "res/boton-Cuartel.png",
    boton_salto: "res/boton_salto.png",
    boton_pausa: "res/boton_pausa.png",
    menu_fondo: "res/menu_fondo.png",
    boton_jugar: "res/boton_jugar.png",
    mensaje_como_jugar: "res/mensaje_como_jugar.png",
    mensaje_ganar: "res/mensaje_ganar.png",
    mensaje_perder: "res/mensaje_perder.png",
    bloque_arena: "res/Tile-Arena.jpg",
    bloque_monte: "res/Tile-Monte.png",
    bloque_hierba: "res/Tile-Hierba.jpg",
    //Dividir el tamaño de las imagenes entre 10 -> ejemplo: 400x300px --> 40x30px
    animacion_rey_aliado_ataque_abajo: "res/rey_aliado/Animacion-Rey-B-Atq-Abj.png",
    animacion_rey_aliado_ataque_arriba: "res/rey_aliado/Animacion-Rey-B-Atq-Arr.png",
    animacion_rey_aliado_ataque_derecha: "res/rey_aliado/Animacion-Rey-B-Atq-Eral.png",
    animacion_rey_aliado_ataque_izquierda: "res/rey_aliado/Animacion-Rey-B-Atq-Lat.png",
    animacion_rey_aliado_abajo: "res/rey_aliado/Animacion-Rey-B-Est-Abj.png",
    animacion_rey_aliado_arriba: "res/rey_aliado/Animacion-Rey-B-Est-Arr.png",
    animacion_rey_aliado_derecha: "res/rey_aliado/Animacion-Rey-B-Est-Eral.png",
    animacion_rey_aliado_izquierda: "res/rey_aliado/Animacion-Rey-B-Est-Lat.png",

    animacion_rey_enemigo_ataque_abajo: "res/rey_enemigo/Animacion-Rey-M-Atq-Abj.png",
    animacion_rey_enemigo_ataque_arriba: "res/rey_enemigo/Animacion-Rey-M-Atq-Arr.png",
    animacion_rey_enemigo_ataque_derecha: "res/rey_enemigo/Animacion-Rey-M-Atq-Eral.png",
    animacion_rey_enemigo_ataque_izquierda: "res/rey_enemigo/Animacion-Rey-M-Atq-Lat.png",
    animacion_rey_enemigo_arriba: "res/rey_enemigo/Animacion-Rey-M-Est.png",
    animacion_rey_enemigo_derecha: "res/rey_enemigo/Animacion-Rey-M-Est-Eral.png",
    animacion_rey_enemigo_izquierda: "res/rey_enemigo/Animacion-Rey-M-Est-Lat.png",

    animacion_caballero_aliado_ataque_abajo: "res/caballero_azul/Animacion-Azul-Atq-Abajo.png",
    animacion_caballero_aliado_ataque_arriba: "res/caballero_azul/Animacion-Cab-Azul-Atq-Arr.png",
    animacion_caballero_aliado_ataque_derecha: "res/caballero_azul/Animacion-Cab-Atq-Eral.png",
    animacion_caballero_aliado_ataque_izquierda: "res/caballero_azul/Animacion-Cab-Atq-Lat.png",
    animacion_caballero_aliado_abajo: "res/caballero_azul/Animacion-Caballero-Est.png",
    animacion_caballero_aliado_arriba: "res/caballero_azul/Animacion-Cab-Azul-Est-Arr.png",
    animacion_caballero_aliado_derecha: "res/caballero_azul/Animacion-Caballero-Azul-Est-Eral.png",
    animacion_caballero_aliado_izquierda: "res/caballero_azul/Animacion-Cab-Azul-Est-Lat.png",

    animacion_caballero_enemigo_ataque_abajo: "res/caballero_negro/Animacion-Cab-N-Atq-Abj.png",
    animacion_caballero_enemigo_ataque_arriba: "res/caballero_negro/Animacion-Cab-N-Atq-Arr-.png",
    animacion_caballero_enemigo_ataque_derecha: "res/caballero_negro/Animacion-Cab-N-Atq-Eral.png",
    animacion_caballero_enemigo_ataque_izquierda: "res/caballero_negro/Animacion-Cab-N-Atq-Lat.png",
    animacion_caballero_enemigo_abajo: "res/caballero_negro/Animacion-Cab-N-Est-Abj.png",
    animacion_caballero_enemigo_arriba: "res/caballero_negro/Animacion-Cab-N-Est-Arr.png",
    animacion_caballero_enemigo_derecha: "res/caballero_negro/Animacion-Cab-N-Est-Eral.png",
    animacion_caballero_enemigo_izquierda: "res/caballero_negro/Animacion-Cab-N-Est-Lat.png",

    caballero_aliado: "res/caballero_azul/caballero_azul.png",
    caballero_enemigo: "res/caballero_negro/caballero_negro.png",
    rey_aliado: "res/rey_aliado/rey_aliado.png",
    rey_enemigo: "res/rey_enemigo/rey_enemigo.png",
    arquero_aliado: "res/arquero_aliado/arquero_azul.png",
    arquero_enemigo: "res/arquero_enemigo/arquero_negro.png",
    lancero_aliado: "res/lancero_aliado/lancero_azul.png",
    lancero_enemigo: "res/lancero_enemigo/lancero_enemigo.png",

    animacion_arquero_aliado_ataque: "res/arquero_aliado/Animacion-Arquero-Azul-Atq-Lat.png",
    animacion_arquero_aliado_mover: "res/arquero_aliado/animacion_arquero_aliado_mover.png",

    animacion_arquero_enemigo_ataque: "res/arquero_enemigo/Animacion-Arquero-Negro-Atq-Lat.png",
    animacion_arquero_enemigo_mover: "res/arquero_enemigo/animacion_arquero_enemigo_mover.png",

    animacion_lancero_aliado_ataque: "res/lancero_aliado/animacion_lancero_aliado_ataque.png",
    animacion_lancero_aliado_mover: "res/lancero_aliado/animacion_lancero_aliado_mover.png",

    animacion_lancero_enemigo_ataque: "res/lancero_enemigo/animacion_lancero_enemigo_ataque.png",
    animacion_lancero_enemigo_mover: "res/lancero_enemigo/animacion_lancero_enemigo_mover.png",

    animacion_morir: "res/animacion_muerte.png",

    base_aliada: "res/propiedades/ayuntamiento.png",
    mina: "res/propiedades/mina.png",
    serreria: "res/propiedades/serreria.png",
    cuartel: "res/propiedades/cuartel.png"

};

var rutasImagenes = Object.values(imagenes);
cargarImagenes(0);

function cargarImagenes(indice) {
    var imagenCargar = new Image();
    imagenCargar.src = rutasImagenes[indice];
    imagenCargar.onload = function() {
        if (indice < rutasImagenes.length - 1) {
            indice++;
            cargarImagenes(indice);
        } else {
            iniciarJuego();
        }
    }
}