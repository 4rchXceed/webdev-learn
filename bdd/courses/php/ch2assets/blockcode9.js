window["bddcontent"] = `
<?php
// Using Elseif in HTML
$score = 75;
if ($score >= 90) {
    echo "<p>Grade: A</p>";
} elseif ($score >= 70) {
    echo "<p>Grade: B</p>";
} else {
    echo "<p>Grade: C</p>";
}
?>
<html>
    <body>
        <h1>PHP Elseif Statement</h1>
    </body>
</html>
`;