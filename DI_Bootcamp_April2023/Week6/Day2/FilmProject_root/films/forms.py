from django import forms
from .models import Film, Director, Review, Poster


class FilmForm (forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        
class DirectorForm (forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
        
class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = '__all__'
        widgets = {
            'review_date': forms.HiddenInput(),
            'rating': forms.RadioSelect(choices=[(i, str(i)) for i in range(0, 6)]),
        }
        
class PosterForm (forms.ModelForm):
    class Meta:
        model = Poster
        fields = '__all__'
            