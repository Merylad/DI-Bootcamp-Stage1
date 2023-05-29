from django.shortcuts import render
from .models import Animal, Family

# Create your views here.

# /family/X, where X is the ID (primary key) of the given family. Should show a list of all animals in that family.

def list_of_animals(request, familyid):
    animals = Animal.objects.filter(family_id = familyid)
    return render(request, 'family.html', {'animals': animals})

# /animal/X, where X is the ID (primary key) of the given animal. Should show all the information about the given animal.

def show_animal (request, animalid):
    context = Animal.objects.get(id = animalid)
    return render(request, 'show_animal.html', {'animal' :context})

# /animals/ - should show a list of all the animals. When you click on any of the animals in the list, you should be taken to /animal/X (see above).
def list_animals(request):
    context = Animal.objects.all()
    return render(request, 'animals.html', {'animals': context})