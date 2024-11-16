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


def get_user_menu_choice():
    menu = """
    Please choose an option:
    1. Play a new game
    2. Show scores
    3. Quit
    """
    valid_choices = ['1', '2', '3']
    
    user_choice = input(menu)
    
    while user_choice not in valid_choices:
        print("Invalid choice, please select 1, 2, or 3.")
        user_choice = input(menu)
    
    if user_choice == '1':
        return 'play'
    elif user_choice == '2':
        return 'show_scores'
    else:
        return 'quit'


def print_results(results):
    print("\n--- Game Results ---")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("\nThank you for playing!")


def main():
    results = {'win': 0, 'loss': 0, 'draw': 0} 
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == 'play':
            game = Game()
            game_result = game.play()
            
            if game_result == 'win':
                results['win'] += 1
            elif game_result == 'loss':
                results['loss'] += 1
            elif game_result == 'draw':
                results['draw'] += 1
        
        elif choice == 'show_scores':
            print_results(results)
        
        elif choice == 'quit':
            print_results(results)
            print("Goodbye!")
            break 

if __name__ == "__main__":
    main()
