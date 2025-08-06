<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <a href="Front-End/login.php"></a>
   <?php include "navbar.php";
   ?>
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
        $u = $_SESSION["UserID"];
        echo $u;
    
    } else {
        echo "Not logged in";
    } 
    ?>
  <section>
    <h2>Achievements!</h2>
        <p>
        Badge 1 : <br><br><br>
        Badge 2 : <br><br><br>
        Badge 3 : 

        </p>
    </section>
</div>
</body>
</html>