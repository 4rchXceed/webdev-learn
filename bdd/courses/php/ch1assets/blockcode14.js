window["bddcontent"] = `
<?php
// Basic error handling in PHP CLI
try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage() . "\\n";
}
?>
`;