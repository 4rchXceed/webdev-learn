window["bddcontent"] = `
<?php
// Opening and writing to a file in PHP CLI /!\ DON'T WORK IN EDITOR
$file = fopen("example.txt", "w");
if ($file) {
    fwrite($file, "Hello, this is a test file.\\n");
    fclose($file);
    echo "File written successfully.\\n";
} else {
    echo "Failed to open file.\\n";
}
?>
`;