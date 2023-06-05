from django.contrib import admin
from .models import Film, Category, Director, Country, Review, Poster

# Register your models here.
admin.site.register(Film)
admin.site.register(Category)
admin.site.register(Director)
admin.site.register(Country)
admin.site.register(Review)
admin.site.register(Poster)