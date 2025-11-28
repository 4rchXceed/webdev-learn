window["bddcontent"] = `
<?php
// Creating a Table with PHP Inside HTML
$data = [
    ["ID", "Name", "Age"],
    [1, "John", 22],
    [2, "Alice", 30]
];
?>
<html>
    <body>
        <table border="1">
            <?php foreach ($data as $row) { ?>
                <tr>
                    <?php foreach ($row as $cell) { ?>
                        <td><?php echo $cell; ?></td>
                    <?php } ?>
                </tr>
            <?php } ?>
        </table>
    </body>
</html>
`;