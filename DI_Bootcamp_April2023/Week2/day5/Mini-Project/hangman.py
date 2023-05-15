import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']

def chose_word(wordslist):
    word = random.choice(wordslist)
    return word

def display_hangman():
      print(' ______''\n''|      |''\n''|''\n''|''\n''|''\n''|_______')

display_hangman()

word = 'credit card'

def display_word(word):
    guessed_word = []     

    for char in word :
        if char != ' ' :
            guessed_word.append('_')
        else :
            guessed_word.append(' ')

    print(" ".join(guessed_word))
    return guessed_word

guessed_word = display_word(word)
     

def input_player():
    letters_list=[]
    letter = input('Chose a letter : ').lower()

    if letter in letters_list :
        print ('You already picked that letter, chose another one')
        letter = input('Chose a letter').lower()
    letters_list.append(letter)

    if letter in word :
        for idx, char in enumerate(word):
            if char == letter :
                guessed_word[idx] = letter
        print(" ".join(guessed_word))
    




input_player()


