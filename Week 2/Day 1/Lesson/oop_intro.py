#OOP INTRO

#How to create a class

#class Dog():
    #pass

class Dog:
    def __init__(self,name,color,age):
        self.name = name 
        self.color = color
        self.age = age


#How to create and instance(object) of the new class we created?

shelter_dog = Dog("Rex", "black",7)
#print(type(shelter_dog))
#shelter_dog.name = "Rex" #Option 1 creating attributes to an object

puddle = Dog("Flufy", "white", 3)

print(shelter_dog.name)
print(puddle.name)

#CREATE A CLASS CALLED PERSON
#USE __init__() TO CREATE THE FOLLOWING ATTRIBUTES: name,age,height
#CREATE AN OBJECT OF THIS CLASS FOR YOURSELF 
#PRINT ALL YOUR ATTRIBUTES

class Person:
    def __init__(self,name,height,age):
        self.name = name 
        self.height = height
        self.age = age

myself = Person("Harry", 1.70 , 26)

print(myself.name,myself.age,myself.height)



#CREATE A METHOD CALLED PRESENTATION() to print the following:
"Hello, my  name is {}, I am {} years old"

class Person:
    def __init__(self,name,height,age):
        self.name = name 
        self.height = height
        self.age = age
    
    def presentation(self):
      print(f"Hello my name is  {self.name}. I am {self.age} years old")



myself = Person("Harry", 1.70 , 26)
myself.presentation()

#METHOD EXERCISE 2
class Computer():

    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        #Analyse the line below
        print(self)

mac_computer = Computer()
mac_computer.brand = "Apple"
print(mac_computer.brand)

dell_computer = Computer()

Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")

#HELP FOR DAILY CHALLENGE
def add_animal(self,*args, amount = 1):
    for animal in args:
        self.animals.append(animal)

macdonalds = farm()
macdonalds.add_animal("cow", "horse" , "")
macdonalds.add_animal("cow", 5)
