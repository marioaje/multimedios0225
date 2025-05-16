<?php

    //echo "Procesando datos";

    //print_r($_POST);
    //echo $_POST['nombre'];
    echo "<br>";
    $arregloErrores = [];
    //echo $_SERVER['REQUEST_METHOD'];
    if (  $_SERVER['REQUEST_METHOD'] == "POST"){
           
           
           
           if ( empty($_POST['nombre'])){
                echo "<br>";
                $arregloErrores[] = " El nombre es obligatorio";
           }else{
                //Procesamos los dats
                //echo htmlentities( $_POST['nombre'] );
                echo "<br>";
                $nombre =  htmlentities ( htmlspecialchars( $_POST['nombre'] ) );
           }

        if ( empty($_POST['edad'])){
                echo "<br>";
                $arregloErrores[] = " La edad es obligatorio";
           }else{
                //Procesamos los dats
                $edad =  htmlentities ( htmlspecialchars( $_POST['edad'] ) );
           }

            if ( empty($_POST['correo'])){
                echo "<br>";
                $arregloErrores[] = " El correo es obligatorio";
           }
           elseif ( !filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)) {
            # code...
                $arregloErrores[] = " El correo no tiene el formato obligatorio";
           }
           else{
                //Procesamos los dats
                $correo =  htmlentities ( htmlspecialchars( $_POST['correo'] ) );
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