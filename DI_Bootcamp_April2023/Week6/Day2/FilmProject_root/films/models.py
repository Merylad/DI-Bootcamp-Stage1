from django.db import models
from datetime import date
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.


class Country (models.Model):
    name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name
    
class Category (models.Model):
    name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name
    
class Director (models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
class Review (models.Model):
    film = models.ForeignKey('Film', on_delete=models.CASCADE, related_name = 'film_name')
    review_text = models.TextField()
    rating =models.FloatField(validators=[
                              MinValueValidator(0.0),
                              MaxValueValidator(5.0)])
    review_date = models.DateField(default = date.today)
    
class  Poster(models.Model):
    image = models.ImageField()
    explanation_img = models.CharField(max_length=15)
    
    def __str__(self):
        return self.explanation_img
    
class Film(models.Model):
    title = models.CharField(max_length=30, default='Untitled')
    release_date = models.DateField(default = date.today)
    created_in_country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name = 'country_created', default = None)
    available_in_countries = models.ManyToManyField('Country', related_name = 'country_available')
    category= models.ManyToManyField('Category')
    director = models.ManyToManyField('Director')
    image_id = models.OneToOneField('Poster', on_delete=models.CASCADE, default = None, null = True)
    
    def __str__(self):
        return self.title
    
    