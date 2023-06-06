"""
URL configuration for FilmProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from films.views import (HomePageView, 
                         AddFilmView, 
                         DirectorCreateView, 
                         ReviewCreateView, 
                         AddPosterView,
                         FilmDeleteView,
                         FilmDetailView,
                         FavoriteFilmView)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path ('homepage', HomePageView.as_view(), name = 'homepage'),
    path ('homepage/add-film', AddFilmView.as_view(), name = 'add_film'),
    path ('homepage/add-director', DirectorCreateView.as_view(), name = 'add_director'),
    path ('homepage/add-review', ReviewCreateView.as_view(), name = 'add_review'),
    path ('homepage/add-poster', AddPosterView.as_view(), name = 'add_poster'),
    path('homepage/favorites/<int:film_id>', FavoriteFilmView.as_view(), name = 'favorites'),
    path('homepage/details/<int:pk>', FilmDetailView.as_view(), name = 'details'),
    path('homepage/delete-film/<int:pk>', FilmDeleteView.as_view(), name = 'delete_film' ),
    path('accounts/', include ('accounts.urls')) 
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)