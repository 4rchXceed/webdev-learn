window["bddcontent"] = `
<?php
$file = fopen("header.php", "w");
if ($file) {
    fwrite($file, "<?php
echo 'This is a header'
?>.\n");;
    fclose($file);
}
// Using require() to Include a Header
require('header.php');
?>
<html>
    <body>
        <h1>Welcome to My Site</h1>
    </body>
</html>
`;