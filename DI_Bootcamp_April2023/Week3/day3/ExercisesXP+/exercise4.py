import datetime

def get_time ():
    current_date = datetime.datetime.now()
    day = current_date.day
    month = current_date.month
    year = current_date.year
    print (f'We are the {day}/{month}/{year}')

get_time() #We are the 5/16/2023