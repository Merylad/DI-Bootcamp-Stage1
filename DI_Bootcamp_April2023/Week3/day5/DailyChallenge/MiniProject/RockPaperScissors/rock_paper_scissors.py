from game import Game
from random import choice


def get_user_menu_choice():
    while True:
        try: 
            user_choice = input('Menu \n(g)Play a new game \n(x) Show scores and exit \n:')
            if user_choice == 'g' or user_choice == 'x':
                break
            else :
                raise Exception ('This in not in the choices')
        except Exception as error:
            print (error)
    return user_choice

def print_results (results) :
    return print(f'''Thank you for playing. Here are the final results: \n 
    You won: {results['win']} times
    You lost {results['loss']} times
    You drew {results['draw']} times\n''')

def main():
    final_results = {'win' : 0, 'loss':0, 'draw':0}
    print('Welcome to Rock Paper Scissors!')
    user_choice = get_user_menu_choice()
    while user_choice == 'g':
         new_game = Game()
         final_results[new_game.play()] += 1
         user_choice = get_user_menu_choice()
    else:
        print_results(final_results)
        user_choice = get_user_menu_choice()

main()
