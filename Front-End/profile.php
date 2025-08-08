<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <a href="Front-End/login.php"></a>
    <link href="profile.css" rel="stylesheet">
    
   <?php include "profilenavbar.php";
   
   ?>
</head>
<style type="text/css">
    #bar{
        height:50px;
        background-color: #3f7d7d; 
        color: white;
        width: 850px; 
        margin:auto; 
        border-radius:10px;
        font-family: arial, helvetica, sans-serif;
    }
    </style>
<body style="background-color:white">
 <br>   
<div id="bar"> 
    <div style="width: 800px; margin:auto;font-size: 30px; text-align:center;">
    Profile:
    </div>
</div>
<div style="width:850px;margin:auto;background-color:white;min-height:300px;text-align:center;font-size:75px">
    <?php
    session_start();

    if ($_SESSION["LoggedIn"]=="YES") {
        $u = $_SESSION["UserID"];
        echo $u;
    
    } else if($_SESSION["LoggedIn"]=="NO"){

        echo "Not logged in";
    } 
    ?>
  <section>
    <img src="../Go_Home_Gazeebo/prites/Gazeebo.png" style="width:150px;text-align:center;">
    <!-- <h2>Achievements!</h2>
        <p>
        Badge 1 : <br><br><br>
        Badge 2 : <br><br><br>
        Badge 3 : 

        </p> -->
            
    </section>
    <a href="logout.php" style="color:black;font-size:50px">Log Out</a><BR>
</div>
</body>
</html>