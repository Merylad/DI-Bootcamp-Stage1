#🌟 Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

osia = Cat ('osia', 7)
shiva = Cat ('shiva', 1)
duke = Cat ('duke', 4)

def find_oldest_cat(*cats) :
    max_age = 0
    for cat in cats:        
        if cat.age > max_age :
            max_age = cat.age
            oldest_cat = cat.name
    print(f"The oldest cat is '{oldest_cat}' and it is {max_age} years old")
    return oldest_cat


find_oldest_cat (shiva, duke, osia)

##########################################################################
#🌟 Exercise 2 : Dogs

class Dogs :
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')
    
    def jump(self) :
        jump_height = self.height*2
        print (f'{self.name} jumps {jump_height} cm high!')

davids_dog = Dogs ('Rex', 50)
print(davids_dog.__dict__)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dogs ('Teacup', 20)
print(sarahs_dog.__dict__)
sarahs_dog.bark()
sarahs_dog.jump()

def find_bigger(*args):
    max_height = 0
    for dog in args :
        if dog.height > max_height:
            max_height = dog.height
            print (f'{dog.name} is the bigger dog')

find_bigger(davids_dog, sarahs_dog)

############################################################################🌟 Exercise 3 : Who’s The Song Producer?

class Song :
    def __init__(self, lyrics) :
        self.lyrics = lyrics

    def sing_me_a_song(self) :
        lyrics_of_song = '\n'.join(song for song in self.lyrics)
        return lyrics_of_song

stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

print(stairway.sing_me_a_song())

############################################################################Exercise 4 : Afternoon At The Zoo

class Zoo :
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []


#Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.

    def add_animal (self,new_animal) :
        if new_animal in self.animals: 
            pass
        else :
            self.animals.append(new_animal)

#Create a method called get_animals that prints all the animals of the zoo.
    
    def get_animals (self) :
        print (self.animals)

#Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

    def sell_animal(self,animal_sold) :
        if animal_sold in self.animals :
            self.animals.remove(animal_sold)

#Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.

    def sort_animals (self) :
        sorted_animals = {}
        for animal in sorted(self.animals) :
            if animal[0] in sorted_animals:
                sorted_animals[animal[0]].append(animal)
            else :
                sorted_animals[animal[0]] = [animal]

                sorted_animals_two = {}
        
        for i, key in enumerate(sorted_animals):
            sorted_animals_two[i+1] = sorted_animals [key]
        
        for key, value in sorted_animals_two.items() :
            if len(value) == 1:
                sorted_animals_two[key] = value[0]

        return sorted_animals_two
    
    def get_groups (self):
        print(self.sort_animals())

thoiry = Zoo ('Thoiry')
print(thoiry.__dict__)

thoiry.add_animal('monkey')
thoiry.add_animal('medusa')
thoiry.add_animal('elephant')
thoiry.add_animal('kangourou')
thoiry.add_animal('koala')
thoiry.add_animal('crocodile')
thoiry.add_animal('turtle')
thoiry.add_animal('monkey')
print(thoiry.__dict__)
thoiry.sell_animal('turtle')
print(thoiry.__dict__)
thoiry.get_groups()


