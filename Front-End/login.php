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
    <form id="login2"method="post" action="processlogin.php">
        <label for="user2">Username</label>
        <input type="text2" id="user2" name="user2">
        <br><br>
        <label for="password2">Password</label>
        <input type="password2" id="password2" name="password2"> <br><br>
        <button onclick="login3(event)">Login</button>
        <!-- <input type="submit" value="login"> -->
    </form>
    
</div>
</body>
</html>