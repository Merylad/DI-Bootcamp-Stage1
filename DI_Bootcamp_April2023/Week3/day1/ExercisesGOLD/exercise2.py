import random 

class MyList :
    def __init__(self, letters):
        self.letters= letters

    def reversed_list(self):
        reversed_list = list(reversed(self.letters))
        return reversed_list
    
    def sorted_list(self):
        sorted_list = sorted(self.letters)
        return sorted_list
    
    def list_random(self):
        list_random = [random.randint(1,100) for _ in self.letters]
        return list_random
    

letters = MyList(['c', 'd', 'a', 'b'])
print(letters.reversed_list())
print(letters.sorted_list())
print(letters.list_random())