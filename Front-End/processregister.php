<?php

// session_start();
//process the login for website

$u3 = $_POST["user3"];
$p3 = $_POST["password3"];
$e3 = $_POST["email2"];



    $mysqli = new mysqli("195.35.59.14","u121755072_starfall","pN7/kBo?aic","u121755072_starfalldb");
//$mysqli = new mysqli("127.0.0.1","root","","mca");
if($mysqli -> connect_errno){
    echo "Failed to connect to My SQL : ". $mysqli->connect_error;
    exit;
}

$sql = "INSERT INTO starfall_users
(username,password,email,approved) 
VALUES ('{$u3}',SHA2(concat('{$p3}','starfall'),224),'{$e3}',1);";


$result = $mysqli -> query($sql);
header("location:../index.php");

// echo $sql;
//  if(is_array($rows) && array_key_exists(0,$rows) && $rows[0]["approved"]==1){
//     //do something here to keep user logged in 
//     $_SESSION["Registered"]="YES";
//     $_SESSION["UserID"]=$u;
//     header("location:../projects.htm");
//  }else{
//     $_SESSION["Registered"]="NO";
//     $_SESSION["UserID"]="";
//     header("location:../register/register.htm");
//  }

// print_r($_SESSION);

?>


<br>