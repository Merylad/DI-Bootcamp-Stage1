import psycopg2

connection = psycopg2.connect(
    database="Restaurant", 
    user='postgres',
    password='Naomie2013',
    host='localhost', 
    port='5432'
)
cursor = connection.cursor()




class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        
    def save(self):
        query_user = f"""
        INSERT INTO Menu_Items (item_name, item_price)
        VALUES ('{self.name}' , '{self.price}')
        """
        cursor.execute(query_user)
        connection.commit()  
        
    def delete(self):
        query_user = f"""
        DELETE FROM Menu_Items
        WHERE name = '{self.name}'
        """
        cursor.execute(query_user)
        connection.commit()  
        
    def update(self, new_name=None, new_price=None):
        query = "UPDATE Menu_Items SET"
        if new_name:
            query += f" item_name = '{new_name}',"
        if new_price:
            query += f" item_price = {new_price},"
        query = query.rstrip(",")
        query += f" WHERE item_name = '{self.name}'"
        cursor.execute(query)
        connection.commit()
    
class MenuManager:
    
    @classmethod
    def get_by_name (cls,item):
        query = f"""
        SELECT * FROM Menu_Items
        WHERE item_name = '{item}'
        """   
        cursor.execute(query)
        result = cursor.fetchone()
        if item :
            return item
        else:
            return None
        
    @classmethod
    def all_items(cls):
        query = f"""
        SELECT * FROM Menu_Items"""
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    
    
if __name__ == "__main__":
    item = MenuItem('Sushi', 35)
    item.save()
    print(MenuManager.get_by_name('Burger'))
    item.update('Maki', 40)
    item2 = MenuManager.get_by_name('Beef Stew')
    items = MenuManager.all_items()
    print(items)


    
        







    cursor.close()
    connection.close()
