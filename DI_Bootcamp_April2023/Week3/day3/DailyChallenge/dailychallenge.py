class Circle :
    def __init__(self, radius):
        self.radius = radius

    def get_area(self) :
        return 3.14*self.radius*self.radius
    
    def __str__(self):
        area = self.get_area()
        sentence = f'The circle has a radius of: {self.radius} and its area is: {area}'
        return sentence
    
    def __repr__(self):
        area = self.get_area()
        sentence = f'The circle has a radius of: {self.radius} and its area is: {area}'
        return sentence
    
    def __add__(self, other_circle) :
        if isinstance(other_circle, Circle):
            new_circle = Circle (self.radius + other_circle.radius)
            return new_circle
        else :
            raise TypeError("We can't add them if they're not two circles")
        
    def __gt__(self, other_circle):
        if isinstance(other_circle, Circle):
            if self.radius > other_circle.radius :
                return True
            else :
                return False
        else :
            raise TypeError("We can't compare them if they're not two circles")
            
    def __eq__(self, other_circle) :
        if isinstance(other_circle, Circle):
            if self.radius == other_circle.radius :
                return True
            else :
                return False
        else :
            raise TypeError("We can't compare them if they're not two circles")  

        
    
a = Circle (20)
b = Circle (10)
c = Circle (50)
d = Circle (40)
e = Circle (30)

list_circle = [a, b, c, d, e]
print(sorted(list_circle))

print (a + b)
print (a + e == c)
            
    

