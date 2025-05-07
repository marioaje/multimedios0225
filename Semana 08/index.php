<!-- //Que necesitamos para que sirva el php
//Ocupamos un servidor en xamp.
//El codigo del lenguage
//La extension -->
<?php
//Las variables $

$nombre = "Mario";
$edad = 40;
$estado = true;
$decimales = 1.23;



    //echo "Saludos clase";
    echo "Nombre : $nombre";


    for ($i=0; $i < 10 ; $i++) { 
        echo "Contador : $i <br>";
    }


    $a = 0;

    while ($a < 10) {
        echo "Contador While : $a <br>";
        //$a += 1;
        $a++;
        # code...
    }

    //Como hago un arreglo?
    $arreglo = ["Mario", "Isaac", "Alberto"];
    foreach ($arreglo as $key ) {
        # code...
        echo "Key : $key <br>";
    }
?>