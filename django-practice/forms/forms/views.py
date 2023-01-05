from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def result(request):
    user_input = request.GET['user_input']
    return render(request, 'result.html', {'home_input': user_input})
