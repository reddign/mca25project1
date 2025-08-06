<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <a href="Front-End/login.php"></a>
</head>
<style type="text/css">
    #bar{
        height:50px;
        background-color: darkblue; 
        color: white;
        width: 850px; 
        margin:auto; 
        border-radius:10px;
    }
    </style>
<body style="background-color:white">
 <br>   
<div id="bar"> 
    <div style="width: 800px; margin:auto;font-size: 30px; text-align:center;">
        My Profile
    </div>
</div>
<div style="width:850px;margin:auto;background-color:white;min-height:300px;">
    <?php
    session_start();

    if ($_SESSION["LoggedIn"]=="YES") {
        echo "yes";
    } else {
        echo "no";
    } 
    // $u2 = $_SESSION["user2"];
    // // $p2 = $_POST["password2"];

    //  $mysqli = new mysqli("195.35.59.14","u121755072_cohick","+05Ouz%9","u121755072_cohickdb");


    // if($mysqli -> connect_errno){
    // echo "Failed to connect to My SQL : ". $mysqli->connect_error;
    // exit;
    // }
    // $sql= "SELECT * from starfall_users
    // where username='{$u2}' "
    // // -- and password='{$p2}'";
    ?>
</div>
</body>
</html>