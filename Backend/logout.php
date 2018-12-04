<?php 
	header("Access-Control-Allow-Origin: *");

    @session_destroy();
    $returnedInt = 1;
    echo json_encode(array($returnedInt));
?>