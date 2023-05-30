from django import forms
from .models import Gif, Category

class GifForm (forms.ModelForm):
    
    categories = forms.ModelMultipleChoiceField(queryset=Category.objects.all())

    class Meta:
        model = Gif
        fields= ['title', 'url', 'uploader_name', 'categories']

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']