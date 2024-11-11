#EXERCISE 1
'''
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal = Bengal("Bengal Cat", 2)
chartreux = Chartreux("Chartreux Cat", 3)
siamese = Siamese("Siamese Cat", 4)

sara_pets = Pets([bengal, chartreux, siamese])

sara_pets.walk()
'''
#EXERCISE 2
'''
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        if self.age == 0:
            return 0 
        return (self.weight / self.age) * 10
    
    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight
        
        if self_power > other_dog_power:
            return f"{self.name} wins the fight!"
        elif self_power < other_dog_power:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"


dog1 = Dog("Rex", 3, 20)
dog2 = Dog("Max", 5, 25)
dog3 = Dog("Bethoven", 2, 18)

print(dog1.bark())  
print(dog2.bark()) 
print(dog3.bark())

print(dog1.run_speed())  
print(dog2.run_speed())  
print(dog3.run_speed())  

print(dog1.fight(dog2)) 
print(dog2.fight(dog3))  
print(dog1.fight(dog3))
'''
#EXERCISE 3
#CHECK FILE "EXERCISE3_XP.PY"

#EXERCISE 4
'''
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def add_member(self, first_name, age, relationship):
        member = {
            'first_name': first_name,
            'age': age,
            'relationship': relationship
        }
        self.members.append(member)

    def get_family_info(self):
        family_info = f"Family Last Name: {self.last_name}\nMembers:"
        for member in self.members:
            family_info += f"\n- {member['first_name']} ({member['relationship']}, {member['age']} years old)"
        return family_info

    def born(self, **kwargs):
        self.add_member(kwargs['first_name'], kwargs['age'], kwargs['relationship'])
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['first_name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['first_name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Meet the {self.last_name} Family!")
        for member in self.members:
            print(f"- {member['first_name']} ({member['relationship']}, {member['age']} years old)")


if __name__ == "__main__":
    my_family = Family("Cohen")
    my_family.add_member("Ari", 38, "Father")
    my_family.add_member("Tali", 35, "Mother")
    my_family.add_member("Eli", 12, "Son")
    
    print(my_family.get_family_info())

my_family.born(first_name="Sarah", age=0, relationship="Daughter")
print(f"Is Eli over 18? {'Yes' if my_family.is_18('Eli') else 'No'}")
print(f"Is Tali over 18? {'Yes' if my_family.is_18('Tali') else 'No'}")
my_family.family_presentation()
'''
#EXERCISE 5

class Family:
    def __init__(self, name, members=None):
        self.name = name
        self.members = members if members is not None else []

    def add_member(self, member):
        self.members.append(member)
    
    def get_members(self):
        return self.members

    def family_presentation(self):
        print(f"Welcome to the {self.name} family!")
        for member in self.members:
            print(f"Name: {member['incredible_name']}, Power: {member['power']}, Age: {member['age']}")


class TheIncredibles(Family):
    def __init__(self, name, members=None):
        super().__init__(name, members)

    def add_member(self, name, power, incredible_name, age):
        member_dict = {
            'name': name,
            'power': power,
            'incredible_name': incredible_name,
            'age': age
        }
        self.members.append(member_dict)
    
    def get_incredible_members(self):
        return self.members
    
    def use_power(self, incredible_name):
        for member in self.members:
            if member['incredible_name'] == incredible_name:
                if member['age'] > 18:
                    print(f"{incredible_name}'s power is: {member['power']}")
                else:
                    raise UnderageException(f"{incredible_name} is not over 18 years old. Cannot use power.")
                return
        print(f"No member found with the incredible name: {incredible_name}")
    
    def incredible_presentation(self):
        print("Here is our powerful family:")     
        print(f"The {self.name} family:")
        
        for member in super().get_members():
            print(f"{member['incredible_name']} (a.k.a {member['name']}) - Power: {member['power']}, Age: {member['age']}")

    def born(self, name, incredible_name, power="Unknown Power", age=0):
        member_dict = {
            'name': name,
            'power': power,
            'incredible_name': incredible_name,
            'age': age
        }
        self.members.append(member_dict)

class UnderageException(Exception):
    def __init__(self, message="Member is not over 18 years old. Cannot use power."):
        self.message = message
        super().__init__(self.message)


incredibles = TheIncredibles("The Incredible Family")

incredibles.add_member("Mr. Incredible", "Super strength", "Bob Parr", 35)
incredibles.add_member("Elastigirl", "Elasticity", "Helen Parr", 34)
incredibles.add_member("Dash", "Super speed", "Dashiell Parr", 10)
incredibles.add_member("Violet", "Force fields & invisibility", "Violet Parr", 16)


for member in incredibles.get_incredible_members():
    print(f"{member['incredible_name']} (a.k.a {member['name']}) - Power: {member['power']}")

try:
    incredibles.use_power("Bob Parr") 
    incredibles.use_power("Dashiell Parr") 
except UnderageException as e:
    print(e)

incredibles.incredible_presentation()

incredibles.born("Jack", "Baby Jack", "Unknown Power", 0)

print("\nAfter Baby Jack's birth:")
incredibles.incredible_presentation()