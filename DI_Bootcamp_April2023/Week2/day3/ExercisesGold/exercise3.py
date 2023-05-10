birthdays = {
    'Michael' : '1986/12/3',
    'Naomie' : '2013/07/10',
    'Eliam' : '2019/12/08',
    'Papa' : '1952/01/28',
    'Maman' : '1951/05/20'
}
dic_user={}
user_name = input("Write a name : ")
user_birthday = input("Write the birthday YYYY/MM/DD : ")
dic_user[user_name] = user_birthday

birthdays.update(dic_user)

user_answer = input(f'Chose a name in the list : {list(birthdays.keys())} :')

from datetime import datetime
date_str = birthdays[user_answer]
date = datetime.strptime(date_str, "%Y/%m/%d")

formatted_date = date.strftime("%d of %B, %Y")

print(f"{user_answer}'s birthday is the {formatted_date} ")

