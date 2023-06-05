from django.shortcuts import render
from django.views.generic import ListView
from .models import Film, Director, Review, Poster
from .forms import FilmForm, DirectorForm, ReviewForm, PosterForm
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
    
class AddPosterView(CreateView):
    model= Poster
    form_class = PosterForm
    template_name= 'add_poster.html'
    success_url= reverse_lazy('homepage')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reviews'] = Review.objects.all()  
        return context
    
class DirectorCreateView(CreateView):
    model= Director
    form_class = DirectorForm
    template_name= 'add_director.html'
    success_url= reverse_lazy('homepage')
    
class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    success_url = reverse_lazy('homepage')
    
