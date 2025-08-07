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
<body style=" background-image:url(space.gif);background-size: 100%;
    background-position:center;color:white;">
   <header style="font-size:75px;text-align:center; display: block;text-shadow: 4px 4px 8px #00ff7b;"> You are now logged out!<br><br> </header>
    <main style="text-align:center">
        <section >
             <img src="sadalien.jpg" style="width:150px;">
        </section>
        <section style="font-size:35px;display: block;text-shadow: 4px 4px 8px #000000ff;">
    <h2> Go Back to The Login Page</h2> 
    <a href="login.php" style="color:white;display: block;text-shadow: 7px 7px 14px #000000ff;">Login Page</a> <br><br>
</section>
<section style="font-size:35px;display: block;text-shadow: 5px 5px 10px #000000ff;">
  <h2>Go Back to the StartPage</h2>
    <a href="../index.php" style="color:white;display: block;text-shadow: 7px 7px 14px #000000ff;">Startpage</a>
</section>
</main>
</body>

</html>