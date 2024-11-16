import os
import requests

class AnagramChecker:
    def __init__(self, word_list_url):

        self.word_list = self.load_word_list(word_list_url)

    def load_word_list(self, url):

        try:

            response = requests.get(url)
            response.raise_for_status()
            words = {line.strip().lower() for line in response.text.splitlines()}
            return words
        except requests.exceptions.RequestException as e:
            print(f"Error fetching word list from URL: {e}")
            return set()

    def is_valid_word(self, word):

        return word.lower() in self.word_list

    def get_anagrams(self, word):

        sorted_word = ''.join(sorted(word.lower())) 
        anagrams = []
        
        for valid_word in self.word_list:
            if self.is_anagram(word, valid_word):
                anagrams.append(valid_word)
        
        return [anagram for anagram in anagrams if anagram != word.lower()]

    def is_anagram(self, word1, word2):

        return sorted(word1.lower()) == sorted(word2.lower())


word_list_url = "http://norvig.com/ngrams/sowpods.txt"

anagram_checker = AnagramChecker(word_list_url)

word_to_check = "listen"  
anagrams = anagram_checker.get_anagrams(word_to_check)

print(f"Anagrams for '{word_to_check}': {anagrams}")