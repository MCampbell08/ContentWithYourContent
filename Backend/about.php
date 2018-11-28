<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';
    
    $title;
    
    if(isset($_GET['about'])) {
		$title = filter_input(INPUT_GET, 'about', FILTER_SANITIZE_URL);
	}

    $query = "select * from decks where title="."'".$title."'";

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


