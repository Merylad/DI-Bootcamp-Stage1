from django.shortcuts import render, redirect
from django.contrib import messages
from django.views.generic import ListView, View, DetailView
from .models import Film, Director, Review, Poster
from .forms import FilmForm, DirectorForm, ReviewForm, PosterForm
from django.views.generic.edit import CreateView, DeleteView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import UserPassesTestMixin
from accounts.models import UserProfile
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

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
    
class FilmDeleteView(UserPassesTestMixin, DeleteView):
    model = Film
    template_name = 'delete_film.html'
    context_object_name = 'post'
    success_url = reverse_lazy('homepage')
    
        
    def test_func(self):
        if self.request.user.is_staff:
            return True
        else:
            return False   

    
class AddPosterView(CreateView):
    model= Poster
    form_class = PosterForm
    template_name= 'add_poster.html'
    success_url= reverse_lazy('homepage')
    

    
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
    
class FavoriteFilmView(View):
   
    def post(self,request, film_id): 
        
        film = get_object_or_404(Film, id=film_id)
        user = self.request.user
        user_profile = user.user_profile
        print(user_profile)

        if film in user_profile.favorite_film.all():
            user_profile.favorite_film.remove(film)
            messages.success(request, "Film removed from favorites.")
        else:
            user_profile.favorite_film.add(film)
            messages.success(request, "Film added to favorites.")
            
        return redirect('homepage')
        
        
    
        
class FilmDetailView(DetailView):
    model = Film
    template_name = 'filmdetail.html'
    context_object_name = 'film'
        
    
    
    
