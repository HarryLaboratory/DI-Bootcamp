#EXERCISE 1
import os
import requests

url = "http://norvig.com/ngrams/sowpods.txt"

file_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'word_list.txt')


def download_word_list():
    try:
        response = requests.get(url)
        response.raise_for_status()  
        with open(file_path, 'w') as file:
            file.write(response.text) 
        print(f"Word list downloaded and saved to {file_path}")
    except requests.RequestException as e:
        print(f"An error occurred while downloading the word list: {e}")

def get_words_from_file():
    words = []
    if not os.path.exists(file_path):
        print(f"File not found locally, attempting to download the word list...")
        download_word_list()

    try:
        with open(file_path, 'r') as file:
            words = file.read().splitlines() 
    except FileNotFoundError:
        print(f"Error: The file at {file_path} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

    return words

words = get_words_from_file()
print(words[:10]) 


#EXERCISE 2

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

data["company"]["employee"]["birth_date"] = "1990-05-10" 

with open('updated_employee.json', 'w') as json_file:
    json.dump(data, json_file, indent=4) 

print("Updated JSON saved to 'updated_employee.json'.")
