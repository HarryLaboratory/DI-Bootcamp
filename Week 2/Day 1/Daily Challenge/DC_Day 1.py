# DAILY CHALLENGE 

class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, *args):
        for animal, quantity in args:
            if animal in self.animals:
                self.animals[animal] += quantity
            else:
                self.animals[animal] = quantity

    def display(self):
        print(f"Farm: {self.name}")
        print("-" * 30) 

        print(f"{'Animal':<10} {'Quantity'}")
        print("-" * 30)
        for animal, quantity in self.animals.items():
            print(f"{animal:<10} {quantity}")

macdonald = Farm("McDonald")
macdonald.add_animal(('cow', 5), ('sheep', 1), ('sheep', 1), ('goat', 12))

macdonald.display()

# EXPAND THE FARM 

def get_animal_types(self):
    return sorted(self.animals.keys())

def get_short_info(self):
    animal_types = self.get_animal_types()

    plural_animals = []
    for animal in animal_types:
        if animal == 'sheep':
            plural_animals.append(animal)
        else:
            plural_animals.append(animal + 's')
    animals_str = ', '.join(plural_animals)
    return f"{self.name}'s farm has {animals_str}."
