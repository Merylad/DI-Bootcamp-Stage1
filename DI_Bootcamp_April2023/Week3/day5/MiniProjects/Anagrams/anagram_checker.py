class AnagramChecker:
    def __init__(self, file):
        with open(file, 'r') as file:
            self.word_list = file.read().splitlines()

    def is_valid_word(self,word):
        if word.upper() in self.word_list :
            return True
        else:
            return False
    
    def get_anagrams(self,word):
        anagrams = []
        sorted_word = sorted(word.lower())
    
        for w in self.word_list:
           if self.is_anagram(w, word) == True and w.lower() != word.lower():
               anagrams.append(w)

        anagram_str = ', '.join(anagrams).lower()
    
        return anagram_str
    
    def is_anagram(self, word1, word2):
        sorted_word1 = sorted(word1.lower())
        sorted_word2= sorted(word2.lower())
        if sorted_word1 == sorted_word2:
            return True
        else:
            return False
