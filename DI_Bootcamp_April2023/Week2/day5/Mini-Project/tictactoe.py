
def display_board(matrix) :
    print('      TIC TAC TOE')
    print ('**********************')
    print('*'+'   ' + '----' + '|' + '----' + '|'+ '----'  +'   '+ '*')
    for row in matrix:
        print('*' +'     '+ row[0]+' '+ '|'+ '  ' + row[1] + ' '+ '|' + '  ' + row[2] + '    '+'*' )
        print('*'+'   ' + '----' + '|' + '----' + '|'+ '----'  +'   '+ '*')
        

    print ('**********************')


def player_input (board,positions, turn) :  

    if turn % 2 == 0 :
        print("Player X's turn: " )
        turn_of = 'X'
    else :
        print("Player O's turn: " )
        turn_of = 'O'

    already_used = True
    while already_used == True :
        row = int(input ('row: '))-1
        while 0 > row  or row >=3 :
            print('Write a number between 1-3 ')
            row = int(input ('row: '))-1

        col = int(input ('column: '))-1
        while 0 > col  or col >=3 :
            print('Write a number between 1-3 ')
            col = int(input ('column: '))-1
        if board[row][col] == ' ':
            board[row][col]= turn_of
            already_used = False
            positions[turn_of].add((row,col))
        else :
            print('The position is already taken, chose another one :')
            already_used = True
        
        

    return turn_of

def check_win(turn_of, positions,winner) :

    winners_list = [
        {(0,0),(1,0),(2,0)},
        {(0,1),(1,1),(2,1)},
        {(0,2),(1,2),(2,2)},
        {(0,0),(0,1),(0,2)},
        {(1,0),(1,1),(1,2)},
        {(2,0),(2,1),(2,2)},
        {(0,0),(1,1),(2,2)},
        {(0,2),(1,1),(2,0)}
    ]

    for row in winners_list:
        if row.issubset(positions[turn_of]) == True :
            print(row)
            print(positions[turn_of])
            print(f"CONGRATTTTSSSSSSSS '{turn_of}' IS A WINNER!")
            winner = True
            print('End of the game')
            user_answer = input('Wanna play again ? Yes / no: ')
            play_again(user_answer)
        else:
            winner == False
    return winner

def play_again(user_answer) :

    if user_answer == 'Yes' :
        main()
    else :
        print ('See you soon!')



def main() :

    board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ]

    positions = {
    'X' : set (),
    'O' : set()
    }

    print ('Welcome to Tic Tac Toe')

    display_board(board)
    
    for turn in range(9) :
        turn_of = player_input(board,positions, turn)
        display_board(board)
        winner = False
        winner = check_win(turn_of, positions,winner)
        if winner == True:
            break
        

    if turn == 8:
        print('End of the game, no winner')
        user_answer = input('Wanna play again ? Yes / no: ')
        play_again(user_answer)

main()







    

    






