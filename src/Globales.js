var estados = {};
estados.moviendo = 2; // Incluye parado, derecha , izquierda
estados.saltando = 3;
estados.muriendo = 4;
estados.muerto = 5;
estados.atacando = 6;
estados.impactado = 7;

var orientaciones = {};
orientaciones.derecha = 2;
orientaciones.izquierda = 3;

var nivelActual = 0;
var nivelMaximo = 0;

var pulsaciones = []; // actuales registradas

var tipoPulsacion = {}; // tipos
tipoPulsacion.inicio = 1;
tipoPulsacion.mantener = 2;

var entradas = {}; // tipos
entradas.pulsaciones = 1;
entradas.teclado = 2;
entradas.gamepad = 3;
var entrada = entradas.pulsaciones;