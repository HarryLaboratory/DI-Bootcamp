#EXERCISE 1

#def display_message():
    #print("I'am learning Pyhton (functions) in this course. ")
#display_message()

#EXERCISE 2

def favorite_book(title):
    print(f"One of my favorite books is {title}.")
favorite_book("Harry Potter")

#EXERCISE 3

def describe_city(city,country):
  sentence = f'Hello, {city} is in {country}.'
  print(sentence)

describe_city("Paris","France")

#EXERCISE 4

import random

def compare_numbers():
  user_number = random.randint(1, 100)
    
  random_number = random.randint(1, 100)
    
  print(f"User's number: {user_number}")
  print(f"Randomly generated number: {random_number}")
   
  if user_number == random_number:
        print("Success! Both numbers are the same.")
  else:
        print(f"Fail! The numbers are different. User's number: {user_number}, random number: {random_number}")

compare_numbers()


#EXERCISE 5

def make_shirt(size, message):
    sentence = f"The size of the shirt is {size} and the message is: '{message}'"
    print(sentence)

make_shirt("M", "shirt size M")

#MAKING L SHIRTS

def make_shirt(size,message):
    print(f"The size of the shirt is {size} and the message is: '{message}'")
  
make_shirt("L" , "I love Python" )

#DEFAULT MESSAGE AND SIZE

def make_shirt(size, message):
    if size is None or message is None:
        pass  
    print(f"The size of the shirt is {size} and the message is: '{message}'")

make_shirt("L", "I love Python")  
make_shirt("M", "I love Python")  
make_shirt("S", "Skinny shirt for you!")

#EXERCISE 6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)

def make_great():
    global magician_names  
    for i in range(len(magician_names)):
        magician_names[i] = magician_names[i] + " the Great"

make_great()
show_magicians()

#EXERCISE 7
import random

def get_random_temp():
    return random.randint(-10, 40)
random_temp = get_random_temp()
print(f"The random temperature is: {random_temp}°C")

get_random_temp()

#PART 2/3

import random

def get_random_temp():
    return random.randint(-10, 40)

def main():
   
    temperature = get_random_temp()

    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temperature <= 23:
        print("Not that hot , not that cold, long sleeves shirt should do.")
    elif 24 <= temperature <= 32:
        print("Perfect weather!")
    elif 33 <= temperature <= 40:
        print("Very Hot don't stay expose to much and don't forget to drink water!")
main()
#PART 4
import random

def get_random_temp(season):
    season_temp_ranges = {
        'winter': (-10, 16),
        'spring': (5, 20),
        'summer': (20, 35),
        'autumn': (10, 25),
        'fall': (10, 25)
    }
    
    lower, upper = season_temp_ranges.get(season, (-10, 40))
    
    return random.randint(lower, upper)

def main():
    
    season = 'summer'  
    
    temperature = get_random_temp(season)

    print(f"The temperature right now in {season.capitalize()} is {temperature} degrees Celsius.")
    
    advice = (
        ("Brrr, that’s freezing! Wear some extra layers today.", temperature < 0),
        ("Quite chilly! Don’t forget your coat.", 0 <= temperature <= 16),
        ("Not that hot, not that cold; a long-sleeve shirt should do.", 16 < temperature <= 23),
        ("Perfect weather!", 24 <= temperature <= 32),
        ("Very hot! Don’t stay exposed for too long and don’t forget to drink water!", 33 <= temperature <= 40)
    )

    for message, condition in advice:
        if condition:
            print(message)
            break 

main()

#EXERCISE 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_questions(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:

        user_answer = input(item["question"] + " ")


        if user_answer.strip().lower() == item["answer"].lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": item["question"],
                "correct_answer": item["answer"],
                "user_answer": user_answer.strip()
            })

    return correct_answers, incorrect_answers, wrong_answers

def provide_feedback(correct_answers, incorrect_answers, wrong_answers):
    print(f"\nYou got {correct_answers} correct answers.")
    print(f"You got {incorrect_answers} incorrect answers.")
    
    if incorrect_answers > 0:
        print("\nHere are the questions you answered incorrectly:")
        for wrong in wrong_answers:
            print(f"Question: {wrong['question']}")
            print(f"Your answer: {wrong['user_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}\n")
    else:
        print("You got all the answers correct!")

# Example usage
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

correct_answers, incorrect_answers, wrong_answers = ask_questions(data)

provide_feedback(correct_answers, incorrect_answers, wrong_answers)

#BONUS
 #if incorrect_answers > 3:
        #print("\nYou got more than 3 incorrect answers.")
        #replay = input("play again? (yes/no): ").strip().lower()
        #if replay == 'yes':
            #print("\nStarting a new game...\n")
            #correct_answers, incorrect_answers, wrong_answers = ask_questions(data)
            #provide_feedback(correct_answers, incorrect_answers, wrong_answers)
        #else:
            #print("Goodbye!")