string = input("Please, write a string: ")
a = len(string)
if a < 10:
    print("this is not long enough")
elif a > 10:
    print ("this is too long")

if a == 10:
    firstchar = string[0]
    lastchar = string[-1]
    print(f"{firstchar} is the first character and {lastchar} is the last one")

result = ""
for sym in string :
    result = result + sym
    print (result)

import random
str_list = list (string)
random.shuffle(str_list)
shuffled = ''.join(str_list)
print (shuffled)