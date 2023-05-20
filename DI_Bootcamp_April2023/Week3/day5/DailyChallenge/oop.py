# Part 1

# What is a class? a template for creating object

# What is an instance? an object 

# What is encapsulation? for hiding details

# What is abstraction? representing the essential features of an object while hiding the unnecessary details

# What is inheritance? a new childclass that inherit from a parent class have all his properties. The child can use his methods

# What is multiple inheritance? the same in more levels (child, grandchilds...)

# What is polymorphism? in a child class we can 're-write' a method that will overide the parent method only if it has the exact same name

# What is method resolution order or MRO? the order in which the inheritance hierarchy is traversed to locate the method or attribute


#Part 2

import random

class Card :
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f'({self.value}, {self.suit})'

class Deck :
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        self.cards = self.create_deck()
        

    def create_deck(self):
        deck=[]
        for suit in self.suits :
            for value in self.values:
                new_card = Card (suit, value)
                deck.append(new_card)

        return deck
    
    def shuffle_cards(self):
        random.shuffle(self.cards)
        return self.cards
    
    def deal_card(self):
        self.shuffle_cards()
        if len(self.cards) > 0:
            deal_card = random.choice(self.cards)
            self.cards.remove(deal_card)
            print (f'The card is {deal_card}')
            print (self.cards)


a = Deck()
a.deal_card()