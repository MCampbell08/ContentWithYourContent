<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';

    session_start(); // session is still live with all info
    
    $query = "select title, shown from pages union select title, shown from sub_pages";

    $result = $mysqli->query($query);

    $json_array = array();

    $num_results = $result->num_rows;

    if( $num_results > 0){ 
        while( $row = $result->fetch_assoc() ){
            $json_array[] = $row;
        }
    }
    //disconnect from database

    $result->free();
    $mysqli->close();
    
    echo json_encode(array($json_array));
    ?>  


