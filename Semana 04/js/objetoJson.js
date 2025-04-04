let instrumento = {
    clase: "Cuerda",
    accesorrios : "tiene",
    nombre : "tambor",
    precio : 30000
}

let jsoninstrumento = JSON.stringify(instrumento);

let stringJsonObjeto = '{clase: "Cuerda", accesorrios : "tiene", nombre : "tambor", precio : 30000}';

function cargarDatos(){
    console.log(instrumento);
    console.log(jsoninstrumento);

    let jsoninstrumentoObjeto = JSON.parse(jsoninstrumento);

    let estructuraweb =     `<ul>
                                <li>${jsoninstrumentoObjeto.clase}</li>
                                <li>${jsoninstrumentoObjeto.accesorrios}</li>
                                <li>${jsoninstrumentoObjeto.nombre}</li>
                                <li>${jsoninstrumentoObjeto.precio}</li>
                            </ul>` ;


    document.getElementById("clase").value = jsoninstrumentoObjeto.clase;
    document.getElementById("accesorrios").value = jsoninstrumentoObjeto.accesorrios;
    document.getElementById("nombre").value = jsoninstrumentoObjeto.nombre;
    document.getElementById("precio").value = jsoninstrumentoObjeto.precio;


    document.getElementById("resultadodatos").innerHTML = estructuraweb;
}