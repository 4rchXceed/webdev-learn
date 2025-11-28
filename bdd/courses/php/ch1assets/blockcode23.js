window["bddcontent"] = `
<?php
// Basic inheritance in PHP CLI
class Animal {
    function speak() {
        echo "Animal speaks.\\n";
    }
}

class Dog extends Animal {
    function speak() {
        echo "Dog barks.\\n";
    }
}

$dog = new Dog();
$dog->speak();
?>
`;