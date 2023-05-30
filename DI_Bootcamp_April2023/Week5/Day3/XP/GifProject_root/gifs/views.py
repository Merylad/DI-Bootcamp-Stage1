from django.shortcuts import render, redirect
from .models import Gif, Category
from .forms import GifForm, CategoryForm

# Create your views here.
def homepage (request):
    gifs = Gif.objects.all()
    context = {'gifs': gifs}
    return render (request, 'homepage.html', context)

def add_gif_view(request):
    if request.method == 'POST':
        form = GifForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')
    else:
        form = GifForm()
    return render(request, 'add_gif.html', {'form': form})

def add_category_view(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')
    else:
        form = CategoryForm()
    return render(request, 'add_category.html', {'form': form})

def category_view(request, category_id):
    category = Category.objects.get(id=category_id)
    gifs = category.gifs.all()
    return render(request, 'category.html', {'category': category, 'gifs': gifs})

def categories_view(request):
    categories = Category.objects.all()
    return render(request, 'categories.html', {'categories': categories})

def gif_view(request, gif_id):
    gif = Gif.objects.get(id=gif_id)
    return render(request, 'gif.html', {'gif': gif})