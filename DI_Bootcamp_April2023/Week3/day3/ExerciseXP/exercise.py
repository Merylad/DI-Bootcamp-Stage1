# Exercise 1 : Built-In Functions


def python_builtin():
    """ This fonction shows how the absolute, the integer and the input methods work."""



    print ('The abs method:')
    number = -5
    abso= abs(number)
    print (f'The absolute of {number} is {abso}')


    print('the int method:')
    str = '2'
    integ = int(str)
    print (f'The integer of {str} is {integ}')

    print ('the input method:')
    word = input('Enter a word: ')
    print (f'the word you entered is: {word}')

# python_builtin()
# print(python_builtin.__doc__)

########################################################################################################
# 🌟 Exercise 2: Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        else:
            return f"{self.amount} {self.currency}s"
    
    def __int__(self) :
        return self.amount
    
    def __repr__(self) :
      return self.__str__()
    
    def __add__(self, other_c):
        new_amount =0
        if isinstance(other_c, Currency):
            if self.currency == other_c.currency :
                new_amount = self.amount + other_c.amount
            else:
                raise TypeError( f'Cannot add between Currency type {self.currency} and {other_c.currency}')
        elif isinstance(other_c, int):
            new_amount = self.amount + other_c
        return Currency(self.currency, new_amount) 
    
    def __iadd__(self, other_c):
         return self.__add__(other_c)


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)  

print(str(c1))  #  5 dollars
print(int(c1))  #  5
print(repr(c1))  #  5 dollars

print(c1 + 5)  #  10 
print(c1 + c2)  #  15

print(c1)  #  5 dollars

c1 += 5
print(c1)  #  10 
print(c4) # 10 shekels

print(int(c2)) #10

c1 += c2   
print(c1)  #20 dollars

# print(c1 + c3) #TypeError: Cannot add between Currency type dollar and shekel

print (c3 + c4) #11 shekels


