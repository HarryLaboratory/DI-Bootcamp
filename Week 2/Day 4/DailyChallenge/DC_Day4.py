#PART 1
class Text:
    def __init__(self, input_text=""):
        self.text = input_text
    
    def set_text(self, input_text):
        self.text = input_text
        
    def get_text(self):
        return self.text
    
    def word_frequency(self, word):
        if not self.text:
            return "Text is empty."
        
        words = self.text.lower().split()
        word_count = words.count(word.lower())
        
        if word_count > 0:
            return word_count
        else:
            return f"'{word}' not found in the text."
    
    def most_common_word(self):
        if not self.text: 
            return "Text is empty."
        
        words = self.text.lower().split()
        word_count = {}
        
        for word in words:
            word_count[word] = word_count.get(word, 0) + 1
        
        most_common = max(word_count.items(), key=lambda x: x[1], default=None)
        
        if most_common:
            return most_common
        else:
            return "No words in text."
    
    def unique_words(self):
        if not self.text: 
            return "Text is empty."
        
        words = self.text.lower().split()
        unique_words = set(words)
        
        return sorted(unique_words)

my_text = Text("A good book would sometimes cost as much as a good house.")

print(my_text.word_frequency("good")) 
print(my_text.most_common_word())  
print(my_text.unique_words()) 

my_text = Text() 
print(my_text.get_text()) 
my_text.set_text("A good book would sometimes cost as much as a good house.")
print(my_text.get_text()) 

#PART 2

import requests

class Text:
    def __init__(self, content):
        self.content = content
    
    @classmethod
    def from_file(cls, filename):
        if filename.startswith('http'):
            response = requests.get(filename)
            content = response.text
        else:
            with open(filename, 'r') as file:
                content = file.read()
        return cls(content)

    def __str__(self):
        return self.content

url = 'https://raw.githubusercontent.com/devtlv/theStranger_text_W5D4PY/master/the_stranger.txt'

text_instance = Text.from_file(url)

print(text_instance)
