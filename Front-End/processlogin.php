<?php

session_start();
//process the login for website

$u2 = $_POST["user"];
$p2 = $_POST["password"];

if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $mysqli = new mysqli("127.0.0.1","root","","mca");
}else{
    $mysqli = new mysqli("195.35.59.14","u121755072_cohick","+05Ouz%9","u121755072_cohickdb");
}

if($mysqli -> connect_errno){
    echo "Failed to connect to My SQL : ". $mysqli->connect_error;
    exit;
}
$sql= "SELECT * from users
where username='{$u2}' and password='{$p2}";
// $sql= "SELECT * from users
// where username='{$u}' and bestpassword=SHA2(CONCAT('{$p}','freak'),224)";

// $result = $mysqli -> query($sql);
// $rows = $result -> fetch_all(MYSQLI_ASSOC);


//  if(is_array($rows) && array_key_exists(0,$rows) && $rows[0]["approved"]==1){

//     $_SESSION["LoggedIn"]="YES";
//     $_SESSION["coins"]=100;
//     $_SESSION["UserID"]=$u2;
//     header("location:../projects.htm");
// }else{
//     $_SESSION["LoggedIn"]="NO";
//     $_SESSION["coins"]=0;
//     $_SESSION["UserID"]="";
//     header("location:../index.htm?message=Incorrect username or password.");
// }


// ?>


<br>