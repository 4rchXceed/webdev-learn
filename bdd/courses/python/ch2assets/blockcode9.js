window["bddcontent"] = `
# Private Attributes Example
class Person:
    def __init__(self, name, age):
        self.name = name;
        self.__age = age;

    def get_age(self):
        return self.__age;

person1 = Person("Eve", 28);
print(person1.get_age());
`;