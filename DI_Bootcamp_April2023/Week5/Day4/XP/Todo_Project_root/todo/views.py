from django.shortcuts import render, redirect
from datetime import date
from django.urls import reverse
from .models import Category, Todo
from .forms import TodoForm, CategoryForm

# Create your views here.
def add_todo_view (request):
    if request.method == 'POST':
       data = request.POST
       filled_form = TodoForm(data)
       if filled_form.is_valid():
           filled_form.save()
       else:
           print(filled_form.errors)
        
    #GET
    todo_form = TodoForm()
    context = {'form': todo_form}
    return render (request, 'add_todo_view.html', context)

def display_todos (request):
    
    category_list = Category.objects.all()
    
    
    todos = Todo.objects.all()
    
    context = {'categories': category_list, 'todos': todos}
    return render (request, 'display_todos.html', context)

def mark_done(request, todo_id):
    done = Todo.objects.get(id = todo_id)
    done.has_been_done = True
    done.date_completion= date.today()
    done.save()
    return redirect(reverse('display_todos'))

def add_category_view(request):
    if request.method == 'POST':
       data = request.POST
       filled_form = CategoryForm(data)
       if filled_form.is_valid():
           filled_form.save()
       else:
           print(filled_form.errors)
        
    #GET
    todo_form = CategoryForm()
    context = {'form': todo_form}
    return render (request, 'add_category_view.html', context)
    
    
