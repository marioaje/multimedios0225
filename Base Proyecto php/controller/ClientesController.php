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

?>