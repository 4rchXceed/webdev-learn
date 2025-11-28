window["bddcontent"] = `
<?php
// Writing Data to a File with PHP
$file = fopen("newfile.txt", "w");
fwrite($file, "This is a new file created by PHP!");
fclose($file);
?>
<html>
    <body>
        <h1>Data written to file</h1>
    </body>
</html>
`;
