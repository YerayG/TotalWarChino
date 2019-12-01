// Lista re recursos a precargar
var imagenes = {
    jugador: "res/jugador.png",
    fondo: "res/fondo.png",
    enemigo: "res/enemigo.png",
    enemigo_movimiento: "res/enemigo_movimiento.png",
    disparo_jugador: "res/disparo_jugador.png",
    disparo_jugador_2: "res/disparo_jugador2.png",
    disparo_enemigo: "res/disparo_enemigo.png",
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

    animacion_rey_aliado_ataque_abajo = "res/rey_aliado/Animación-Rey-B-Atq-Abj.png",
    animacion_rey_aliado_ataque_arriba = "res/rey_aliado/Animación-Rey-B-Atq-Arr.png",
    animacion_rey_aliado_ataque_derecha = "res/rey_aliado/Animación-Rey-B-Atq-Eral.png",
    animacion_rey_aliado_ataque_izquierda = "res/rey_aliado/Animación-Rey-B-Atq-Lat.png",
    animacion_rey_aliado_abajo = "res/rey_aliado/Animación-Rey-B-Est-Abj.png",
    animacion_rey_aliado_arriba = "res/rey_aliado/Animación-Rey-B-Est-Arr.png",
    animacion_rey_aliado_derecha = "res/rey_aliado/Animación-Rey-B-Est-Eral.png",
    animacion_rey_aliado_izquierda = "res/rey_aliado/Animación-Rey-B-Est-Lat.png",

    animacion_rey_enemigo_ataque_abajo = "res/rey_enemigo/Animación-Rey-M-Atq-Abj.png",
    animacion_rey_enemigo_ataque_arriba = "res/rey_enemigo/Animación-Rey-M-Atq-Arr.png",
    animacion_rey_enemigo_ataque_derecha = "res/rey_enemigo/Animación-Rey-M-Atq-Eral.png",
    animacion_rey_enemigo_ataque_izquierda = "res/rey_enemigo/Animación-Rey-M-Atq-Lat.png",
    animacion_rey_enemigo_abajo = "res/rey_enemigo/Animación-Rey-M-Est-Abj.png",
    animacion_rey_enemigo_arriba = "res/rey_enemigo/Animación-Rey-M-Est-Arr.png",
    animacion_rey_enemigo_derecha = "res/rey_enemigo/Animación-Rey-M-Est-Eral.png",
    animacion_rey_enemigo_izquierda = "res/rey_enemigo/Animación-Rey-M-Est-Lat.png",

    animacion_caballero_aliado_ataque_abajo = "res/caballero_azul/Animación-Azul-Atq-Abj.png",
    animacion_caballero_aliado_ataque_arriba = "res/caballero_azul/Animación-Cab-Azul-Atq-Arr.png",
    animacion_caballero_aliado_ataque_derecha = "res/caballero_azul/Animación-Cab-Atq-Eral.png",
    animacion_caballero_aliado_ataque_izquierda = "res/caballero_azul/Animación-Cab-Atq-Lat.png",
    animacion_caballero_aliado_abajo = "res/caballero_azul/Animación-Caballero-Est.png",
    animacion_caballero_aliado_arriba = "res/caballero_azulo/Animación-Cab-Azul-Est-Arr.png",
    animacion_caballero_aliado_derecha = "res/caballero_azul/Animación-Caballero-Azul-Est-Eral.png",
    animacion_caballero_aliado_izquierda = "res/caballero_azul/Animación-Cab-Azul-Est-Lat.png",

    animacion_caballero_enemigo_ataque_abajo = "res/caballero_negro/Animación-Cab-N-Atq-Abj.png",
    animacion_caballero_enemigo_ataque_arriba = "res/caballero_negro/Animación-Cab-N-Atq-Arr.png",
    animacion_caballero_enemigo_ataque_derecha = "res/caballero_negro/Animación-Cab-N-Atq-Eral.png",
    animacion_caballero_enemigo_ataque_izquierda = "res/caballero_negro/Animación-Cab-N-Atq-Lat.png",
    animacion_caballero_enemigo_abajo = "res/caballero_negro/Animación-Cab-N-Est-Abj.png",
    animacion_caballero_enemigo_arriba = "res/caballero_negro/Animación-Cab-N-Est-Arr.png",
    animacion_caballero_enemigo_derecha = "res/caballero_negro/Animación-Cab-N-Est-Eral.png",
    animacion_caballero_enemigo_izquierda = "res/caballero_negro/Animación-Cab-N-Est-Lat.png",

    caballero_azul = "res/caballero_azul/caballero_azul.png",
    caballero_negro = "res/caballero_negro/caballero_negro.png",
    rey_aliado = "res/rey_aliado/rey_aliado.png",
    rey_enemigo = "res/rey_enemigo/rey_enemigo.png",
    arquero_aliado = "res/arquero_aliado/arquero_azul.png",
    arquero_enemigo = "res/arquero_enemigo/arquero_negro.png",

    animacion_arquero_aliado_ataque = "res/arquero_aliado/Animación-Arquero-Azul-Atq-Lat.png",
    animacion_arquero_enemigo_ataque = "res/arquero_enemigo/Animación-Arquero-Negro-Atq-Lat.png"

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