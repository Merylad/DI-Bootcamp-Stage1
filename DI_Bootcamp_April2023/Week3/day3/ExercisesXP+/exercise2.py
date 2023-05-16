from random import randint

def random_number (num) :
    if num < 1 or num > 100 :
        print('The number needs to be between 1 and 100')
    else :
        rand_num = randint(1,100)
        if rand_num == num :
            print('No way!!! We have the same number wich is :' + rand_num)
        else :
            print(f'Bad luck! Your number is {num} and mine is {rand_num}')

random_number(105) #The number needs to be between 1 and 100
random_number(26) #Bad luck! Your number is 26 and mine is 43