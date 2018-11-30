<?php 
	header("Access-Control-Allow-Origin: *");

    include 'dbconfig.php';
    
    $user;
    $pass;
    $role;
    
    if( isset($_GET['user'])) {
		$user = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_URL);
	}
    if( isset($_GET['pass'])) {
		$pass = filter_input(INPUT_GET, 'pass', FILTER_SANITIZE_URL);
	}

    $query = "select * from users";

    $result = $mysqli->query($query);

    $num_results = $result->num_rows;
    $json_array = array();

    if( $num_results > 0 ){ 
        while( $row = $result->fetch_assoc() ){
            if( $user == $row['user_name'] && $pass == $row['pass'] ) {
                $json_array[] = $row;
                $role = $row['role'];

                @session_start();
                $_SESSION['login_user'] = $user;
                $_SESSION['login_pass'] = $pass;
                $_SESSION['login_role'] = $role;
                session_write_close();
            }
        }
    }


    //disconnect from database

    $result->free();
    $mysqli->close();
    
    echo json_encode(array($json_array));
?>