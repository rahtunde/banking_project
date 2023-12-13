from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth import login


# Create your views here.

class SignUpView(View):

    def get(self, request):
        return render(request, 'accounts/signup.html')
    
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        repeted_password = request.POST.get('repeted_password')
        email = request.POST.get('email')
        
        if password != repeted_password:
            return render(request, 'accounts/signup.html', {'error': 'password do not match'})
        if username and password and email:
            if User.objects.filter(username=username).exists():
                return render(request, 'accounts/signup.html', {'error': 'username already exist!'})
            elif User.objects.filter(email=email).exists():
                return render(request, 'accounts/signup.html', {'error': 'email already exist!'})
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                login(request,user)
                print("pass")
                return redirect('account:login')
        else:
            return render(request, 'accounts/signup.html', {'error': 'Invalid input. Please fill in all fields'})
            
            

class LoginView(View):
    def get(self, request):
        return render(request, 'accounts/login.html')
    
    def post(self, request):
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return render(request, 'accounts/login.html', {'error': 'Invalid credentials'})
    