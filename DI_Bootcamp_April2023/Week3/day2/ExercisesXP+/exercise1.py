class Family :
    def __init__ (self, last_name ) :
        self.members = [
            {'name':'Michael','age':35,'gender':'Male','is_child':False},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False}
        ]
        self.lastname = last_name

    def born (self,**kwargs) :
        self.members.append(kwargs)
        print ('Congrats for the new born!')

    def is_18 (self, name):
        for member in self.members :
            if member['name'] == name :
                if member['age'] >= 18 :
                    return True
                else :
                    return False
    
    def family_presentation(self):
        firstnames = ' '.join(member['name'] for member in self.members)
        print(f"In {self.lastname}'s family there is : {firstnames}")

if __name__ == '__main__':                
    adjedj = Family ('Adjedj')
    adjedj.born(name = 'Eliam', age = 3, gender = 'Male', is_child = True )
    print(adjedj.is_18('Eliam'))
    print(adjedj.is_18('Michael'))
    adjedj.family_presentation()
