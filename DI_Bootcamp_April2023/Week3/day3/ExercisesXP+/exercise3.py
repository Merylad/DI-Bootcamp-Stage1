import string
from random import choice

#🌟 Exercise 3: String Module

def create_a_string(lenght) :
    letters = string.ascii_letters
    random_string = ''.join(choice(letters) for _ in range(lenght))
    return random_string
                     
print(create_a_string(5)) #vvLtD