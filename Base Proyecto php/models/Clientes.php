	<!-- #	Nombre	Tipo	Cotejamiento	Atributos	Nulo	Predeterminado	Comentarios	Extra	Acción
	1	id Primaria	int(11)			No	Ninguna		AUTO_INCREMENT	Cambiar Cambiar	Eliminar Eliminar	
	2	nombre	varchar(100)	utf8mb4_unicode_ci		No	Ninguna			Cambiar Cambiar	Eliminar Eliminar	
	3	apellidos	varchar(100)	utf8mb4_unicode_ci		No	Ninguna			Cambiar Cambiar	Eliminar Eliminar	
	4	telefono	varchar(20)	utf8mb4_unicode_ci		No	Ninguna			Cambiar Cambiar	Eliminar Eliminar	 -->



<?php

class Clientes{
    public $id ;    
    public $nombre ;
    public $apellidos ;
    public $telefono ;

    public function __construct($id, $nombre, $apellidos, $telefono){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->telefono = $telefono;
    }

}



?>