import random

#Exercise 1 : What Are You Learning ?

def display_message():
    print("In this lesson i'm learning functions")

display_message()

##########################################################################################################
#🌟 Exercise 2: What’s Your Favorite Book ?

def favorite_book(title) :
    print(f"My favorite book is {title}")

favorite_book('Harry Potter')

##########################################################################################################
#🌟 Exercise 3 : Some Geography

def describe_city(city, country='Israel'):
    print(f"{city} is in {country}")

describe_city("Naharyia")


##########################################################################################################
#Exercise 4 : Random

def create_random (number):
    if number <0 or number >100 :
        return
    new_number = random.randint(0,100)
    if number == new_number:
        print("Waaw ! What a luck!")
    else :
        print(f"Too bad! Your number is {number} and mine is {new_number}")

create_random (120)
create_random (26)

######################################################################################################
#🌟 Exercise 5 : Let’s Create Some Personalized Shirts !

def make_shirt (size = "'L", text = "I Love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("'M'", "'I Love My Wife'")
make_shirt()
make_shirt(text='I Love My Kids')
make_shirt('M')
make_shirt('S','I Love Israel')


############################################################################################################
#🌟 Exercise 6 : Magicians …

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians() :
    for magician in magician_names:
        print(magician)

def make_great():
    for idx,magician in enumerate(magician_names):
       magician_names[idx] = magician + ' the great '
    print(magician_names)
    

make_great()
show_magicians()

################################################################################################################
#🌟 Exercise 7 : Temperature Advice

def get_random_temp(season = 'spring'):
    if season == 'spring':
       temperature = random.randint(10,20)
    if season == 'summer':
       temperature = random.randint(20,40)
    if season == 'autumn':
       temperature = random.randint(5,15)
    if season == 'winter':
       temperature = random.randint(-10,5)
    print(temperature)
    return temperature

get_random_temp('spring')

user_season = int(input('what is the month ? (1 to 12): '))
user_season_str = ""

if 1<= user_season <=2 or user_season == 12:
    user_season_str = 'winter'
if 3<= user_season <= 5:
    user_season_str = 'spring'
if 6<= user_season <=8:
    user_season_str = 'summer'
if 9<= user_season <=11:
    user_season_str = 'autmn'

def main():

    temperature = get_random_temp(user_season_str)
    print(f'The temperature right now is {temperature} degrees Celsius.')

    if temperature <= 0:
        print("Brrr, that's freezing! Wear some extra layers today")
    elif 0 < temperature < 16:
        print("Quite chilly! Don't forget your coat")
    elif 16 <= temperature < 23:
        print("Waw it's guetting nice")
    elif 24 < temperature < 32:
        print("It's so good to feel the sun")
    else :
        print("Where is the remote of the mazgan ????")
    

main()

