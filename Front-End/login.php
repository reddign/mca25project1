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
    <form id="login"method="post" action="processlogin.php">
        <label for="user">Username</label>
        <input type="text" id="user" name="user">
        <br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"> <br><br>
        <button onclick="login1(event)">Login</button>
        <!-- <input type="submit" value="login"> -->
    </form>
    
</div>
</body>
</html>