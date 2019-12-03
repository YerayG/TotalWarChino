class TextoHierro {

    constructor(valor, x, y) {
        this.valor = valor;
        this.x = x;
        this.y = y;
    }

    dibujar (){
        contexto.font = "7px Arial";
        contexto.fillStyle = "#646464";
        contexto.textAlign = "left";
        contexto.fillText(this.valor,this.x,this.y);
    }

}
