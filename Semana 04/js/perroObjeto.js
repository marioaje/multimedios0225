//Atirbutos?
// color
// raza
// tamnho
// nombre
class perroObjeto{
    constructor( color, raza, tamnho, nombre){
        this.color = color;
        this.raza = raza;
        this.nombre = nombre;
        this.tamnho = tamnho;
    }

    //get
    obtenerColor(){
        return this.color;
    }

    obtenerraza(){
        return this.raza;
    }

    obtenernombre(){
        return this.nombre;
    }

    obtenertamnho(){
        return this.tamnho;
    }

    ajustarcolor(color){
        this.color = color;
    }

    ajustarraza(raza){
        this.raza= raza;
    }

    ajustarnombre(nombre){
        this.nombre = nombre;
    }

    ajustartamnho(tamnho){
        this.tamnho = tamnho;
    }

    ///que va aca?
}