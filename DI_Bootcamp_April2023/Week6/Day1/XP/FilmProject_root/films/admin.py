from django.contrib import admin
from .models import Film, Category, Director, Country

# Register your models here.
admin.site.register(Film)
admin.site.register(Category)
admin.site.register(Director)
admin.site.register(Country)