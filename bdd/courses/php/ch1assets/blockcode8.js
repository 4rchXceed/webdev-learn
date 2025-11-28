window["bddcontent"] = `
<?php
// Using elseif statement in PHP CLI
$age = 17;
if ($age >= 18) {
    echo "You are an adult.\\n";
} elseif ($age >= 13) {
    echo "You are a teenager.\\n";
} else {
    echo "You are a child.\\n";
}
?>`;