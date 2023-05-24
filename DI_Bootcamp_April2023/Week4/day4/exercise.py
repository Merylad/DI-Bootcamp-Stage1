import psycopg2

connection = psycopg2.connect(
    database = 'Hollywood',
    user = 'postgres',
    password = 'Naomie2013',
    host = '127.0.0.1',
    port = 5432
)

cursor = connection.cursor()

query = "SELECT * FROM actor"
cursor.execute(query)
result = cursor.fetchall()

print(result)

cursor.close()
connection.close()

def get_all_actors():
        query = "SELECT * FROM actor"
        cursor.execute(query)
        result = cursor.fetchall()

        for actor in result :
            print(f'The actor is {actor[1]} {actor[2]}. He is {actor[-1]}')
        
       
