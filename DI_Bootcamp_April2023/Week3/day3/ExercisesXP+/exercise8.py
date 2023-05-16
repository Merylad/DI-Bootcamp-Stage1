Planetes = {
    'Earth': 1,
    'Mercury': 0.2408467,
    'Venus' : 0.61519726,
    'Mars' : 1.8808158,
    'Jupiter' : 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune' : 164.79132 
}

def get_age(number) :
    for planete, period in Planetes.items():
        x = period * 31557600
        age = round(number/x, 2)
        print (f'On {planete} you are {age} years old')

get_age(1000000000) 

#On Earth you are 31.69 years old
# On Mercury you are 131.57 years old
# On Venus you are 51.51 years old
# On Mars you are 16.85 years old
# On Jupiter you are 2.67 years old
# On Saturn you are 1.08 years old
# On Uranus you are 0.38 years old
# On Neptune you are 0.19 years old