<?php

    //echo "Procesando datos";

    //print_r($_GET);
    //echo $_GET['nombre'];
    echo "<br>";
    $arregloErrores = [];
    //echo $_SERVER['REQUEST_METHOD'];
    if (  $_SERVER['REQUEST_METHOD'] == "GET"){
           
           
           
           if ( empty($_GET['nombre'])){
                echo "<br>";
                $arregloErrores[] = " El nombre es obligatorio";
           }else{
                //Procesamos los dats
                //echo htmlentities( $_GET['nombre'] );
                echo "<br>";
                $nombre =  htmlentities ( htmlspecialchars( $_GET['nombre'] ) );
           }

        if ( empty($_GET['edad'])){
                echo "<br>";
                $arregloErrores[] = " La edad es obligatorio";
           }else{
                //Procesamos los dats
                $edad =  htmlentities ( htmlspecialchars( $_GET['edad'] ) );
           }

            if ( empty($_GET['correo'])){
                echo "<br>";
                $arregloErrores[] = " El correo es obligatorio";
           }
           elseif ( !filter_var($_GET['correo'], FILTER_VALIDATE_EMAIL)) {
            # code...
                $arregloErrores[] = " El correo no tiene el formato obligatorio";
           }
           else{
                //Procesamos los dats
                $correo =  htmlentities ( htmlspecialchars( $_GET['correo'] ) );
           }


           if (empty($arregloErrores)){
                echo "Procesando datos";
                echo "<h2>Procesando la informacion</h2>";
                echo "<br> $nombre";
                echo "<br> $edad";
                echo "<br> $correo";
           }
           else{
                foreach ($arregloErrores as $item) {
                        echo "<p> $item </p>";
                    # code...
                }
           }





    }
    else{
        echo "No Procesando datos";
    }

?>