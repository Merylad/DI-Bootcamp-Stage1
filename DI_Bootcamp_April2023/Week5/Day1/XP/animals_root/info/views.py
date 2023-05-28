from django.shortcuts import render
import json

filename='/home/meryl/DI-Bootcamp-Stage1/DI_Bootcamp_April2023/Week5/Day1/XP/animals_root/info/animaldata.json'
with open(filename, 'r') as file:
    data = json.load(file)

animals = data['animals']
families = data['families']

# Create your views here.
def family (request, id):
    context = {}
    context['animal_list'] = []
    for animal in animals:
        if animal['family'] == int(id):
            context['animal_list'].append(animal['name'])
    
    return render(request, 'family.html', context)

def animal (request, id):
    animal_selected = None
    for animal in animals:
        if animal['id'] == id:
            animal_selected = animal
    return render(request, 'animal.html', {'animal': animal_selected})