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


define("URLAPI", 'https://paginas-web-cr.com/Api/apis/');
const lista = 'ListaCurso.php';

echo URLAPI;
echo "<br>";
echo lista;
echo "<br>";

//palabrareservadafuncion nombre(parametros)

function saludos(){
    echo "Saludos clase";
}

function sumar($datoa, $datob){
    return $datoa + $datob;
}


saludos();
echo "<br>";
$resultado = sumar(12, 63);
echo $resultado;

echo "<br>";

echo sumar(12, 63);

echo "<br>";

$t = date("H");
if ($t < "20") {
echo "Have a good day!";
} else {
echo "Have a good night!";
}

echo "<br>";

echo ($t < "20") ? "Have a good day!" : "Have a good night!";

echo "<br>";


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