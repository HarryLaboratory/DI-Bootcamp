#EXERCISE 1

class Cat:
    def __init__(self, cat_name, cat_age, cat_color):
        self.name = cat_name
        self.age = cat_age
        self.color = cat_color

def find_oldest_cat(cats):
    oldest_cat = cats[0] 
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

cat1 = Cat("isis", 10, "black")
cat2 = Cat("Hucky", 5, "orange")
cat3 = Cat("garfield", 8, "orange")

cats = [cat1, cat2, cat3]

oldest = find_oldest_cat(cats)
class Cat:
    def __init__(self, cat_name, cat_age, cat_color):
        self.name = cat_name
        self.age = cat_age
        self.color = cat_color

def find_oldest_cat(cats):
    oldest_cat = cats[0] 
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

cat1 = Cat("isis", 10, "black")
cat2 = Cat("Hucky", 5, "orange")
cat3 = Cat("garfield", 8, "orange")

cats = [cat1, cat2, cat3]

oldest = find_oldest_cat(cats)


print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

#EXERCISE 2

class Dog():
    
    def __init__(self, name_of_the_dog,height):
        self.name = name_of_the_dog
        self.height = height

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

dog = Dog("Max", 35)

dog.bark()
dog.jump()

class Dog:
    
    def __init__(self, name_of_the_dog, height):
        self.name = name_of_the_dog
        self.height = height
    
    def bark(self):
        print(f"{self.name} barks ! WAF")


    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog("Rex", 50)

print(f"Dog's name: {davids_dog.name} + {davids_dog.height} cm")

davids_dog.bark()
davids_dog.jump()

class Dog:
   
    def __init__(self, name_of_the_dog, height):
        self.name = name_of_the_dog
        self.height = height

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

sarahs_dog = Dog("Teacup", 20)

print(f"Dog's name: {sarahs_dog.name} + {sarahs_dog.height} cm")


sarahs_dog.bark() 
sarahs_dog.jump() 

if davids_dog.height > sarahs_dog.height:
    bigger_dog = davids_dog
elif sarahs_dog.height > davids_dog.height:
    bigger_dog = sarahs_dog
else:
    print("Both dogs have the same height.")
    bigger_dog = None

if bigger_dog:
    print(f"The bigger dog is {bigger_dog.name}, with a height of {bigger_dog.height} cm.")

#EXERCISE 3

class Song:

    def __init__(self, lyrics):
        self.lyrics = lyrics 

    def show_lyrics(self):
        for line in self.lyrics:
            print(line)
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "Je vous parle d'un temps que les moins de vingt ans , Ne peuvent pas connaître",
    "Montmartre en ce temps-là, accrochait ces lilas , Jusque sous nos fenêtres",
    "Et si l'humble garni, qui nous servait de nid, Ne payait pas de mine"
])

stairway.sing_me_a_song()

# EXERCISE 4

class Zoo:
    
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []  

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        if self.animals:
            print(f"Animals in {self.name}:")
            for animal in self.animals:
                print(f"- {animal}")
        else:
            print("There are no animals in the zoo.")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        if self.animals:
            self.animals.sort()
            print(f"Animals sorted in {self.name}: {', '.join(self.animals)}")
        else:
            print("There are no animals to sort.")

    def get_groups(self):
        groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in groups:
                groups[first_letter] = []
            groups[first_letter].append(animal)
        
        if groups:
            print(f"Animals grouped by their first letter in {self.name}:")
            for letter, animals in sorted(groups.items()):
                print(f"{letter}: {', '.join(animals)}")
        else:
            print("There are no groups to display.")


ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Tiger")
ramat_gan_safari.add_animal("Panther")
ramat_gan_safari.add_animal("Gorilla")
ramat_gan_safari.add_animal("Elephant")

ramat_gan_safari.get_animals()


ramat_gan_safari.sell_animal("Panther")

ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()

ramat_gan_safari.add_animal("Gorilla")
ramat_gan_safari.add_animal("Giraffe") 

ramat_gan_safari.get_groups()
ramat_gan_safari.get_animals()
