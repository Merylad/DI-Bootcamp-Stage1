# 🌟 Exercise 1 : Convert Lists Into Dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

family =dict(zip(keys, values))
print (family)

########################################################################################
# 🌟 Exercise 2 : Cinemax

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for number in family.values() :
    if number <3 :
        continue
    if number <12 :
        total += 10
    else :
        total += 15

print(total)

lst_names= input("Tell me your names (separate by a space) : ").split()
lst_ages= input("tell me your ages (separate by a space) : ").split()
familybis = dict(zip(lst_names, lst_ages))
print(familybis)
totalbis = 0
for number in familybis.values() :
    age=int(number)
    if age <3 :
        continue
    if age <12 :
        totalbis += 10
    else :
        totalbis += 15

print(totalbis)

##########################################################################################
#🌟 Exercise 3: Zara

brand = {
    'creation_date': 1975,
    'name': 'Zara',
    'creator_name': ['Amancio', 'Ortega', 'Gaona'], 
    'type_of_clothes': ['men', 'women', 'children', 'home'], 
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000, 
    'major_color': {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}

brand['number_stores'] = '2'

client_str = ",".join(brand['type_of_clothes'])
sentence = f"{client_str} are our customers"
print(sentence)

brand['country_creation'] = 'spain'

if 'international_competitors' in brand :
    brand['international_competitors'].append('Desigual')

del brand['creation_date']

print(brand['international_competitors'])

print(brand['major_color']['US'])

print(len(brand))

print(brand.keys())

more_on_zara = {
    'creation_date' : 1975,
    'number_stores' : 10000
}

brand.update(more_on_zara)

print(brand['number_stores'])       #this is 10 000 bc 'number_stores' exist already in brand so its value have been replaced


#########################################################################################
#Exercise 4 : Disney Characters

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}

for character in users :
    disney_users_A[character] = users.index(character)
print (disney_users_A)

disney_users_B = {}

for character in users :
    disney_users_B[users.index(character)] = character
print(disney_users_B)

users_sorted = sorted(users)
disney_users_C = {}

for character in users_sorted :
    disney_users_C[character] = users_sorted.index(character)
print (disney_users_C)

disney_users_D = {}
for character in users :
    if 'i' in character :
        disney_users_D[character] = users.index(character)
print (disney_users_D)

disney_users_E = {}
for character in users :
    if character.startswith('M') or character.startswith('P') :
        disney_users_E[character] = users.index(character)
print (disney_users_E)

