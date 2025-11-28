window["bddcontent"] = `
<?php
// PHP Validation in Forms
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $email = $_GET["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        echo "Email is valid";
    }
}
?>
<html>
    <body>
        <form method="GET">
            Email: <input type="email" name="email">
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
`;