from django.shortcuts import render
from . import multiplier

def home(request):
    return render(request, 'index.html')

def contact(request):
    user_input = request.GET['user_input']
    user_input = multiplier.multiply(user_input)
    return render(request, 'contact.html', {'user_input':user_input})
