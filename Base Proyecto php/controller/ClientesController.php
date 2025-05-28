<?php

require_once __DIR__.'/../accessoDatos/ClientesDAO.php';


class ClientesController{


    private $dao;

    public function __construct(){
        $this->dao = new ClientesDAO();
    }

    public function obtenerDatos(){
        return $this->dao->obtenerDatos();
    }


    public function obtenerPorId($id){
        return $this->dao->obtenerPorId($id);
    }
}



if ( $_SERVER['REQUEST_METHOD'] == 'POST'){
    echo "Guardando";
}

else {
    echo "usted no esta autorizado";
}



?>