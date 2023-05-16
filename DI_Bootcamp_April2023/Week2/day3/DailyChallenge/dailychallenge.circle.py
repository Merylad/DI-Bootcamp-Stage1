#Challenge 1 :

word = input ('Write a word : ')
dic ={}

for idx,letter in enumerate(word) :
    if letter not in dic :
       dic[letter] = [idx]
    else :
        dic[letter].append(idx)
    

print(dic)

#####################################################################################
#Challenge 2

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$100"
canbuy = []
wallet_value = int(wallet.replace('$','').replace(',',''))

for item, dollar in items_purchase.items() :
    price = int(dollar.replace('$','').replace(',',''))
    if price<= wallet_value :
        canbuy.append(item)

if len(canbuy) > 0:
    print(sorted(canbuy))
else :
    print ("You can't buy nothing :( ")

