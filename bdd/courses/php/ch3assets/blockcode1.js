window["bddcontent"] = `<?php
// Handle the GET request (simulating the logic)
if (isset($_GET['email']) && isset($_GET['password'])) {
    $email = $_GET['email'];
    $password = $_GET['password'];

    // Here you would normally check the credentials in a database
    // Simulate successful login if email contains 'user' and password matches
    if ($email == 'user@example.com' && $password == 'password123') {
        // Redirect to panel.html with the session variables
        setcookie('email', $email, time()+3600*24, '/', '', true, true);
        echo "<p>You are now connected with user: $email</p>";
        exit();
    } else {
        echo "<p style='color: red;'>Invalid email or password!</p>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h1>User Login</h1>
    
    <!-- Simple Login Form -->
    <form method="GET">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Login</button>
    </form>

    <!-- Registration link -->
    <p>Don't have an account? <a href="./register.html">Register here</a></p>


</body>
</html>
`;