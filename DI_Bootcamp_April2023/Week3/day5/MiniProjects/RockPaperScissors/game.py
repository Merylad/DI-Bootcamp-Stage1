from random import choice

class Game :

    def __init__(self):
        self.user_item = self.get_user_item()
        self.computer_item = self.get_computer_item()

    def get_user_item(self):
        while True :
            
            try:
                user_item = input('rock (r), paper (p), or scissors (s): ')
                                 
                if user_item == 'r' or user_item == 'p' or user_item == 's':
                    break
               
                if user_item.isdigit():
                        raise TypeError ('This is not a letter')
                else:
                    print ("Write only 'r' or 'p' or 's' ")
                
            except TypeError as error:
                print (error)

        print(f'Your choice: {user_item}')
        return user_item

    def get_computer_item(self):
        lst_choices = ['r', 'p', 's']
        computer_item = choice(lst_choices)
        print(f"computer's choice: {computer_item}")
        return computer_item
    
    def get_game_result(self):
        if self.user_item == self.computer_item :
           return 'draw'
        elif (self.user_item, self.computer_item) in [('s', 'p'), ('p', 'r'), ('r', 's')]:
           return 'win'
        else:
           return 'loss'

    
    def play (self):
        result = self.get_game_result()

        print (f'\nResult: {result}')

        return self.get_game_result()

