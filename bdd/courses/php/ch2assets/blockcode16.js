window["bddcontent"] = `
<?php
// Displaying Errors in HTML
ini_set('display_errors', 1);
error_reporting(E_ALL);
echo $undefined_variable;
?>
<html>
    <body>
        <h1>Error Handling Example</h1>
    </body>
</html>
`;