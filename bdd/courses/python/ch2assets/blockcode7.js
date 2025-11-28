window["bddcontent"] = `
# Class Inheritance Example
class Animal:
    def speak(self):
        print("Animal speaks");

class Dog(Animal):
    def speak(self):
        print("Dog barks");

dog = Dog();
dog.speak();
`;