#Part 1
sentence = 'A good book would sometimes cost as much as a good house.'


class Text :
    def __init__(self, text) :
        self.text = text.lower().replace('.','').replace(',','').replace("'",' ').replace('!','').replace('?','').replace('\n','')
        

#a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.

    def frequency_word (self, word) :
        num = 0
        word = word.lower()
        for current_word in self.text.split(' ') :
            if current_word == word :
                num +=1
        return num

    def common_word (self) :
        num = 0
        most_common = []
        for word in self.text.split(' ') :
            if self.frequency_word(word) > num:
                num = self.frequency_word(word)

        for word in self.text.split(' ') :
            if self.frequency_word(word) == num :
                if word not in most_common:
                    most_common.append(word)
                
        print(f'The most common word: ' + '/'.join(most_common))
        return most_common

    def unique_word (self):
        unique_words = []
        for word in self.text.split(' ') :
            if self.frequency_word(word) == 1:
                unique_words.append(word)

        return unique_words

    
    def from_file(filename):
        with open (filename, 'r') as f:
            content = ' '.join(f.readlines())
            content_object = Text(content)
        return content_object

stranger = Text.from_file('the_stranger.txt')
print(stranger.frequency_word('the'))
stranger.common_word()                            
print(stranger.unique_word())


text = Text(sentence)       
print(text.unique_word())
print(text.frequency_word('the'))
text.common_word()

#Part II



    
