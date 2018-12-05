<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';
    
    $user;
    $pass;
    
    if( isset($_GET['user'])) {
		$user = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_URL);
	}
    if( isset($_GET['pass'])) {
		$pass = password_hash(filter_input(INPUT_GET, 'pass', FILTER_SANITIZE_URL), PASSWORD_BCRYPT);
	}

    $query = "insert into users (user_name, pass, role)
    VALUES ('".$user."', '".$pass."', 'user')";

    $result = $mysqli->query($query);



    //disconnect from database

    $mysqli->close();
    
    echo $result;
?>