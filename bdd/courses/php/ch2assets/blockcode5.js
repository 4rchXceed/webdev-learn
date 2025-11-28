window["bddcontent"] = `
<?php
// Using a PHP foreach Loop to Display List
$fruits = ["Apple", "Banana", "Cherry"];
?>
<html>
    <body>
        <ul>
            <?php foreach ($fruits as $fruit) { ?>
                <li><?php echo $fruit; ?></li>
            <?php } ?>
        </ul>
    </body>
</html>
`;