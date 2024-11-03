#EXERCISE 1

print("Hello World\n"*4)

#EXERCISE 2

print(99^3)*8

#EXERCISE 3

# 1 Answer : False
# 2 Answer : True
# 3 Answer : False
# 4 Answer : TypeError: '>' not supported between instances of 'str' and 'int'
# 5 Answer : False

#EXERCISE 4

computer_brand = "Asus"
print("I have a " + (computer_brand) + " computer")

#EXERCISE 5

my_name = "Harry"
my_age = "26"
shoe_size = "42"
info = f"I my name is  {my_name} i'm  {my_age} years old and i wear {shoe_size}"

print(info)


#EXERCISE 6

a = 55
b = 32

if a > b:
    print("Hello World")


#EXERCISE 7
num = int(input("Enter a number: "))
if (num % 2) == 0:
   print("{0} is Even".format(num))
else:
   print("{0} is Odd".format(num))



#EXERCISE 8

my_name = str(input('what is your name?'))
print(my_name)

if my_name == "Harry" :
    print("you can't drink vodka")
else:
    print("Don't blame yourself")

#EXERCISE 9

height = str(input("How tall are you? "))
print(f"You are {height} cm")


if height > "145" and height < "195" :
    print("You can enter the rollercoster")
else:
    print("You need to grow some more to ride.")
