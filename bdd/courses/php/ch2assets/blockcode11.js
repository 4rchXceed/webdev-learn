window["bddcontent"] = `
<?php
// Calling a Function to Display Content
function greetUser($name) {
    return "Hello, $name!";
}
?>
<html>
    <body>
        <h1>Welcome to the PHP Site</h1>
        <p><?php echo greetUser("Jane"); ?></p>
    </body>
</html>
`;