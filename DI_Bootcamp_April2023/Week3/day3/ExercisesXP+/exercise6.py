from datetime import date

def time_of_living(year, month, day):
    current_date = date.today()
    time_of_birth =date(year, month, day)
    time = (current_date - time_of_birth).days*24*60
    print (f'{time} minutes passed since you were born')

time_of_living(1988,11,24) #18131040 minutes passed since you were born