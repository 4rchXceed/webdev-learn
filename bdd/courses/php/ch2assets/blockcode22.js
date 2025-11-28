window["bddcontent"] = `
<?php
// Looping Through Data to Fill HTML Table
$data = ["Apple", "Banana", "Orange"];
?>
<html>
    <body>
        <table border="1">
            <?php foreach ($data as $item) { ?>
                <tr>
                    <td><?php echo $item; ?></td>
                </tr>
            <?php } ?>
        </table>
    </body>
</html>
`;