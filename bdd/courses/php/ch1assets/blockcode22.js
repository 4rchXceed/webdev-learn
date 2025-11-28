window["bddcontent"] = `
<?php
// Creating an object in PHP CLI
class Car {
    public $model;
    public $year;

    function __construct($model, $year) {
        $this->model = $model;
        $this->year = $year;
    }

    function display() {
        echo "Car Model: $this->model, Year: $this->year\\n";
    }
}

$car = new Car("Toyota", 2020);
$car->display();
?>
`;