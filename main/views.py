from django.shortcuts import render

# Create your views here.
def b2b_email_list(request):
    return render(request,'b2b-email-list.html')