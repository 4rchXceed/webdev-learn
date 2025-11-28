window["bddcontent"] = `
<?php
// Accessing Session Variables in HTML
session_start();
echo "Hello, " . $_SESSION["username"];
?>
<html>
    <body>
        <h1>Accessing PHP Session Variables</h1>
    </body>
</html>
`;