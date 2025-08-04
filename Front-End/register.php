<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
     <link href="login.css" rel="stylesheet">
    <script src="login.js"></script>
</head>
<body>
     <div class="container">
    <form id="register"method="post" action="processregister.php">
        <label for="user">Username</label>
        <input type="text" id="user" name="user">
        <br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"> <br><br>
         <label for="email">Email</label>
        <input type="email" id="email" name="email"> <br><br>
        <button onclick="register1(event)">Register</button>
        <!-- <input type="submit" value="login"> -->
    </form>
  
</div>
</body>
</html>