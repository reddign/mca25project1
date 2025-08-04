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
    <form id="login"method="post" action="process/processlogin.php">
        <label for="user">Username</label>
        <input type="text" id="user" name="user">
        <br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"> <br><br>
        <button onclick="login1(event)">Login</button>
        <!-- <input type="submit" value="login"> -->
    </form>
    <section>
        <div class: register>
     <a href="register.htm"  style="color: #033d42;" >REGISTER NOW!!</a><BR>
        </div>
    </section>
</div>
</body>
</html>