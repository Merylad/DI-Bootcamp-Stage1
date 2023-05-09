family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for name, age in family.items() :
    if age <3 :
        print(name + 'will pay 0')
        continue
    if age <12 :
        print(name + "will pay 10")
        total += 10
    else :
        total += 15
        print(name +" will pay 15")
    

print(f"the whole family will pay §{total}")

