from faker import Faker
from faker.providers import DynamicProvider

users = []

def add_users (name, address, langage_code):
    to_add = {
        'name' : name,
        'address' : address,
        'langage_code' : langage_code
    }
    
    users.append(to_add)

fake = Faker()

langage_code_provider = DynamicProvider(
     provider_name="langage_code",
     elements=["Java.", "Python", "C++", "C", "CSS"],
)

fake.add_provider(langage_code_provider)


add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
add_users(fake.name(), fake.address(), fake.langage_code())
print(users)


# [{'name': 'Meredith Ferguson', 'address': '60632 Aimee Parkway\nSouth Joshua, MH 08422', 'langage_code': 'Java.'}, {'name': 'Donald Jackson', 'address': '526 Kevin Summit Suite 729\nEast Angelastad, WI 45336', 'langage_code': 'Python'}, {'name': 'Alex Allen', 'address': '338 Jennifer Crescent Suite 910\nVaughnport, RI 09504', 'langage_code': 'Python'}, {'name': 'Stephanie Daniel', 'address': '3245 Adams Harbors\nNorth Gregorystad, MD 28642', 'langage_code': 'Python'}, {'name': 'Terry Craig', 'address': '822 Sabrina Underpass\nNorth Adamborough, ME 73469', 'langage_code': 'C++'}, {'name': 'Rebecca Lin', 'address': '234 Ellis Ridges\nMartinezberg, TX 83428', 'langage_code': 'C++'}, {'name': 'Hayley Stephens', 'address': '772 Matthew Island Suite 663\nElizabethside, FM 29054', 'langage_code': 'CSS'}]