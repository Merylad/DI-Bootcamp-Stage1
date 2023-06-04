from django.db import models
from datetime import date

# Create your models here.
class Film(models.Model):
    title = models.CharField(max_length=30, default='Untitled')
    release_date = models.DateField(default = date.today)
    created_in_country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name = 'country_created', default = None)
    available_in_countries = models.ManyToManyField('Country', related_name = 'country_available')
    category= models.ManyToManyField('Category')
    director = models.ManyToManyField('Director')
    
    def __str__(self):
        return self.title

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
