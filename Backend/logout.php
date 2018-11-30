<?php 
	header("Access-Control-Allow-Origin: *");

    @session_destroy();
    
    echo json_encode(null);
?>