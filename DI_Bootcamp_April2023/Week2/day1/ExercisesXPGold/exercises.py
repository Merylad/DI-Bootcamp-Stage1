# exercise 1

print("\033[34m Hello \033[0m world\n" * 4 + "\033[34m I \033[0m love python\n" * 4)

#exercise 2

month = int( input('Write a month from 1 to 12: '))
if 1<=month <= 2 or month == 12:
    print("This is winter")
elif 3<= month <=5 :
    print("This is spring")
elif 6<= month <=8 :
    print("This is summer")
elif 9<= month <=11 :
    print("This is autumns")


