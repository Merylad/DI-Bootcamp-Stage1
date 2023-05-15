class Circle :
    def __init__(self, radius =1.0):
        self.radius = radius

    def compute_perimeter(self) :
        perimeter = 2*3.14*self.radius
        return perimeter
    
    def compute_area(self):
        area = 3.14*self.radius*self.radius
        return area
    
    def definition(self):
        perimeter = self.compute_perimeter()
        area = self.compute_area()
        print(f'the radius is {self.radius} the perimeter is {perimeter} and the area is {area}')

my_circle = Circle (3)

my_circle.definition()