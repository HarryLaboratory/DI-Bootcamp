#CHALLENGE 1
#word = input("Enter word: ")

#word_indexes = {}

#for index, letter in enumerate(word):
    
    #if letter in word_indexes:
        #word_indexes[letter].append(index)
    #else:
        
        #word_indexes[letter] = [index]


#print("Dict word indexes: ")
#print(word_indexes)

#CHALLENGE 2

items_purchase = {"tv": "1000$" , "fruits": "25$" , "phone": "330$" , "salmon": "19$" , }
items_purchase2 = {"T-shirt": "10$" , "bread": "5$" , "pants": "80$" , "tablet": "500$" , }
items_purchase3 = {"pc": "1000$" , "tv": "2000$" , "tablet": "800$" , "desk": "400$" , }

wallet = "350$"


def convert_price(price_str):
    price_str = price_str.replace('$', '').replace(',', '')
    return float(price_str)

wallet_amount = convert_price(wallet)
affordable_items = []

def get_affordable_items(items_dict, wallet_amount):
    affordable_items = []
    for item, price in items_dict.items():
        if convert_price(price) <= wallet_amount:
            affordable_items.append(item)
    return affordable_items

affordable_items += get_affordable_items(items_purchase, wallet_amount)
affordable_items += get_affordable_items(items_purchase2, wallet_amount)
affordable_items += get_affordable_items(items_purchase3, wallet_amount)

#SORTING THE ITEMS IN ALPHABETICAL WAY
affordable_items.sort()
#RETURN OR NOT AFFORDABLE ITEMS
if affordable_items:
    print("Items you can afford:")
    for item in affordable_items:
        print(item)
else:
    print("Nothing")