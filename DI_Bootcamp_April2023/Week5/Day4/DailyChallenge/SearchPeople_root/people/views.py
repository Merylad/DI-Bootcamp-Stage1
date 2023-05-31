from django.shortcuts import render, redirect
from django.core.exceptions import ObjectDoesNotExist
from .models import Person
from .forms import PersonSearchForm

# Create your views here.
def info_by_phone(request,phone):
    try:
        person = Person.objects.get(phone_number=phone)
        return render(request, 'person_by_phone.html', {'person': person})
    except Person.DoesNotExist:
        return render(request, 'person_not_found.html')

def info_by_name(request,name):
    try:
        person = Person.objects.get(name__icontains=name)
        return render(request, 'person_by_name.html', {'person': person})
    except Person.DoesNotExist:
        return render(request, 'person_not_found.html')
    
def search_person(request):
    if request.method == 'POST':
        form = PersonSearchForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data.get('name')
            phone_number = form.cleaned_data.get('phone_number')

            if name:
                return redirect('info_by_name', name=name)
            elif phone_number:
                return redirect('info_by_phone', phone=phone_number)
    else:
        form = PersonSearchForm()

    context = {'form': form}
    return render(request, 'search_person.html', context)
