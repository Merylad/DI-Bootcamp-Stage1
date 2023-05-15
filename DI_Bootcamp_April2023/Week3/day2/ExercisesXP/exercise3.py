import random

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
    


class PetDog (Dog):
    def __init__(self, name, age, weight,trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train (self) :
        self.bark()
        self.trained = True

    def play (self, *args):
        names_dog = " ".join(dog.name for dog in args)
        print(self.name + " " +names_dog + ' all play together')
        

    def do_a_trick (self):
        sentence_to_random = ['does a barrel roll', 'stands on his back legs', 'shakes your hand','plays dead' ]

        if self.trained == True :
            print(self.name + ' ' +random.choice(sentence_to_random))
        else:
            print('The dog is not trained')

dog1 = PetDog ('Osia', 7, 5)
dog2 = PetDog ('Shiva', 5, 7)
dog3 = PetDog ('Duke', 2, 2)

dog1.train()
dog1.play(dog2, dog3)
dog1.do_a_trick()
dog2.do_a_trick()