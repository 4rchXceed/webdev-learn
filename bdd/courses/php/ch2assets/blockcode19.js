window["bddcontent"] = `
<?php
// Starting a Session in HTML
session_start();
$_SESSION["username"] = "JohnDoe";
?>
<html>
    <body>
        <h1>Welcome <?php echo $_SESSION["username"]; ?></h1>
    </body>
</html>
`;