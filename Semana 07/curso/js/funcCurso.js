import {
    CursoModel
} from "../model/CursoModel.js";

const URLAPI = 'https://paginas-web-cr.com/Api/apis/';
const lista = 'ListaCurso.php';
const crea = 'InsertarCursos.php';
const actualiza = 'ActualizarCursos.php';
const elimina = 'BorrarCursos.php';

const mensajeCompletado = `
<div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
          >
              <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
              ></button>
              <strong>Proceso</strong> Exitoso!!!
          </div>`;

const mensajeEliminar = `
<div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
          >
              <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
              ></button>
              <strong>Eliminacion</strong> Exitosa!!!
          </div>`;

$(document).ready(function () {
    obtenerDatos();

    $("#formualCrear").submit(function (e) { 
        e.preventDefault();
        crearCursos();
    });


    $("#formualEditar").submit(function (e) { 
        e.preventDefault();
        actualizarCursos();
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     obtenerDatos();


//     document.getElementById('formualCrear').addEventListener('submit', (eventos) => {
//         eventos.preventDefault();
//         crearCursos();
//     })

//     document.getElementById('formualEditar').addEventListener('submit', (eventos) => {
//         eventos.preventDefault();
//         actualizarCursos();
//     })

    
//     document.getElementById('formualEliminar').addEventListener('submit', (eventos) => {
//         eventos.preventDefault();
//         eliminarCursos();
//     })


    


// });


function obtenerDatos() {


    // fetch(`${URLAPI}${lista}`, {
    //         method: 'POST'
    //     })
    //     .then(response => response.json())
    //     .then(
    //         data => datosTabla(data.data)
    //     )
    //     .catch(error => console.error(error));

        $.ajax({
            type: "POST",
            url: `${URLAPI}${lista}`,            
            dataType: "json",
            beforeSend: function(){
                let variableMensaje = `  <button
                class="btn btn-warning"
                type="button"
                disabled
              >
                <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
              </button>`;

              $("#mensajes").html(variableMensaje);



            },
            success: function (response) {
                console.log(response);
                datosTabla(response.data);
                $("#mensajes").html("");
            },
            error: function ( xhr, status, error){

                const mensajeEliminar = `
                    <div
                                class="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                                <strong>Error: </strong> ${error} <br>
                                <strong>status: </strong> ${status} <br>
                                <strong>xhr: </strong> ${xhr} <br>
                            </div>`;
                            
                    $("#mensajes").html(mensajeEliminar);
                    
            }
            
            
        });

}

function datosTabla(data) {
   // console.log(data);
    //$(selector).html(htmlString);
    // const datostabla = document.getElementById('datostabla');
    // datostabla.innerHTML = '';

    const $datostabla = $("#datostabla");
    $datostabla.empty();

    data.forEach(element => {

        //     id, nombre, descripcion, tiempo, usuario
        let fila = `
                     <tr class="">
                         <td scope="row">${element.id}</td>
                         <td>${element.nombre}</td>
                         <td>${element.descripcion}</td>
                         <td>${element.tiempo}</td>
                         <td>${element.usuario}</td>
                            <td>                    
                                <a
                                    name=""
                                    id=""
                                    class="btn btn-danger"
                                    onclick="eliminarCursos(${element.id})"
                                    role="button"
                                    >Eliminar</a
                                >
                                
                                --- 
                                <a
                                    name=""
                                    id=""
                                    class="btn btn-primary"
                                    onclick="editarCursos(${element.id},'${element.nombre}','${element.descripcion}','${element.tiempo}','${element.usuario}')"
                                    role="button"
                                    >Editar</a
                                >
                                

                            </td>
                     </tr>        
                 `;
    //$(selector).html(htmlString);
       // datostabla.innerHTML += fila;
       $datostabla.append(fila);
    });

}


function crearCursos() {
    alert("Creando curso");
    // const nombre = document.getElementById('nombre').value;
    // const descripcion = document.getElementById('descripcion').value;
    // const tiempo = document.getElementById('tiempo').value;

    const nombre = $("#nombre").val();
    const descripcion = $("#descripcion").val();
    const tiempo = $("#tiempo").val();

    const usuario = 'Prof Jimenez';

    const nuevoDato = new CursoModel(null, nombre, descripcion, tiempo, usuario);



    $.ajax({
        type: "POST",
        url: `${URLAPI}${crea}`,     
        data: JSON.stringify(nuevoDato),
        contentType: 'application/json',
        dataType: "json",
        beforeSend: function(){
            let variableMensaje = `<button
            class="btn btn-warning"
            type="button"
            disabled
          >
            <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            Loading...
          </button>`;

          $("#mensajes").html(variableMensaje);
        },
        success: function (response) {
            console.log(response);
            finalzarCrear(response.data);
            $("#mensajes").html("");
        },
        error: function ( xhr, status, error){

            const mensajeEliminar = `
                <div
                            class="alert alert-danger alert-dismissible fade show"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                            <strong>Error: </strong> ${error} <br>
                            <strong>status: </strong> ${status} <br>
                            <strong>xhr: </strong> ${xhr} <br>
                        </div>`;
                        
                $("#mensajes").html(mensajeEliminar);
                
        }
        
        
    });

    // fetch(`${URLAPI}${crea}`, {
    //         method: 'POST',
    //         body: JSON.stringify(nuevoDato)
    //     })
    //     .then(response => response.json())
    //     .then(
    //         data => finalzarCrear(data)
    //     )
    //     .catch(error => console.error(error))

}


function finalzarCrear(data) {
    obtenerDatos();

    // const mensajes = document.getElementById('mensajes');
    // mensajes.innerHTML = mensajeCompletado;
    $("#mensajes").html(mensajeCompletado);

    $('#formualCrear')[0].reset();

    // const modalCrear = bootstrap.Modal.getInstance(document.getElementById('modalCrear'));
    // modalCrear.hide();

    $("#modalCrear").modal('hide');
}

window.editarCursos = (id, nombre, descripcion, tiempo, usuario) => {

    // document.getElementById('ideditar').value = id;
    // document.getElementById('nombreeditar').value = nombre;
    // document.getElementById('descripcioneditar').value = descripcion;
    // document.getElementById('tiempoeditar').value = tiempo;
    // document.getElementById('usuarioeditar').value = usuario;

    $("#ideditar").val(id);
    $("#nombreeditar").val(nombre);
    $("#descripcioneditar").val(descripcion);
    $("#tiempoeditar").val(tiempo);
    $("#usuarioeditar").val(usuario);

    // const modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));

    // modalEditar.show();
    $("#modalEditar").modal("show");

}

function actualizarCursos() { 

//    const id = document.getElementById('ideditar').value; 
//    const nombre = document.getElementById('nombreeditar').value;
//    const descripcion = document.getElementById('descripcioneditar').value ;
//    const tiempo = document.getElementById('tiempoeditar').value;
//    const usuario = document.getElementById('usuarioeditar').value;

        const id = $("#ideditar").val();
        const nombre =$("#nombreeditar").val();
        const descripcion =$("#descripcioneditar").val();
        const tiempo =$("#tiempoeditar").val();
        const usuario =$("#usuarioeditar").val();

   const nuevoDato = new CursoModel(id, nombre, descripcion, tiempo, usuario);

   
   $.ajax({
    type: "POST",
    url: `${URLAPI}${actualiza}`,     
    data: JSON.stringify(nuevoDato),
    contentType: 'application/json',
    dataType: "json",
    beforeSend: function(){
        let variableMensaje = `  <button
        class="btn btn-warning"
        type="button"
        disabled
      >
        <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
        ></span>
        Loading...
      </button>`;

      $("#mensajes").html(variableMensaje);
    },
    success: function (response) {
        console.log(response);
        finalzarActualizar(response.data);
        $("#mensajes").html("");
    },
    error: function ( xhr, status, error){

        const mensajeEliminar = `
            <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                        <strong>Error: </strong> ${error} <br>
                        <strong>status: </strong> ${status} <br>
                        <strong>xhr: </strong> ${xhr} <br>
                    </div>`;
                    
            $("#mensajes").html(mensajeEliminar);
            
    }
    
    
});

//    fetch(`${URLAPI}${actualiza}`, {
//            method: 'POST',
//            body: JSON.stringify(nuevoDato)
//        })
//        .then(response => response.json())
//        .then(
//            data => finalzarActualizar(data)
//        )
//        .catch(error => console.error(error))
}


 function finalzarActualizar(data){
    obtenerDatos();

    // const mensajes = document.getElementById('mensajes');
    // mensajes.innerHTML = mensajeCompletado;
    $("#mensajes").html(mensajeCompletado);

    // const modalEditar = bootstrap.Modal.getInstance(document.getElementById('modalEditar'));
    // modalEditar.hide();

    $("#modalEditar").modal("hide");
 }


 window.eliminarCursos = (id) => {

    document.getElementById('ideliminar').value = id;


    const modalEliminar = new bootstrap.Modal(document.getElementById('modalEliminar'));

    modalEliminar.show();

}



function eliminarCursos(){
    
   const id = document.getElementById('ideliminar').value; 
  
   fetch(`${URLAPI}${elimina}`, {
           method: 'POST',
           body: JSON.stringify({id: id})
       })
       .then(response => response.json())
       .then(
           data => finalzarEliminaar(data)
       )
       .catch(error => console.error(error))
}

function finalzarEliminaar(){
    obtenerDatos();

    const mensajes = document.getElementById('mensajes');
    mensajes.innerHTML = mensajeEliminar;

    const modalEliminar = bootstrap.Modal.getInstance(document.getElementById('modalEliminar'));

    modalEliminar.hide();    
}