<?php
header('Content-Type: application/json');

include "country_list.php";

$resp=array();
foreach($countries as $cc => $name) {
    array_push($resp,array('value' => $cc, 'name' => $name));
}
echo json_encode($resp);
?>