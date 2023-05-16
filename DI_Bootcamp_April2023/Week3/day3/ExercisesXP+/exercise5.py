import datetime

def time_to_january():
    timenow = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    deadline = "2024-01-01 00:00:00"
    start = datetime.datetime.strptime(timenow,'%Y-%m-%d %H:%M:%S')
    ends = datetime.datetime.strptime(deadline, '%Y-%m-%d %H:%M:%S')
    print(f'Time left from the 1st of January : {ends-start}')

time_to_january() #Time left from the 1st of January : 229 days, 3:26:30