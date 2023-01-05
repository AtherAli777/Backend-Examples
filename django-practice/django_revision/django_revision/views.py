from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def result(request):
    user_data = request.GET['user_data']
    return render(request, 'result.html', {'user_data': user_data})
