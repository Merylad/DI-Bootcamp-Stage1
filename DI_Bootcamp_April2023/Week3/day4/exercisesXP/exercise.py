# 🌟 Exercise 1 – Random Sentence Generator

from random import choice
def get_words_from_file ():
    with open('sowpods.txt', 'r') as txt:
        list_words = txt.readlines()
        return list_words
    


def get_random_sentence(lenght) :
    list_words = get_words_from_file()
    sentence = []
    for word in range(lenght) :
        word = choice(list_words).replace('\n', '').lower()
        sentence.append(word)
    return " ".join(sentence)

def main():
    while True :
        try:
           lenght = int( input ('How long do you want the sentence to be: '))
           break
        except : 
            print ('This is not a number !')

    if 2<= int(lenght) <= 20 :
        print(get_random_sentence((lenght)))

    else :
        raise Exception ('The lenght needs to be between 2 and 20')
    
# main()
    

#🌟 Exercise 2: Working With JSON

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

data['company']['employee']['birthdate'] = '19/02/1970'

print (data)

with open('json_file', 'w') as file_obj:
    json.dump(data, file_obj, indent=2)


