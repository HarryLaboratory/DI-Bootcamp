#CHALLENGE 1
#input_string = input("Type a comma-separated sequence of words: ")

#sorted_words = ','.join([word.strip() for word in sorted(input_string.split(','))])

#print("Sorted words:", sorted_words)

#CHALLENGE 2

def longest_word(sentence):
    return max(sentence.split(), key=len)

print(longest_word("You're a wizard, Harry."))
print(longest_word("The wand chooses the wizard."))
print(longest_word("I solemnly swear that I am up to no good."))


