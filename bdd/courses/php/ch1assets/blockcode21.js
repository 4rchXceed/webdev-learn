window["bddcontent"] = `
<?php
// Creating a class in PHP CLI
class Person {
    public $name;
    
    function __construct($name) {
        $this->name = $name;
    }

    function greet() {
        echo "Hello, my name is " . $this->name . ".\\n";
    }
}

$person = new Person("Alice");
$person->greet();
?>
`;