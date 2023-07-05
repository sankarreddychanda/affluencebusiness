from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django import forms
from main.models import *
from django.core.exceptions import ValidationError
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


# def contact(request):
#     return render(request,'contact.html')
def phone_appending(request):
    return render(request,'phone-appending.html')
def about(request):
    return render(request,'about.html')
def total_addressable_market(request):
    return render(request,'total-addressable-market.html')
def investors_email_list(request):
    return render(request,'investors-email-list.html')














class contactForm(forms.Form):
    first_name = forms.CharField(max_length=100,required=True)
    last_name = forms.CharField(max_length=100 ,required=False)
    company = forms.CharField(max_length=250 ,required=True)
    contacts_no = forms.CharField(max_length=100 ,required=False)
    phone = forms.CharField(max_length=12, help_text="Make sure it is a 10 digit mobile number", required=False)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea, required=False)

    def clean_mobile(self):
        phone = self.cleaned_data.get("phone")
        if phone.isdigit() == False:
            raise forms.ValidationError("Please use a  digit numbers only input")
        return self.cleaned_data.get("phone")


def contact(request):
    if request.method == "POST":

        form = contactForm(request.POST)
        print(form)
        if form.is_valid():
            print("--")
            email = form.cleaned_data.get("email")
            first_name = form.cleaned_data.get("first_name")
            last_name = form.cleaned_data.get("last_name")
            phone = form.cleaned_data.get("phone")
            company = form.cleaned_data.get("company")
            message = form.cleaned_data.get("message")
            contacts_no = form.cleaned_data.get("contacts_no")
            contact = ContactData(first_name=first_name)
            print("ok")
            if last_name:
                contact.last_name = last_name
            contact.phone = phone
            contact.email = email
            contact.message = message
            contact.contacts_no = contacts_no
            contact.company = company
            contact.save()
            return HttpResponseRedirect("/")

        else:
            print(form.errors)
            return render(request, "contact.html", {"form": form} )

    else:
        return render(request, "contact.html")