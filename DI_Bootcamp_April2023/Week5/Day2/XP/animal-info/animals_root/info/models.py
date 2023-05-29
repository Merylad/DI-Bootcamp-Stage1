from django.db import models

# Create your models here.
class Animal(models.Model):
    name= models.CharField(max_length=50) 
    legs = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.FloatField()
    family = models.ForeignKey('Family', on_delete=models.SET_NULL, null=True)
    
class Family(models.Model):
    name = models.CharField(max_length=30)
    