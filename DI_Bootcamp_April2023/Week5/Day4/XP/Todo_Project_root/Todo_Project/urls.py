"""
URL configuration for Todo_Project project.

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
from todo.views import add_todo_view, display_todos, mark_done, add_category_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add-todo/', add_todo_view, name='add_todo'),
    path('display-todos/', display_todos, name='display_todos'),
    path('display-todos/mark_done/<int:todo_id>/', mark_done, name='mark_done'),
    path('add-category/', add_category_view, name='add_category')
]
