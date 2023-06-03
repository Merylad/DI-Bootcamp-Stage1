from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.TextField()
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
    
class Vehicle(models.Model):
    vehicle_type = models.ForeignKey('VehicleType', related_name='vehicles', on_delete=models.CASCADE)
    date_created = models.DateField()
    real_cost = models.FloatField()
    size = models.ForeignKey('VehicleSize', related_name='vehicles', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.id)
    
    def clean(self):
        if self.date_created > timezone.now().date():
            raise ValidationError("Creation date cannot be in the future.")
    
    
class VehicleType(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
    
class VehicleSize(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
    
class Rental(models.Model):
    rental_date = models.DateField()
    return_date = models.DateField(default = None, blank = True, null = True)
    customer = models.ForeignKey(Customer, related_name='rentals', on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, related_name='rentals', on_delete=models.CASCADE)
    
    def clean(self):
        if self.return_date and self.rental_date and self.return_date < self.rental_date:
            raise ValidationError("Return date cannot be before rental date.")
        if self.rental_date < self.vehicle.date_created:
            raise ValidationError("Rental date cannot be before the creation of the vehicle.")
        if self.return_date and self.return_date > timezone.now().date():
            raise ValidationError("Return date cannot be in the future.")
        
        if self.return_date :
            overlapping_rentals = self.vehicle.rentals.filter(
                return_date__gt=self.rental_date,
                rental_date__lt=self.return_date
            )
            if overlapping_rentals.exists():
                raise ValidationError("The vehicle is already rented during the specified period.")
          
    
    
class RentalRate(models.Model):
    daily_rate = models.FloatField()
    vehicle_type = models.ForeignKey(VehicleType, related_name='rental_rates', on_delete=models.CASCADE)
    size = models.ForeignKey(VehicleSize, related_name='vehicle_size', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.daily_rate)
    
    
        
    
    
class RentalStation(models.Model):
    name = models.CharField(max_length=50)
    capacity = models.SmallIntegerField()
    address = models.ForeignKey('Address', related_name='rental_stations', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    
class Address(models.Model):
    address = models.CharField(max_length=200)
    address2 = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.SmallIntegerField()
    
    def __str__(self):
        return self.address
    

    
    