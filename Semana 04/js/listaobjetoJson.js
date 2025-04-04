let listastringJsonObjeto = 
`[
    {"clase": "Cuerda", "accesorrios" : "tiene", "nombre" : "tambor", "precio" : 30000},
    {"clase": "Cuerda", "accesorrios" : "tiene", "nombre" : "guitarra", "precio" : 30000},
    {"clase": "Viento", "accesorrios" : "tiene", "nombre" : "faluta", "precio" : 30000}
]
`
;

console.log (listastringJsonObjeto);
console.log(JSON.parse(listastringJsonObjeto));

function cargar(){
    let listaInstrumentos = JSON.parse(listastringJsonObjeto);


    let elemtntweb = document.getElementById('datostabla');

    listaInstrumentos.forEach(element => {
        console.log(element.clase);
        let fila  = `
            <tr class="">
                <td scope="row">${element.clase}</td>
                <td>${element.accesorrios}</td>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
            </tr>        
        `;

        elemtntweb.innerHTML += fila;

    });

    //datostabla


    console.log(listaInstrumentos);
}