<!-- clave k&9W>hnC/X
u484426513_ms225
 MySQL es: srv863.hstgr.io o puede usar esta IP como tu nombre de host: 45.88.196.5 -->


 <!-- ocupamos un string -->


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


try {
    $conexion = Conexion::conectar();
    echo "Conectados a mysql";


}
catch(Exception $ex){
    echo "Error al conectar base ded datos: ". $ex->getMessage();
}

?>