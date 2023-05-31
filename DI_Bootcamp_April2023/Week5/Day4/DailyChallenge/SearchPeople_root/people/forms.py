from django import forms
from phonenumber_field.formfields import PhoneNumberField

class PersonSearchForm(forms.Form):
    name = forms.CharField(required=False)
    phone_number = PhoneNumberField(required=False)