from django.shortcuts import render, redirect
from django.utils import timezone
from django.urls import reverse
from .models import Category, Todo
from .forms import TodoForm

# Create your views here.
def add_todo_view (request):
    if request.method == 'POST':
       data = request.POST
       filled_form = TodoForm(data)
       filled_form.save()
        
    #GET
    todo_form = TodoForm()
    context = {'form': todo_form}
    return render (request, 'add_todo_view.html', context)

def display_todos (request):
    
    todos = Todo.objects.all()
    
    context = {'todos': todos}
    return render (request, 'display_todos.html', context)

def mark_done(request, todo_id):
    done = Todo.objects.get(id = todo_id)
    done.has_been_done = True
    done.date_completion= timezone.now()
    done.save()
    return redirect(reverse('display_todos'))
    
    
