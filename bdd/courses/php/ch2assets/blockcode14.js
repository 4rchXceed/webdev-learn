window["bddcontent"] = `
<?php
// Processing Form Data with PHP
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $name = $_GET["name"];
    echo "Hello, $name!";
}
?>
<html>
    <body>
        <form method="GET">
            Name: <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
`;