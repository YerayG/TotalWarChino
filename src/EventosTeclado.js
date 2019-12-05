var teclas = [];

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

var estado=false;

function onKeyDown( event) {
    entrada = entradas.teclado;
    // agregar la tecla pulsada si no estaba
    var posicion = teclas.indexOf(event.keyCode);
    if ( posicion == -1 ) {
        teclas.push(event.keyCode);
        switch ( event.keyCode ){
            case 39:
                controles.scroll = 1;
                break;
            case 37:
                controles.scroll = -1;
                break;
            case 32:
                controles.back = 1;
                break;
            case 77:
                reproducirMusica();
                if(estado===false){
                    reproducirMusica();
                    estado=true;
                }else{
                    pararMusica();
                    estado=false;
                }
                break;
        }

    }

}

function onKeyUp( event) {
    // sacar la tecla pulsada
    var posicion = teclas.indexOf(event.keyCode);
    teclas.splice( posicion, 1);
    switch ( event.keyCode ){
        case 39:
            if ( controles.scroll == 1 ){
                controles.scroll = 0;
            }
            break;
        case 37:
            if ( controles.scroll == -1 ){
                controles.scroll = 0;
            }
            break;
        case 32:
            if(controles.back > 0) {
                controles.back = 0;
            }
            break;
    }

}
