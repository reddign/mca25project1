<?php
session_start();

session_destroy();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:#403659;color:white;">
   <header style="font-size:75px;text-align:center;"> You are now logged out!<br><br> </header>
    <main style="text-align:center">
        <section >
             <img src="sadalien.jpg" style="width:150px;">
        </section>
        <section>
    <h2> Go Back to The Login Page</h2> 
    <a href="login.php" style="color:white">Login Page</a> <br><br>
</section>
<section>
  <h2>Go Back to the StartPage</h2>
    <a href="../index.php" style="color:white">Startpage</a>
</section>
</main>
</body>

</html>