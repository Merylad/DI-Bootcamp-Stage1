birthdays = {
    'Michael' : '1986/12/3',
    'Naomie' : '2013/07/10',
    'Eliam' : '2019/12/08',
    'Papa' : '1952/01/28',
    'Maman' : '1951/05/20'
}

print(birthdays.keys())

user_answer = input(f'Chose a name : ')

while user_answer not in birthdays.keys() :
       print(f"Sorry, we don't have the birthday information for {user_answer} !")
       user_answer = input(f'Chose a name : ')

if user_answer in birthdays.keys() :
    from datetime import datetime
    date_str = birthdays[user_answer]
    date = datetime.strptime(date_str, "%Y/%m/%d")
    
    formatted_date = date.strftime("%d of %B, %Y")
    
    print(f"{user_answer}'s birthday is the {formatted_date} ")
