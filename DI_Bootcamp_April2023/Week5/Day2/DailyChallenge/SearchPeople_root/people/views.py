from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from .models import Person

# Create your views here.
def info_by_phone(request,phone):
    try:
        person = Person.objects.get(phone_number=phone)
        return render(request, 'person_by_phone.html', {'person': person})
    except Person.DoesNotExist:
        return render(request, 'person_not_found.html')

def info_by_name(request,name):
    try:
        person = Person.objects.get(name=name)
        return render(request, 'person_by_name.html', {'person': person})
    except Person.DoesNotExist:
        return render(request, 'person_not_found.html')
