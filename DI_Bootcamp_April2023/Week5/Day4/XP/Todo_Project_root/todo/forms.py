from django import forms
from .models import Category, Todo

class TodoForm (forms.ModelForm):
    class Meta:
        model = Todo
        fields = '__all__'
        widgets = {
            'date_completion': forms.HiddenInput(),
        }
        
        