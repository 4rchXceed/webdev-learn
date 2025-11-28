window["bddcontent"] = `
# Class with Method Example
class Person:
    def __init__(self, name):
        self.name = name;

    def greet(self):
        print("Hello, " + self.name);

person1 = Person("Charlie");
person1.greet();
`;