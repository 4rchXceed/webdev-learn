window["bddcontent"] = `
<?php
// Function Inside HTML
function greet($name) {
    return "Hello, $name!";
}
?>
<html>
    <body>
        <p><?php echo greet("John"); ?></p>
    </body>
</html>
`;