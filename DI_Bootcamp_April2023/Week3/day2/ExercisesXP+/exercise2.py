from exercise1 import Family

class TheIncredibles(Family):
    def __init__(self, lastname) :
        super().__init__(lastname)
        self.members = [{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}]

    def use_power (self, name) :
        for member in self.members :
            if member['name'] == name:
                if member['age'] >=18 :
                    print (member['power'])
                else :
                    raise Exception (name + 'must be over 18 to use his power')
                
    def incredible_presentation (self) :
        super().family_presentation()
        print ('This is the incredible family :')
        for member in self.members :
             print (member['name']+ ' gots the power of '+ member['power'])



superfamily = TheIncredibles ('Benichou')
superfamily.incredible_presentation()
superfamily.born(name = 'Baby Jack', age = 0, gender = 'Male', is_child = True, power= 'unknown power' )
superfamily.incredible_presentation()
