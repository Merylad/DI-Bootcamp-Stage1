from anagram_checker import AnagramChecker

def show_menu():
    while True:
        user_choice = input ("If you want to search for anagrams type 'A', \nto exit type 'Q' \nYour choice: ")
        if user_choice.lower() =='a' or user_choice.lower() == 'q':
            break
        else:
            print("You can only write 'A' or 'Q'")
        
    return user_choice
    
def get_user_input():
    while True:
        word = input('Write your word: ')
        word = word.lstrip().rstrip()
        if len(word.split(' ')) >1 :
            print('You can only write one word')
        elif word.isalpha() == False:
            print('You can only write letters')
        else:
            break
    return word

def main():
    user_choice = show_menu()
    if user_choice.lower() == 'q':
        print('See you soon!')
    elif user_choice.lower() == 'a':
        word = get_user_input()
        anagram_search = AnagramChecker('sowpods.txt')
        if anagram_search.is_valid_word(word) == True:
            print ('This is a valid english word')
            anagrams = anagram_search.get_anagrams(word)
            print (f'Your word is: "{word}" \nAnagrams: {anagrams}')
        else:
            print ('This is not a valid english word')

main()
    


    

