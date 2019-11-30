class Enemigo extends Modelo {

    constructor(x, y) {
        super(imagenes.enemigo, x, y);

        this.madera = 0;
        this.dinero = 0;
        this.hierro = 0;
        this.cuarteles = 0;

        this.estado = estados.moviendo;

        this.vxInteligencia = -1;
        this.vx = this.vxInteligencia;

        this.aMover = new Animacion(imagenes.enemigo_movimiento,
            this.ancho, this.alto, 6, 3);
        this.aMorir = new Animacion(imagenes.enemigo_morir,
            this.ancho,this.alto,6,8, this.finAnimacionMorir.bind(this));

        // Ref a la animación actual
        this.animacion = this.aMover;

        this.vy = 0;
    }

    actualizar (){
        this.animacion.actualizar();

        switch (this.estado){
            case estados.moviendo:
                this.animacion = this.aMover;
                break;
            case estados.muriendo:
                this.animacion = this.aMorir;
                break;
        }

        if ( this.estado == estados.muriendo) {
            this.vx = 0;
        } else {
            if ( this.vx == 0){
                this.vxInteligencia = this.vxInteligencia * -1;
                this.vx = this.vxInteligencia;
            }
        }
    }

    dibujar (scrollX){
        scrollX = scrollX || 0;
        this.animacion.dibujar(this.x - scrollX, this.y);
    }


    finAnimacionMorir(){
        this.estado = estados.muerto;
    }

    impactado(){
        if ( this.estado != estados.muriendo ){
            this.estado = estados.muriendo;
        }
    }

    generarRecursos(propiedades) {
        for(var i = 0; i < propiedades.length; i++) {
            propiedades[i].generarPara(this);
        }
    }
}
