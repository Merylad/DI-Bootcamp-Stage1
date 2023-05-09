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


