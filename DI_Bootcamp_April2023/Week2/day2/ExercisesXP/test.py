
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Egg sandwich","Pastrami sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
print("The deli has run out of pastrami!")
while sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
    sandwich_made = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich_made)
    print(f"I made your {sandwich_made}")