<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';
    
    $title;
    $content;
    ini_set("allow_url_fopen", 1);

    echo "json_decode(file_get_contents('php://input'))";
    
    // if(isset($_GET['title'])) {
	// 	$title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_URL);
    // }
    // if(isset($_GET['content'])) {
	// 	$content = filter_input(INPUT_GET, 'content', FILTER_SANITIZE_URL);
    // }

    // $query = "update pages set content = '".$content."' where title = '".$title.".html'";

    // $result = $mysqli->query($query);

    // $query = "update sub_pages set content = '".$content."' where title = '".$title.".html'";

    // $result = $mysqli->query($query);

    //disconnect from database

    // $mysqli->close();
    
    // echo $result;
?>