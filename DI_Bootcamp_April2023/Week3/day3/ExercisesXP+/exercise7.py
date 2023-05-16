import datetime

def get_time ():
    current_date = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return current_date

def time_until_holidays():
    today = get_time()
    holidays = "2023-05-26 00:00:00"
    start = datetime.datetime.strptime(today,'%Y-%m-%d %H:%M:%S')
    end = datetime.datetime.strptime(holidays, '%Y-%m-%d %H:%M:%S')
    time_left= end-start
    print("Time left until the next holiday:", time_left)


time_until_holidays() #Time left until the next holiday: 9 days, 2:21:13
