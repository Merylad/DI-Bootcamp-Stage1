topping = []
new_topping = ''

while new_topping != 'quit':
    new_topping = input("Enter a pizza topping: ")
    if new_topping != 'quit':
        print(f"ok, i'll add {new_topping} to your pizza, type quit if you have enough")
        topping.append(new_topping)

topping_str= ",".join(topping)
price = (len(topping)*2.5 + 10)

print(f"{topping_str} will be add to your pizza. That will cost §{price}")