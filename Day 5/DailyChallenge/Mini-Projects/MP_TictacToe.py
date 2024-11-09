#MINI-PROJECT TIC TAC TOE

def intro():
    print("Hello! Welcome to my Tic Tac Toe !")

board  = ["_","_","_",
          "_","_","_",
          "_","_","_"]

player1 = "x"
player2 = "o"


def printBoard(board):
    print(board[0] + " " + board[1] + " " + board[2])
    print("-" * 9)
    print(board[3] + " " + board[4] + " " + board[5])
    print("-" * 9)
    print(board[6] + " " + board[7] + " " + board[8])



win_combination = [
    [(0,0), (0,1), (0,2)],
    [(1,0), (1,1), (1,2)],
    [(2,0), (2,1), (2,2)],
    [(0,0), (1,0), (2,0)],
    [(0,1), (1,1), (2,1)],
    [(0,2), (1,2), (2,2)],
    [(0,0), (1,1), (2,2)],
    [(0,2), (1,1), (2,0)]
    ]

def switch_player(current_player):
    if current_player == player1:
        return player2
    else:
        return player1

def take_turn(player, board):
    while True:
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
    for combination in win_combination:
        if all(board[i] == player for i, j in combination):
            return True
    return False

def check_tie(board):
    return "_" not in board

def play_game():
    intro()
    current_player = player1
    while True:
        printBoard(board)
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