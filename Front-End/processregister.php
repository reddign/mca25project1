<?php

// session_start();
//process the login for website

$u = $_POST["user"];
$p = $_POST["password"];
$e = $_POST["email"];
//TODO: revisit to get password correct 


if($_SERVER['HTTP_HOST']=="127.0.0.1"){
    $mysqli = new mysqli("127.0.0.1","root","","mca");
}else{
    $mysqli = new mysqli("195.35.59.14","u121755072_cohick","secret","u121755072_cohickdb");
}
//$mysqli = new mysqli("127.0.0.1","root","","mca");
if($mysqli -> connect_errno){
    echo "Failed to connect to My SQL : ". $mysqli->connect_error;
    exit;
}

$sql = "INSERT INTO users
(username,password,email,approved, createdOn) 
VALUES ('{$u}',SHA2(concat('{$p}','freak'),224),'{$e}',1,NOW());";


$result = $mysqli -> query($sql);
header("location:../index.htm");

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