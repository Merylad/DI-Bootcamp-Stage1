# Exercise 1 : Hello World

print("Hello World "*4)


# Exercise 2 : Some Math

99**3*8

# Exercise 3 : What Is The Output ?

# >>> 5 < 3   false
# >>> 3 == 3   true
# >>> 3 == "3"  false
# >>> "3" > 3   false
# >>> "Hello" == "hello"   false 


# Exercise 4 : Your Computer Brand

computer_brand = "Meryl"
print(f"I have a {computer_brand} computer")

# Exercise 5 : Your Information

name = "Meryl"
age = 34
shoe_size=39
info = f"Hi, my name is {name} and i'm {age}, my shoe size is {shoe_size} and i hate wearing hills"
print(info)

#Exercise 6 : A & B

a = 10
b = 5
if a>b :
    print("Hello World")


# Exercise 7 : Odd Or Even

number = int(input("Give me a number: "))
if (number%2==0):
    print(f"{number} is even")
else:
    print(f"{number} is odd ")

# Exercise 8 : What’s Your Name ?

user_name = input("What's your name?").lower()
my_name = "meryl"
if user_name == my_name:
    print("No way!!!! We do have the same name!")
else :
    print(f"Nice to meet you, {user_name}!")


# Exercise 9 : Tall Enough To Ride A Roller Coaster

height = int(input("What's your size (inches)?"))
if height >= 145:
    print("You're tall enough to ride!")
else:
    print("You need to grow some more to ride")


#Lise exercise
people = int(input("How many people do you expect at your wedding ? "))
if people <= 50 :
    print(f"that will cost §4000")
elif 50 < people <=100 :
    print(f"that will cost §10 000")
elif 100 < people <= 200:
    print(f"that will cost §15 000")
else :
    print(f"that will cost §20 000")
