<?php

require_once __DIR__.'/../misc/Conexion.php';
require_once __DIR__.'/../models/Clientes.php';



class ClientesDAO{

    private $pdo;

    public function __construct(){
        $this->pdo = Conexion::conectar();
    }


    public function obtenerDatos(){
        $stmt = $this->pdo->query("Select * from clientes");

        $result = [];

        while ($row = $stmt->fetch((PDO::FETCH_ASSOC))){
            $result[] = new Clientes($row['id'], $row['nombre'], $row['apellidos'], $row['telefono']);
        }

        return $result;

    }















}


?>