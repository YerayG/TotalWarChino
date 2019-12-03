class Mapa{

    constructor() {
        this.pulsado = false;
    }

    contienePunto(pX, pY){
        if ( pY > 320*0.07+ 42/2 &&
            pY < 320*0.975 - 27/2 &&
            pX <480 &&
            pX >0){
            return true;
        }
        return false;
    }

}
