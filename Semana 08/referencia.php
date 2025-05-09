<?php

function add_five(&$value) {
    $value += 5;
}

$num = 2;
echo $num;
echo "<br>";
add_five($num);
echo $num;


?>