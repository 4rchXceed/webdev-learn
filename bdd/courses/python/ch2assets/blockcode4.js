window["bddcontent"] = `
# Creating Objects
class Person:
    def __init__(self, name, age):
        self.name = name;
        self.age = age;

person1 = Person("Bob", 25);
print(person1.name);
print(person1.age);
`;