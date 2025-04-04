function guardar(){
    const clase =   document.getElementById("clase").value;
    const accesorrios = document.getElementById("accesorrios").value;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;


    let instrumento = {
        clase: clase,
        accesorrios : accesorrios,
        nombre : nombre,
        precio : precio
    }
    

    console.log(instrumento);

    const jsonObjeto = JSON.stringify(instrumento);

}