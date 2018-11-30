<?php 
	header("Access-Control-Allow-Origin: *");

    @session_start();

    $arr = array();

    $arr[] = $_SESSION['login_user'];
    $arr[] = $_SESSION['login_pass'];
    $arr[] = $_SESSION['login_role'];
    
    echo json_encode($arr);
?>