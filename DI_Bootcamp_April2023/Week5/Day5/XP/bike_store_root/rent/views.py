from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import date
from .models import Customer, Vehicle,VehicleType, VehicleSize, Rental,RentalRate,RentalStation, Address
from .forms import RentalForm, CustomerForm, VehicleForm

# Create your views here.
def rental (request):
    rentals = Rental.objects.order_by('return_date', 'rental_date')
    context = {'rentals': rentals}
    return render (request, 'rental.html', context )

def rental_by_pk (request, pk):
    rental = Rental.objects.get(id = pk)
    context = {"rental": rental}
    return render (request, 'rental_by_pk.html', context)
    

def add_rental(request):
    if request.method == 'POST':
        form = RentalForm(request.POST)
        if form.is_valid():
            customer = form.cleaned_data['customer']
            vehicle = form.cleaned_data['vehicle']
            
            # Check if the vehicle is currently being rented
            if vehicle.rentals.exists():
                messages.error(request, 'The vehicle is currently being rented.')
            else:
                # Create a new rental
                new_rental = Rental(customer=customer, vehicle=vehicle, rental_date = date.today())
                new_rental.save()
                messages.success(request, 'Rental added successfully.')
                
    else:
        form = RentalForm()
        
    context = {'form': form}
    return render(request, 'add_rental.html', context)

def add_customer (request):
    if request.method =='POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            first_name_to_add = form.cleaned_data['first_name']
            last_name_to_add = form.cleaned_data['last_name']
            email_to_add= form.cleaned_data['email']
            phone_to_add= form.cleaned_data['phone_number']
            address_to_add= form.cleaned_data['address']
            city_to_add= form.cleaned_data['city']
            country_to_add = form.cleaned_data['country']
            
            new_customer = Customer (first_name = first_name_to_add, 
                                     last_name = last_name_to_add,
                                     email = email_to_add,
                                     phone_number = phone_to_add,
                                     address = address_to_add,
                                     city = city_to_add,
                                     country = country_to_add)
            new_customer.save()
            messages.success(request, 'Customer added successfully.')
            
    else:
        form = CustomerForm()
        
    context = {'form' : form}    
        
    return render (request, 'add_customer.html', context)        
    
    
def customer_by_pk (request, pk):
    customer = Customer.objects.get(id = pk)
    context = {"customer": customer}
    return render (request, 'customer_by_pk.html', context)
   

def customers_list (request):
    customers = Customer.objects.order_by('last_name')
    context = {'customers': customers}
    return render(request, 'customer_list.html', context)

def vehicle_list(request):
    category = VehicleType.objects.all()
    vehicle_list = Vehicle.objects.all
    context = {'Vehicles': vehicle_list, 'Category': category}
    return render (request, 'vehicle_list.html', context)

def vehicle_by_pk(request, pk):
    vehicle = Vehicle.objects.get(id = pk)
    rentals = Rental.objects.filter(vehicle = pk)
    context = {'vehicle': vehicle, 'rentals': rentals}
    return render(request, 'vehicle_by_pk.html', context)

def add_vehicle(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Vehicle added successfully.')
        else:
            messages.error(request, 'The date cannot be in the future')
            
            
    form = VehicleForm()
    context = {'form': form}
    return render (request, 'add_vehicle.html', context)
    

