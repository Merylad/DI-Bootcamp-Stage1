# 🌟 Exercise 1 : Set

my_fav_numbers= [3,24,10,8]

my_fav_numbers.extend([2013,2019])
my_fav_numbers.pop(-1)

friend_fav_numbers = [2,19,1988]

our_fav_numbers = my_fav_numbers+ friend_fav_numbers


#🌟 Exercise 2: Tuple
#Given a tuple which value is integers, is it possible to add more integers to the tuple?
#answer: no because it is immutable

#🌟 Exercise 3: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
basket.pop(-1)
basket.append("Kiwi")
basket.insert(0, "Apples")
apples_count = basket.count("Apples")
basket.clear()
print(basket)

#🌟 Exercise 4: Floats

# 1)a float is a number with a decimal
#2) we could do a list by setting the difference between each number of the list

start = 1.5
end = 5
step = 0.5
liste = []
current = start

while current <= end:
    liste.append(current)
    current = current + step
print (liste)

#🌟 Exercise 5: For Loop

#1

for number in range(1,21) :
    print(number)

for number in range(1,21) :
    if number % 2 == 1 :
        print(number) 

#🌟 Exercise 6 : While Loop

name = ""
my_name = "meryl"

while name != my_name:
    name = input("What's your name ? ")


#🌟 Exercise 7: Favorite Fruits

fav_fruits = input("Enter your favorite fruits, seperate them by a space :")
fav_fruits.split()
new_fruit = input("Write the name of a fruit: ")
new_fruit.split()
if new_fruit in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy!")
    

#Exercise 8: Who Ordered A Pizza ?

topping = []
new_topping = ''

while new_topping != 'quit':
    new_topping = input("Enter a pizza topping: ")
    if new_topping != 'quit':
        print(f"ok, i'll add {new_topping} to your pizza, type quit if you have enough")
        topping.append(new_topping)

price = (len(topping)*2.5 + 10)

print(f"That will cost §{price}")

#Exercise 9: Cinemax

family_number = int(input("How many people are you ?" ))

total = 0

for number in range(family_number) :
    age = int(input("Age of a family member : "))
    if age < 3 :
        ticket = 0
    elif 3<= age < 12 :
        ticket = 10
    elif age >= 12 :
        ticket = 15
    total = total + ticket
print(f"That will cost §{total}")


number_teen= int (input("How many teenagers are you ? "))
list_teen = []

for number in range(number_teen):
    name_teen= input("What's your name ? ")
    age_teen = input ("How old are you? ")
    if age_teen>= 21:
        list_teen.append(name_teen)


print (list_teen)


#Exercise 10 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
while sandwich_orders :
    sandwich_made = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich_made)
    print(f"I made your {sandwich_made}")

#Exercise 11 : Sandwich Orders#2

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Egg sandwich","Pastrami sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
print("The deli has run out of pastrami!")
while sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
    sandwich_made = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich_made)
    print(f"I made your {sandwich_made}")
