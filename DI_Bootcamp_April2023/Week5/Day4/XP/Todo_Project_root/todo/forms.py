from django import forms
from .models import Category, Todo

class TodoForm (forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('title', 'details', 'deadline_date', 'category')
        widgets = {
            'deadline_date': forms.DateInput(attrs={'type':'date'})
        }
       
class CategoryForm (forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'