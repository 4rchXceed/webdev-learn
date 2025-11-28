window["bddcontent"] = `
<?php
// Associative arrays in PHP CLI
$person = array("name" => "John", "age" => 25, "city" => "New York");
foreach ($person as $key => $value) {
    echo "$key: $value\\n";
}
?>`;