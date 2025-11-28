window["bddcontent"] = `
<?php
$file = fopen("sample.txt", "w");
if ($file) {
    fwrite($file, "<?php
This is a sample file
?>.\n");;
    fclose($file);
}
// Reading a File and Displaying Content in HTML
$file = fopen("sample.txt", "r");
$content = fread($file, filesize("sample.txt"));
fclose($file);
?>
<html>
    <body>
        <p>File content: <?php echo $content; ?></p>
    </body>
</html>
`;