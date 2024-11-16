import re
from anagram_checker import AnagramChecker 

word_list_url = "http://norvig.com/ngrams/sowpods.txt"

def print_menu():

    print("\n--- Anagram Checker ---")
    print("1. Enter a word to find its anagrams")
    print("2. Exit")

def get_user_input():

    user_input = input("Please enter a word: ").strip()
    
    if len(user_input.split()) != 1:
        print("Error: Please enter a single word only.")
        return None
    
    if not user_input.isalpha():
        print("Error: Only alphabetic characters are allowed.")
        return None
    
    return user_input.lower()

def display_anagram_results(word, anagrams):

    if anagrams:
        print(f"\nAnagrams for '{word}':")
        for anagram in anagrams:
            print(f"  - {anagram}")
    else:
        print(f"\nNo anagrams found for '{word}'.")

def main():

    anagram_checker = AnagramChecker(word_list_url)
    
    while True:
        print_menu()
        choice = input("Choose an option (1 or 2): ").strip()

        if choice == "1":
            word = get_user_input()
            if word is not None:
                anagrams = anagram_checker.get_anagrams(word)
                display_anagram_results(word, anagrams)

        elif choice == "2":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please choose 1 or 2.")

if __name__ == "__main__":
    main()


