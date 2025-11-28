window["bddcontent"] = `
<?php
// Formatting dates in PHP CLI
$date = strtotime("2025-01-01");
echo "Formatted date: " . date("d/m/Y", $date) . "\\n";
?>
`;