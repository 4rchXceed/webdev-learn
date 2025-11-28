window["bddcontent"] = `
<?php
// Opening and writing to a file in PHP CLI
$file = fopen("somefile.php", "w");
if ($file) {
    fwrite($file, "<?php
echo 'Hello, World'
?>.\n");;
    fclose($file);
    echo "File written successfully.\n";
} else {
    echo "Failed to open file.\n";
}
// Including files in PHP CLI
include('somefile.php');
echo "Included file executed.\\n";
?>
`;