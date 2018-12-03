<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';
    
    $title;
    
    if( isset($_GET['title'])) {
		$title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_URL);
    }

    $query = "update pages set shown = 0 where title = '".$title.".html'";

    $result = $mysqli->query($query);

    $query = "update sub_pages set shown = 0 where title = '".$title.".html'";

    $result = $mysqli->query($query);

    //disconnect from database

    $mysqli->close();
    
    echo $result;
?>