import random

class Game:
    
    def get_user_item(self):
        valid_items = ['rock', 'paper', 'scissors']
        
        while True:
            user_input = input("Select an item (rock, paper, scissors): ").lower()
            
            if user_input in valid_items:
                return user_input
            else:
                print("Invalid input. Please select 'rock', 'paper', or 'scissors'.")
    
    def get_computer_item(self):
        valid_items = ['rock', 'paper', 'scissors']
        return random.choice(valid_items)
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'paper' and computer_item == 'rock') or \
             (user_item == 'scissors' and computer_item == 'paper'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item() 
        result = self.get_game_result(user_item, computer_item)
        
        print(f"You selected {user_item}. The computer selected {computer_item}.")
        
        if result == 'draw':
            print("It's a draw!")
        elif result == 'win':
            print("You win!")
        else:
            print("You lose.")
        
        return result

if __name__ == "__main__":
    game = Game()
    
    while True:
        result = game.play() 
        
        play_again = input("Do you want to play again? (y/n): ").lower()
        if play_again != 'y':
            print("Thanks for playing!")
            break
