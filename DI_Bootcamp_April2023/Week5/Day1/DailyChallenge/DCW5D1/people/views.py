from django.shortcuts import render

# Create your views here.
people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

# The first view is /people which renders the list of people along with the rest of the information they have, sorted by age.

def show_list(request):
    sorted_people = sorted(people, key=lambda x: x['age'])
    results = {}
    for index, value in enumerate(sorted_people):
        results[index] = value
    context = {}
    context['results'] = results
    return render(request, 'list_people.html', context)

def show_person(request, id):
    for i in people:
        if i['id'] == int(id):
            context = i
    return render(request, 'people.html', context)