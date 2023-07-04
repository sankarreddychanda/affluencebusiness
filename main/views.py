from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'index.html')
def b2b_email_list(request):
    return render(request,'b2b-email-list.html')

def data_appending(request):
    return render(request,'data-appending.html')

def email_appending(request):
    return render(request,'email-appending.html')

def data_verification(request):
    return render(request,'data-verification.html')


def data_profiling(request):
    return render(request,'data-profiling.html')

def data_intelligence(request):
    return render(request,'data-intelligence.html')

def data_cleansing(request):
    return render(request,'data-cleansing.html')


def contact(request):
    return render(request,'contact.html')
