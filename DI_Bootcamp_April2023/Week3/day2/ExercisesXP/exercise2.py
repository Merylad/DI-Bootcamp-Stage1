class Dog :
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f'{self.name} is barking')

    def run_speed(self):
        running_speed = self.weight/self.age*10
        return running_speed
    
    def fight(self, other_dog):
        
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight :
            winner = self.name
        else :
            winner = other_dog.name

        return 'The winner is '+ winner
    
dog1 = Dog ('Osia', 7, 5)
dog2 = Dog ('Shiva', 5, 7)
dog3 = Dog ('Duke', 2, 2)

dog1.bark()
print(dog3.run_speed())
print(dog2.fight(dog1))
