#Exercise 1

#keys = ['Ten', 'Twenty', 'Thirty']
#values = [10, 20, 30]

#print(dict(zip(keys, values)))


#Exercise 2
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#total_cost = 0

#for age in family.values():
    #if age < 3:
        #ticket_cost = 0
    #elif age < 12:
        #ticket_cost = 10
    #else:
        #ticket_cost = 15
    
    # Add the ticket cost for each family member to the total cost
    #total_cost += ticket_cost

#print("Total cost for the family is:", total_cost)

#rick = 15
#reth = 15
#morty = 10
#summer = 10
#Total_Coast = 50

#BONUS

#family_dict = {}

#num_entries = int(input("Enter the number of entries you want to add:" ))

#for i in range(num_entries):
    #key = input("Enter(key)name:" )
    #value = input("Enter(value)age:" )
    #family_dict[key] = value

#print("Dictionary after adding user input:", family_dict)


#Exercise 3

#name: Zara 
#creation_date: 1975 
#creator_name: Amancio Ortega Gaona 
#type_of_clothes: men, women, children, home 
#international_competitors: Gap, H&M, Benetton 
#number_stores: 7000 
#major_color: 
    #France: blue, 
    #Spain: red, 
    #US: pink, green



brand = {"name": "Zara" , 
         "creation_date" : 1975 , 
         "creator_name": "Amancio Ortega Gaona" , 
         "type_of_clothes":["men", "women", "children", "home"] , 
         "international_competitors":["gap", "H&M" , "Benetton"] ,
         "number_stores": 7000 , 
         "major_color" : {"france": "blue" , "spain" : "red" , "US" : "pink""green",}}

#CHANGING
brand["number_of_stores"] = 2
#print(brand)
#WHO ZARA CLIENTS ARE ?
#I don't understand part 3 should we add clients to our dictionnary ? 
#ADD
brand["country_creation"] = "spain"
#print(brand)
#CHECKING
key = "international_competitors"
#print(key in brand)

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
else:
    brand["international_competitors"] = ["Desigual"]
#print(brand)
#DELETE
del brand["creation_date"]
#print(brand)
#LAST INTERNATIONAL COMPETITOR
last_value_of_a = brand['international_competitors'][-1]
#print(last_value_of_a)
#MAJOR COLOR IN THE US CLOTHES
#print(f"The major clothes color in the US is: {brand['major_color']['US']}")
#AMOUNT KEY AND VALUE PAIR 
#print(f"The number of key-value pairs in the dictionary is: {len(brand)}")
#ALL KEY IN BRAND
#print(f"The keys of the dictionary are: {list(brand.keys())}")
#MORE ON ZARA
more_on_zara = {"creation_date": 1975 , "number_stores": 10000 ,}
brand.update(more_on_zara)
#print(f"The updated number of stores is: {brand['number_stores']}")
#IT UPTDATED THE NUMBER OF STORE TO 10 000

#EXERCISE 4
#1
#users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#user1 = {}

#for i, name in enumerate(users):
    #user1[name] = i  

#print(user1)

#2

#users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#user2 = {}

#for i, name in enumerate(users):
    #user2[i] = name

#print(user2)

#3

#users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#user3 = {}

#sorted_users = sorted(users)

#user3 = {name: i for i, name in enumerate(sorted_users)}

#print(user3)

#4/1
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
user2 = {}

for i, name in enumerate(users):
    if 'i' in name:  
        user2[name] = i
print(user2)

#4/2
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
user3 = {}

for i, name in enumerate(users):
    if 'M' in name:  
        user3[name] = i
print(user3)