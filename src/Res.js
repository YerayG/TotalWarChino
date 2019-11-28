// Lista re recursos a precargar
var imagenes = {
    fondo: "res/fondo.png",
    icono_vidas: "res/icono_vidas.png",
    icono_recolectable: "res/icono_recolectable.png",
    fondo_2: "res/fondo_2.png",
    bloque_tierra: "res/bloque_tierra.png",
    bloque_metal: "res/bloque_metal.png",
    bloque_fondo_muro: "res/bloque_fondo_muro.png",
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

    animacion_rey_aliado_ataque_abajo = "res/rey_aliado/Animacion-Rey-B-Atq-Abj.png",
    animacion_rey_aliado_ataque_arriba = "res/rey_aliado/Animacion-Rey-B-Atq-Arr.png",
    animacion_rey_aliado_ataque_derecha = "res/rey_aliado/Animacion-Rey-B-Atq-Eral.png",
    animacion_rey_aliado_ataque_izquierda = "res/rey_aliado/Animacion-Rey-B-Atq-Lat.png",
    animacion_rey_aliado_abajo = "res/rey_aliado/Animacion-Rey-B-Est-Abj.png",
    animacion_rey_aliado_arriba = "res/rey_aliado/Animacion-Rey-B-Est-Arr.png",
    animacion_rey_aliado_derecha = "res/rey_aliado/Animacion-Rey-B-Est-Eral.png",
    animacion_rey_aliado_izquierda = "res/rey_aliado/Animacion-Rey-B-Est-Lat.png",

    animacion_rey_enemigo_ataque_abajo = "res/rey_enemigo/Animacion-Rey-M-Atq-Abj.png",
    animacion_rey_enemigo_ataque_arriba = "res/rey_enemigo/Animacion-Rey-M-Atq-Arr.png",
    animacion_rey_enemigo_ataque_derecha = "res/rey_enemigo/Animacion-Rey-M-Atq-Eral.png",
    animacion_rey_enemigo_ataque_izquierda = "res/rey_enemigo/Animacion-Rey-M-Atq-Lat.png",
    animacion_rey_enemigo_abajo = "res/rey_enemigo/Animacion-Rey-M-Est-Abj.png",
    animacion_rey_enemigo_arriba = "res/rey_enemigo/Animacion-Rey-M-Est-Arr.png",
    animacion_rey_enemigo_derecha = "res/rey_enemigo/Animacion-Rey-M-Est-Eral.png",
    animacion_rey_enemigo_izquierda = "res/rey_enemigo/Animacion-Rey-M-Est-Lat.png",

    animacion_caballero_aliado_ataque_abajo = "res/caballero_azul/Animacion-Azul-Atq-Abj.png",
    animacion_caballero_aliado_ataque_arriba = "res/caballero_azul/Animacion-Cab-Azul-Atq-Arr.png",
    animacion_caballero_aliado_ataque_derecha = "res/caballero_azul/Animacion-Cab-Atq-Eral.png",
    animacion_caballero_aliado_ataque_izquierda = "res/caballero_azul/Animacion-Cab-Atq-Lat.png",
    animacion_caballero_aliado_abajo = "res/caballero_azul/Animacion-Caballero-Est.png",
    animacion_caballero_aliado_arriba = "res/caballero_azulo/Animacion-Cab-Azul-Est-Arr.png",
    animacion_caballero_aliado_derecha = "res/caballero_azul/Animacion-Caballero-Azul-Est-Eral.png",
    animacion_caballero_aliado_izquierda = "res/caballero_azul/Animacion-Cab-Azul-Est-Lat.png",

    animacion_caballero_enemigo_ataque_abajo = "res/caballero_negro/Animacion-Cab-N-Atq-Abj.png",
    animacion_caballero_enemigo_ataque_arriba = "res/caballero_negro/Animacion-Cab-N-Atq-Arr.png",
    animacion_caballero_enemigo_ataque_derecha = "res/caballero_negro/Animacion-Cab-N-Atq-Eral.png",
    animacion_caballero_enemigo_ataque_izquierda = "res/caballero_negro/Animacion-Cab-N-Atq-Lat.png",
    animacion_caballero_enemigo_abajo = "res/caballero_negro/Animacion-Cab-N-Est-Abj.png",
    animacion_caballero_enemigo_arriba = "res/caballero_negro/Animacion-Cab-N-Est-Arr.png",
    animacion_caballero_enemigo_derecha = "res/caballero_negro/Animacion-Cab-N-Est-Eral.png",
    animacion_caballero_enemigo_izquierda = "res/caballero_negro/Animacion-Cab-N-Est-Lat.png"

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