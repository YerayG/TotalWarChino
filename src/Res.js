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
    bloque_hierba: "res/Tile-Hierba.jpg"
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