<?php

    require_once __DIR__.'/../controller/ClientesController.php';


    $controller = new ClientesController();

    $datos = $controller->obtenerDatos();

    print_r($datos);

?>