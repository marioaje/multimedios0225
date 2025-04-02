
//Eventos de click

document.getElementById("botonAccion").addEventListener("click", function(){
    alert("Salvando datos");
})

document.getElementById("contendor").addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
})

document.getElementById("contendor").addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
})


document.addEventListener("keydown", function(event){
    //alert("Tecla " + event.key );
    console.log("Tecla " + event.key );
})


document.getElementById("nombreDatos").addEventListener("input", function(event){
    //alert("Tecla " + event.target.value );
    console.log("Tecla " + event.target.value );
})


//Presionar tecla
//Pasar curso encima de un texto
