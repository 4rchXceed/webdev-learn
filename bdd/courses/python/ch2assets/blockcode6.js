window["bddcontent"] = `
# Class Constructor Example
class Person:
    def __init__(self, name, age):
        self.name = name;
        self.age = age;

    def display(self):
        print("Name: " + self.name);
        print("Age: " + str(self.age));

person1 = Person("David", 22);
person1.display();
`;