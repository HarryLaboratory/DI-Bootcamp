#Exercise 1

#my_fav_numbers = {10,5,15,7,3}
#my_fav_numbers.add(27)
#my_fav_numbers.add(12)
#print(my_fav_numbers)
#my_fav_numbers.pop()
#print(my_fav_numbers)


#friend_fav_numbers = {7,14,26}
#our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

#print(our_fav_numbers)


#Exercise 2

#Answer : No

#Exercise 3

#basket = ["Banana","Apples","Oranges","Blueberries"]
#basket.remove("Banana")
#basket.remove("Blueberries")
#basket.insert(4,"Kiwi")
#basket.insert(0,"Apples")
#x = basket.count("Apples")
#print(x)
#basket.clear()
#print(basket)

#Exercise 4

# 1 Answer : Float and Int are numbers positive or negative the difference is float can have decimals not int (floating number and integer number).


#my_sequence = [1.5,2,2.5,3,3.5,4,4.5,5]
#print(my_sequence[0:8])


#def my_function(x):
  #return 0.5 * x

#print(my_function(3))
#print(my_function(4))
#print(my_function(5))
#print(my_function(6))
#print(my_function(7))
#print(my_function(8))
#print(my_function(9))
#print(my_function(10))


#Exercise 5

#for number in range(1,21):
  #print(number) 


#for number in range(1,21):
  #if number % 2 == 0 : 
    #print(number)


#Exercise 6

#name = ''
#while name != 'Harry':
  #name = input('What is your name?:')

#print('You a wizard Harry ! ')


#Exercise 7

#fruits = []
#keep_asking = True
#member = input("write the fruits you like. (Separate the fruits with a single space): ")
#print(member)
#print(type(member))
#fruits = member.split(" ")
#print(fruits)
#any_f = input("Type any fruit: ")
#if (any_f in fruits):
     #print("You choose one of your favorite fruits! Enjoy!")
#else:
     #print("You choose a new fruit. i hope you enjoy.")



#Exercise 8

#toppings = []
#sum = 10 
#keep_asking = True
#while (keep_asking):
   #topp = input("Write the toppings you would like: ")
   #if (topp == "quit"):
      #keep_asking = False
   #else:
      #toppings.append(topp)
      #sum += 2.5

#print("You will add that topping on your pizza")
#print(f"The total price of your pizza is: {sum}({toppings}2.5 each of them)")


#Execise 9


#no_of_members=int(input("Enter no.of members going to attend the movie theater: "))

#total_amount=0

#for i in range(no_of_members):

   #age=int(input("Enter age: "))

   #if age<3:

       #tkt_price=0

   #elif age>=3 and age<=12:

       #tkt_price=10

   #elif age>12:

       #tkt_price=15


   #total_amount=total_amount+tkt_price

#print("Total amount to pay",total_amount)


#teenagers = ["Harry","Eyal","Eli"]

#for teenager in teenagers[:]:
    #age = int(input(f"how old are you {teenager}? "))
    #if (16<= age <=21):
        #teenagers.remove(teenager)
    #else:
        #print(f"Welcome {teenager} !")
#print(f"List of teenagers allowed in the movie theater: {teenagers}")






#Exercise 10

#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#while "Pastrami sandwich" in sandwich_orders: sandwich_orders.remove("Pastrami sandwich")
#print(sandwich_orders)

#finished_sandwiches = []

#while sandwich_orders:
    #sandwich = sandwich_orders.pop(0)  # Remove the first sandwich from the orders
    #finished_sandwiches.append(sandwich)  # Add it to the finished sandwiches

#print("Finished sandwiches:", finished_sandwiches)
#print("I made your Tuna sandwich","I made your Avocado sandwich" , "I made your Egg sandwich" , "I made your Chicken sandwich")