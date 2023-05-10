birthdays = {
    'Michael' : '1976/12/3',
    'Naomie' : '2013/07/10',
    'Eliam' : '2019/12/08',
    'Papa' : '1952/01/28',
    'Maman' : '1951/05/20'
}

name, birthday = zip(*(birthdays.items()))

print("Helllloooooo !! Welcome!!!")
print('You can look up the birthdays of the people in the list!')

user_answer = input(f'Chose a name in the list : {name} :')

from datetime import datetime
date_str = birthdays[user_answer]
date = datetime.strptime(date_str, "%Y/%m/%d")

formatted_date = date.strftime("%d of %B, %Y")

print(f"{user_answer}'s birthday is the {formatted_date} ")


