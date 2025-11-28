window["bddcontent"] = `<?php
    if (isset($_GET['name'])) {
        $name = htmlspecialchars($_GET['name']);
        echo "Bonjour " . $name . ", votre demande va être traitée.";
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>

    <h1>User Registration</h1>
    
    <!-- Simple Registration Form -->
    <form method="GET">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Register</button>
    </form>

    <!-- Login link -->
    /!\\ DON'T WORK
    <p>Already have an account? <a href="./login.html">Login here</a></p>
</body>
</html>

`;