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


    public function insertar(Clientes $objeto){
        return $this->dao->insertar($objeto);
    }

}



if ( $_SERVER['REQUEST_METHOD'] == 'POST'){

//necesito capturar las variables del post, lo que viene del formulario
//crear el objeto
//luego enviar el objeto 
//acceder a insertar



//     echo "Guardando";
// }

// else {
//     echo "usted no esta autorizado";
}



?>