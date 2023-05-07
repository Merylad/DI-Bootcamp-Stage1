# Exercise 3 : Outputs

# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9       TRUE
#     >>> 3 == 3 == 3       TRUE
#     >>> bool(0)           FALSE
#     >>> bool(5 == "5")    FALSE
#     >>> bool(4 == 4) == bool("4" == "4")  TRUE
#     >>> bool(bool(None))  FALSE
#     x = (1 == True)  TRUE
#     y = (1 == False)  FALSE
#     a = True + 4   5 
#     b = False + 10   10

#     print("x is", x)  X IS TRUE
#     print("y is", y)   Y IS FALSE
#     print("a:", a)    A : 5
#     print("b:", b)    B : 10


# Exercise 4 : How Many Characters In A Sentence ?

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
n = len(my_text)
print(n)

# Exercise 5: Longest Word Without A Specific Character

sentence = input ("Please write the longest sentence you can without using the letter 'a': ").lower ()
if "a" not in sentence:
    print ("Congrats ! You've made it")
elif "a" in sentence :
    print ("Ohoh ! Try again")