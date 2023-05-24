#1 import psycopg2
#2 make connection

connection = psycopg2.connect(
    database="Hollywood", 
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

#3 open the cursor to start making transactions
cursor = connection.cursor()

#4 Make your queries
query = "SELECT * FROM actor"
cursor.execute(query)

#5 If the query is a select - retrieve the data
result = cursor.fetchall() # --> list of tuple
result = cursor.fetchone() # --> one tuple

# --> loop to display the data 

#6 If the query is a INSERT, DELETE, UPDATE, CREATE, ALTER, DROP
connection.commit() #saving the changes in the database

#7 Close the cursor, and close the connection
cursor.close()
connection.close()




import psycopg2

# connect to the DATABASE
connection = psycopg2.connect(
    database="Hollywood", 
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

# Creating a cursor object
cursor = connection.cursor()

def get_all_actors() :
    query = "SELECT * FROM actor"
    cursor.execute(query)
    result = cursor.fetchall()

    for actor in result:
        print(f"The actor is {actor[1]} {actor[2]}. He is {actor[-1]}")

# get_all_actors()

def get_actors_salary_higher(user_answer) :
    query_user = f"SELECT * FROM actor WHERE salary > {user_answer}"
    cursor.execute(query_user)
    result = cursor.fetchall()
    
    for actor in result:
        print(f"The actor is {actor[1]} {actor[2]}. He is {actor[-1]}")

# get_actors_salary_higher(1000000)

def get_actors_by_lastname(lastname) :
    query_user = f"SELECT * FROM actor WHERE last_name = '{lastname}' LIMIT 1"
    cursor.execute(query_user)
    result = cursor.fetchone() # give back a tuple
    print(result)
    print(f"The actor is {result[1]} {result[2]}. He is {result[-1]}")  

# get_actors_by_lastname("Clooney")

def insert_actor(*info) :
    query_user = f"""
    INSERT INTO actor 
    (first_name, last_name, date_birth, number_oscars, salary, nationality)
    VALUES {info}
    """
    cursor.execute(query_user)
    connection.commit()  

# insert_actor("Emma", "Stone", '1967-03-12', 2, 2000000, "American")

def select_student_and_books() :
    query_user = f"""
    SELECT ROUND(AVG(age),1)
    FROM library as li
    JOIN book ON book.book_id = li.book_id
    JOIN student ON student.student_id = li.student_id
    WHERE title = 'Alice In Wonderland'
    """
    cursor.execute(query_user)
    results = cursor.fetchone()  
    print(results[0])

# select_student_and_books()

# def create_computer() :
#     query_user = f"""
#     CREATE TABLE computer (
#         id SERIAL PRIMARY KEY,
#         brand VARCHAR(100)
#     )
#     """
#     cursor.execute(query_user)
#     connection.commit()  

# create_computer()

def change_computer() :
    query_user = f"""
    ALTER TABLE computer
    """
    cursor.execute(query_user)
    connection.commit()  

# create_computer()


cursor.close()
connection.close()

import psycopg2

def manage_connection(query) :
    # connect to the DATABASE
    try : 
        connection = psycopg2.connect(
            database="Hollywood", 
            user='postgres',
            password='root',
            host='127.0.0.1', #or IP address
            port='5432'
        )

        with connection: #
            with connection.cursor() as cursor: #it closes the transaction
                cursor.execute(query)
                result = cursor.fetchall()
                return result
         
    except :
        pass
    finally :
        connection.close() #need to specificaly closed the connection


def get_all_actors() :
    query_user = "SELECT * FROM actor"
    result = manage_connection(query_user)
    for actor in result:
        print(f"The actor is {actor[1]} {actor[2]}. He is {actor[-1]}")

get_all_actors()