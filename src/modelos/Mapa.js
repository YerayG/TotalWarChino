class Mapa{

    constructor() {
        this.pulsado = false;
    }

    contienePunto(pX, pY){
        return pY > 50 && pY < 280 && pX <480 && pX > 0;

    }


}
