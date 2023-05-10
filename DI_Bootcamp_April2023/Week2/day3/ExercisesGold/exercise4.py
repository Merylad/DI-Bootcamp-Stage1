items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

prices = ", ".join(f"{k}:{v}" for k,v in items.items())

print (f"Here are the fruits prices : {prices}.")


items2 = {
    "banana": {
        "price": 4 , 
        "stock":10
        },
    "apple": {
        "price": 2, 
        "stock":5},
    "orange": {
        "price": 1.5 , 
        "stock":24},
    "pear": {
        "price": 3 , 
        "stock":1}
}
total = 0
for fruit, detail in items2.items():
    price = detail['price']
    stock = detail['stock']
    total = total + price * stock

print(total)