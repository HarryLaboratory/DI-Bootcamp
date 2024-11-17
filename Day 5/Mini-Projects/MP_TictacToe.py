#MINI-PROJECT TIC TAC TOE

def intro():
    print("Hello! Welcome to Tic Tac Toe!")

board = ["_" for _ in range(9)] 

player1 = "x"
player2 = "o"

win_combinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],  
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6],  
]

def printBoard(board):
    for i in range(0, 9, 3):
        print(" ".join(board[i:i+3]))
        if i < 6:  
            print("-" * 5)

def switch_player(current_player):
    return player2 if current_player == player1 else player1

def take_turn(player, board):
    while True:
        printBoard(board)
        try:
            move = int(input(f"Player {player}, choose a spot (0-8): "))
            if move < 0 or move > 8:
                print("Invalid input. Please choose a number between 0 and 8.")
            elif board[move] != "_":
                print("That spot is already taken. Please choose an empty spot.")
            else:
                board[move] = player
                break
        except ValueError:
            print("Invalid input. Please enter a number between 0 and 8.")

def check_win(board, player):
    for combination in win_combinations:
        print(f"Checking combination: {combination} for player {player}")
        if all(board[i] == player for i in combination):
            print(f"Player {player} wins with combination {combination}")
            return True
    return False

def check_tie(board):
    return "_" not in board  

def play_game():
    intro()  
    current_player = player1 
    while True:
        take_turn(current_player, board)
        
        if check_win(board, current_player):
            printBoard(board)
            print(f"Player {current_player} wins!")
            break
        elif check_tie(board):
            printBoard(board)
            print("It's a tie!")
            break
        
        current_player = switch_player(current_player)

play_game()

