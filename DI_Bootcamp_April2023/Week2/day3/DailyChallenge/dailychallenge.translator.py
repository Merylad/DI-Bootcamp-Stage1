from translate import Translator

def translate_french_words(french_words):
    translator = Translator(to_lang="en", from_lang="fr")
    translations = {}

    for word in french_words:
        translation = translator.translate(word)
        translations[word] = translation

    return translations

# French words list
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Translate French words
translations = translate_french_words(french_words)

# Print the translated words
print(translations) #{'Bonjour': 'Hello', 'Au revoir': 'Goodbye', 'Bienvenue': 'Welcome', 'A bientôt': 'We look forward to hearing from you soon.'}