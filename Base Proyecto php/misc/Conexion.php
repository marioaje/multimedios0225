
 <?php

class Conexion {


    public static function conectar(){

        $host = "srv863.hstgr.io";
        $db = "u484426513_ms225";
        $user = "u484426513_ms225";
        $pass = "k&9W>hnC/X";
        $charset = "utf8mb4";

        $dns = "mysql:host=$host;dbname=$db;charset=$charset";

        try {

            $pdo = new PDO($dns, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        }catch( PDOException $erroesss ){
            die("Errpr al conectar: ". $erroesss->getMessage() );

        }
    }

}


// try {
//     $conexion = Conexion::conectar();
//     echo "Conectados a mysql";

//     //Si consultamos las tablas?
//     $stmt = $conexion->query("SHOW TABLES");
//     $tablas = $stmt->fetchAll(PDO::FETCH_COLUMN);

//     echo "<br> Lista de tablas";

// foreach ($tablas as $item) {
//     echo "<br>___$item";
//     # code...
// }



// }
// catch(Exception $ex){
//     echo "Error al conectar base ded datos: ". $ex->getMessage();
// }

?>