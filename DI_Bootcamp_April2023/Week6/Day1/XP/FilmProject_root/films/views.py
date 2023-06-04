from django.shortcuts import render
from django.views.generic import ListView
from .models import Film, Director
from .forms import FilmForm, DirectorForm
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

# Create your views here.
class HomePageView(ListView):
    model = Film
    template_name = 'homepage.html'
    context_object_name = 'films'
    
class AddFilmView(CreateView):
    model= Film
    form_class = FilmForm
    template_name= 'add_film.html'
    success_url= reverse_lazy('homepage')
    
class DirectorCreateView(CreateView):
    model= Director
    form_class = DirectorForm
    template_name= 'add_director.html'
    success_url= reverse_lazy('homepage')