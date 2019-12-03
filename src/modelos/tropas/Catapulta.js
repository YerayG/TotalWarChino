class Catapulta extends Tropa {
  
    constructor(x, y, aliado) {
        var imagen, vx, rango;
        if(aliado) {
            //imagen = imagenes.catapulta;
            vx = 1;
            rango = 300;
        } else {
            //imagen = imagenes.catapultaEnemiga;
            vx = -1;
            rango = -300
        }

        var cadenciaAtaque = 200, vida = 300, damage = 200;

        super(x, y, vx, cadenciaAtaque, rango, vida, damage, imagen);
    }

    actualizar() {
        super.actualizar();
    }
}