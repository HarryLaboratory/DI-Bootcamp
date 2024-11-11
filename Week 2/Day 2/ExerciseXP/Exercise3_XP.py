#EXERCISE 3 FROM EXERCISEXP MANDATORY DAY 2

import random  
from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self):
        self.trained = True
        print(self.bark()) 
        return f"{self.name} has been trained!"
    
    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{dog_names} all play together.")
    
    def do_a_trick(self):
        if self.trained:
            trick = random.choice([
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ])
            print(trick)
        else:
            print(f"{self.name} is not trained yet to do a trick.")
    
    def bark(self):
        if self.trained:
            return f"{self.name} barks happily!"
        else:
            return f"{self.name} barks loudly!"
    
    def __str__(self):
        return f"{self.name} (Age: {self.age}, Weight: {self.weight}kg, Trained: {self.trained})"

if __name__ == "__main__":

    dog1 = PetDog("Rex", 3, 15)
    dog2 = PetDog("Max", 4, 20)
    dog3 = PetDog("Bethoven", 2, 18)
    
    print(dog1.bark()) 
    print(dog1.train()) 
    print(dog1.bark()) 


    dog1.play(dog2, dog3)

    dog1.do_a_trick()
    dog2.do_a_trick() 
