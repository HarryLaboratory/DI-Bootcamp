#EXERCISE 1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.label}s" if self.amount != 1 else f"{self.amount} {self.label}"

    def __repr__(self):
        return f"{self.amount} {self.label}s" if self.amount != 1 else f"{self.amount} {self.label}"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.label != other.label:
                raise TypeError(f"Cannot add between Currency type <{self.label}> and <{other.label}>")
            return Currency(self.label, self.amount + other.amount)
        elif isinstance(other, (int, float)):  # Allow adding an int or float to a Currency object
            return Currency(self.label, self.amount + other)
        else:
            raise TypeError("Unsupported type for addition with Currency")
        
#EXERCISE 2
#Check the 2 other files

#EXERCISE 3

import random
import string

def generate_random_string(length=5):
    letters = string.ascii_letters 
    
    random_string = ''.join([random.choice(letters) for _ in range(length)])
    
    return random_string

random_str = generate_random_string(5)
print(random_str)

#EXERCISE 4

import datetime

def display_current_date():
    current_datetime = datetime.datetime.now()
    
    current_date = current_datetime.date()
    print("Current date:", current_date)

display_current_date()

#EXERCISE 5

import datetime

def time_until_new_year():
    now = datetime.datetime.now()
    
    next_year = now.year + 1
    new_year = datetime.datetime(next_year, 1, 1)
    
    time_left = new_year - now
    
    days_left = time_left.days
    seconds_left = time_left.seconds
    
    hours_left = seconds_left // 3600
    minutes_left = (seconds_left % 3600) // 60
    seconds_left = seconds_left % 60
    
    result = f"The 1st of January is in {days_left} days, {hours_left:02} hours, {minutes_left:02} minutes, and {seconds_left:02} seconds."
    
    print(result)

time_until_new_year()

#EXERCISE 6

from datetime import date

class Person:
    def __init__(self, name, birthday):
        self.name = name
        self.birthday = self.convert_birthday(birthday)
    
    @property
    def birthday(self):
        return self._birthday

    @birthday.setter
    def birthday(self, value):
        if not isinstance(value, date):
            raise ValueError("birthday argument has to be a datetime object")
        self._birthday = value

    def lived_days(self):
        return (date.today() - self.birthday).days

    def lived_minutes(self):
        return self.lived_days() * 24 * 60

    def convert_birthday(self, birthday_str):
        day, month, year = map(int, birthday_str.split("/"))
        return date(year, month, day)

birthday_input = "03/10/1999" 
person = Person("User", birthday_input)
print(f"You have lived {person.lived_minutes()} minutes.")

#Exercise 7

