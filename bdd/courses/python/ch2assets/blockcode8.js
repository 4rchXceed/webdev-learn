window["bddcontent"] = `
# Method Overriding Example
class Animal:
    def sound(self):
        print("Some animal sound");

class Cat(Animal):
    def sound(self):
        print("Meow");

cat = Cat();
cat.sound();
`;
