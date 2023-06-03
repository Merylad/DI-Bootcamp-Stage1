from django import forms
from django.forms import DateInput
from .models import Rental, Customer, Vehicle

# class RentalForm(forms.Form):
#     customer_id = forms.IntegerField(label='Customer ID')
#     vehicle_id = forms.IntegerField(label='Vehicle ID')

class RentalForm(forms.ModelForm):
    class Meta:
        model = Rental
        fields = ('customer', 'vehicle')
        
class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'
        
class VehicleForm (forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = '__all__'
        widgets = {'date_created': DateInput(attrs={'type': 'date'})}