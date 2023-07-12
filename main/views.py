from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django import forms
from main.models import *
from django.views.decorators.csrf import csrf_exempt
import json
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
def technology_lists(request):
    return render(request,'technology-lists.html')
def as_400_users_list(request):
    return render(request,'technology-lists/as-400-users-list.html')
def amazon_web_services_users_list(request):
    return render(request,'technology-lists/amazon-web-services-users-list.html')
def crm_users_list(request):
    return render(request,'technology-lists/crm-users-list.html')
def crm_users_list(request):
    return render(request,'technology-lists/crm-users-list.html')
def erp_users_list(request):
    return render(request,'technology-lists/erp-users-list.html')
def ms_dynamics_crm_users_list(request):
    return render(request,'technology-lists/ms-dynamics-crm-users-list.html')
def peoplesoft_users_list(request):
    return render(request,'technology-lists/peoplesoft-users-list.html')
def quickbooks_users_list(request):
    return render(request,'technology-lists/quickbooks-users-list.html')
def salesforce_crm_users_list(request):
    return render(request,'technology-lists/salesforce-crm-users-list.html')
def sap_users_list(request):
    return render(request,'technology-lists/sap-users-list.html')
def professional_lists(request):
    return render(request,'professional-lists.html')
def cpa_email_list(request):
    return render(request,'professional-lists/cpa-email-list.html')
def attorney_email_list(request):
    return render(request,'professional-lists/attorney-email-list.html')
def cio_email_list(request):
    return render(request,'professional-lists/cio-email-list.html')
def ceo_email_list(request):
    return render(request,'professional-lists/cio-email-list.html')
def cfo_email_list(request):
    return render(request,'professional-lists/cfo-email-list.html')
def cmo_email_list(request):
    return render(request,'professional-lists/cmo-email-list.html')
def cto_email_list(request):
    return render(request,'professional-lists/cto-email-list.html')
def hr_executives_mailing_list(request):
    return render(request,'professional-lists/hr-executives-mailing-list.html')
def loan_officer_email_list(request):
    return render(request,'professional-lists/loan-officer-email-list.html')
def industry_wise_lists(request):
    return render(request,'industry-wise-lists.html')


def automotive_industry_email_list(request):
    return render(request,'industry-wise-lists/automotive-industry-email-list.html')

def banking_and_finance_industry_email_list(request):
    return render(request,'industry-wise-lists/banking-and-finance-industry-email-list.html')
def oil_and_gas_industry_email_list(request):
    return render(request,'industry-wise-lists/oil-and-gas-industry-email-list.html')
def real_estate_industry_email_list(request):
    return render(request,'industry-wise-lists/real-estate-industry-email-list.html')
def manufacturing_industries_email_list(request):
    return render(request,'industry-wise-lists/manufacturing-industries-email-list.html')

def healthcare_lists(request):
    return render(request,'healthcare-lists.html')


def dentists_email_list(request):
    return render(request,'healthcare-lists/dentists-email-list.html')

def hospital_email_list(request):
    return render(request,'healthcare-lists/hospital-email-list.html')
def nurses_email_list(request):
    return render(request,'healthcare-lists/nurses-email-list.html')

def physician_email_list(request):
    return render(request,'healthcare-lists/physician-email-list.html')
def gov_sector_decision_makers_data(request):
    return render(request,'gov-sector-decision-makers-data.html')
def usa_business_email_list(request):
    return render(request,'geo-targeted-lists/usa-business-email-list.html')
def geo_targeted_lists(request):
    return render(request,'geo-targeted-lists.html')
def privacy(request):
    return render(request,'privacy.html')
def refund_policy(request):
    return render(request,'refund-policy.html')



def canada_business_email_list(request):
    return render(request,'geo-targeted-lists/canada-business-email-list.html')

def australia_business_email_list(request):
    return render(request,'geo-targeted-lists/australia-business-email-list.html')

def uk_business_email_list(request):
    return render(request,'geo-targeted-lists/uk-business-email-list.html')




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


@csrf_exempt
def contactdat_azax(request):
    try:
        if request.method == "POST":
            first_name = request.POST.get('first_name', None)
            last_name = request.POST.get('last_name', None)
            email = request.POST.get('email', None)
            phone = request.POST.get('phone', None)
            company = request.POST.get('company', None)
            message = request.POST.get('message', None)
            contacts_no = request.POST.get('contacts_no', None)
            file = request.POST.get('file', None)

            if first_name in (None, ''):
                return HttpResponse(json.dumps({"status": False, "msg": "Please enter your name."}))
            if not first_name.replace(" ", "").replace(".", "").isalpha():
                return HttpResponse(json.dumps({"status": False,
                                                "msg": "Invalid Characters Found In Name, Please don't use any numbers or symbols in name."}))
            if email in (None, ''):
                return HttpResponse(json.dumps({"status": False,
                                                "msg": "Kindly provide your email address, it will be easier for us to contact you."}))
            if phone in (None, ''):
                return HttpResponse(json.dumps({"status": False,
                                                "msg": "Kindly provide your contact number, it will be easier for us to contact you."}))

            contact = ContactData(first_name=first_name)
            print("ok")
            if last_name:
                contact.last_name = last_name
            contact.phone = phone
            contact.email = email
            contact.message = message
            contact.contacts_no = contacts_no
            contact.company = company
            if file:
                contact.file=file
            contact.save()
            return HttpResponse(json.dumps({"status": True, "message":"successfully updated details"}))

    except Exception as e:
        print(e)
        return HttpResponse(json.dumps({"status": False,
                                        "msg": "Sorry, the form could not be saved at this time. Please try again later or contact support for assistance."}))
