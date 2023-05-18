from urllib.request import urlopen
from time import time

def time_to_load(url):
    website = urlopen(url)
    open_time = time()
    output = website.read()
    close_time= time()
    website.close()
    time_passed = close_time - open_time
    print (f'Time for loading {url} : {time_passed}')


time_to_load('https://www.google.com/')
time_to_load('http://learn.di-learning.com/courses/')
time_to_load('https://github.com/')

# Time for loading https://www.google.com/ : 0.09158945083618164
# Time for loading http://learn.di-learning.com/courses/ : 0.00014638900756835938
# Time for loading https://github.com/ : 0.36341381072998047