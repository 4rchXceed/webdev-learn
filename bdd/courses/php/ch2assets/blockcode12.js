window["bddcontent"] = `
<?php
$file = fopen("header.php", "w");
if ($file) {
    fwrite($file, "<?php
echo 'This is a header'
?>.\n");;
    fclose($file);
}
// Using include() in HTML
include('header.php');
?>
<html>
    <body>
        <h1>Welcome to My Website</h1>
    </body>
</html>
`;