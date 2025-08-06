<?php

// session_start();
//process the login for website

$u3 = $_POST["user3"];
$p3 = $_POST["password3"];
$e3 = $_POST["email2"];
// $salt = "";
// $saltArray = array("a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n","o","p", "q", "r", "s", "t", "u","v","w","x","y","z",
//                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9");



    $mysqli = new mysqli("195.35.59.14","u121755072_starfall","pN7/kBo?aic","u121755072_starfalldb");
//$mysqli = new mysqli("127.0.0.1","root","","mca");
if($mysqli -> connect_errno){
    echo "Failed to connect to My SQL : ". $mysqli->connect_error;
    exit;
}
// generateSalt();
$sql = "INSERT INTO starfall_users
(username,password,email,approved,badge1,badge2,badge3) 
VALUES ('{$u3}','{$p3}','{$e3}',1,0,0,0);";


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
// function generateSalt()
// {
//     $randomInt = 0;
//     for($i = 0; $i < 7; $i++)
//     {
//         $randomInt = mt_rand(0, count($saltArray));
//         $salt += $saltArray[$randomInt];
//     }
// }
?>


<br>