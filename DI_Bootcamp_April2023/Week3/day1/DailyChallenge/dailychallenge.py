class Farm :
    def __init__(self, farm_name):
       self.name = farm_name
       self.animals = {}

    def add_animal(self, animal, number = 1):
        if animal in self.animals:
            self.animals[animal] += number
        else:
            self.animals[animal] = number
        
        return self.animals
    
    def get_info (self) :
        info = f"{self.name}'s farm"
        count = '\n'.join(f'{key}: {value}' for key, value in self.animals.items())

        sentence = f"{info} \n\n {count} \n \n          E-I-E-I-O!"
        return sentence
    
    def get_animal_types(self):
        animals = []
        for key in self.animals.keys() :
            animals.append(key)
        animals.sort()
        return animals
    
    def get_short_info(self):
        list_animals = self.get_animal_types()
        # new_list = [animal + 's' if self.animals[animal]>1 else animal  for animal in list_animals]
        new_list = []
        for animal in list_animals : 
            if self.animals[animal] >1 :
                animal = animal + 's'
                new_list.append(animal)
            else :
                 new_list.append(animal)
        string = ', '.join(list_animals[:-1]) + ' and ' + list_animals[-1]
        print(f"{self.name}'s farm has {string}.")
        
       



macdonald = Farm('McDonald')
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('dog')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
macdonald.get_short_info()
