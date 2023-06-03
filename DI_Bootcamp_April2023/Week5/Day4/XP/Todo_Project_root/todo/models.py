from django.db import models

# Create your models here.
class Category (models.Model):
    name= models.CharField(max_length=30)
    image = models.URLField()
    
    def __str__(self):
        return self.name
    
class Todo (models.Model):
    title = models.CharField(max_length=30)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False, blank = True)
    date_creation = models.DateTimeField(auto_now_add=True)
    deadline_date = models.DateTimeField()
    date_completion = models.DateTimeField(default = None, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name = 'todos')
    
    def __str__(self):
       return self.title
   
    