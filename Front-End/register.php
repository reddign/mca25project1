<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

     <link href="register.css" rel="stylesheet">
    <script src="register.js"></script>
      
</head>
<body>
     <div class="container">
    <form id="register2"method="post" action="processregister.php">
        <label for="user3">Username</label>
        <input type="text" id="user3" name="user3">
        <br><br>
        <label for="password3">Password</label>
        <input type="password" id="password3" name="password3"> <br><br>
         <label for="email2">Email</label>
        <input type="email" id="email2" name="email2"> <br><br>
        <button onclick="register3(event)">Register</button>
        <!-- <input type="submit" value="login"> -->
    </form>
  
</div>
</body>
</html>