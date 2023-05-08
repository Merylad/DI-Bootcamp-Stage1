#CHALLENGE 1


number= int(input("Chose a number : "))
length = int(input("Chose a lenght : "))
liste_number = []

for num in range(length):
    liste_number.append(number*(num+1))

print(liste_number)

####################################################################################################################################################

#CHALLENGE 2

string = input("Write a word with a lot of duplicated letters : ")
previous = ""
new_string = ""
for letter in string :
    if letter == previous :
        continue
    else :
        new_string += letter
        previous = letter

print (new_string)
