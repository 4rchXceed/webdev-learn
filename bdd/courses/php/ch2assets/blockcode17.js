window["bddcontent"] = `
<?php
// Error Handling Inside HTML Pages
try {
    throw new Exception("Something went wrong!");
} catch (Exception $e) {
    echo "<p>Error: " . $e->getMessage() . "</p>";
}
?>
<html>
    <body>
        <h1>Error Handling</h1>
    </body>
</html>
`;