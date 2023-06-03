"""
URL configuration for bike_store project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rent.views import (rental, 
                        add_rental, 
                        rental_by_pk, 
                        customer_by_pk,
                        customers_list, 
                        add_customer, 
                        vehicle_list,
                        vehicle_by_pk,
                        add_vehicle)
        

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/', rental, name='rental-list'),
    path ('rent/rental/<int:pk>', rental_by_pk),
    path('rent/rental/add', add_rental, name='create-rental'),
    path ('rent/customer/<pk>', customer_by_pk, name = 'customer_by_pk'),
    path ('rent/customer/', customers_list, name = 'customers_list'),
    path ('rent/add_customer', add_customer, name = 'add_customer'),
    path ('rent/vehicle', vehicle_list, name = 'vehicle_list'),
    path('rent/vehicle/<int:pk>', vehicle_by_pk, name = 'vehicle_by_pk'),
    path('rent/add_vehicle', add_vehicle, name = 'add_vehicle')
    
]
