window["bddcontent"] = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
</head>
<body>

    <h1>Welcome to Your Dashboard</h1>
    
    <?php
    // Handle GET request and display user data
    if (isset($_COOKIE['email'])) {
        $email = $_COOKIE['email'];
        echo "<p>Welcome, " . htmlspecialchars($email) . "!</p>";
    } else {
        echo "<p>You are not logged in. <a href='./login.html'>Login here</a></p>";
    }
    ?>
    
    /!\\ DON'T WORK
    <a href="./login.html">Logout</a>

</body>
</html>
`;