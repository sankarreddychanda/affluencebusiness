"""affluencebusiness URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", home),
    path("b2b-email-list/", b2b_email_list),
    path("data-verification/", data_verification),
    path("email-appending/", email_appending),
    path("data-appending/", data_appending),
    path("data-profiling/", data_profiling),
    path("data-intelligence/", data_intelligence),
    path("data-cleansing/", data_cleansing),
    path("contact-us/", contact),
    path("phone-appending/", phone_appending),
    path("about-us/", about),
    path("total-addressable-market/", total_addressable_market),
    path("investors-email-list/", investors_email_list),
    path("technology-lists/", technology_lists),
    path("as-400-users-list/", as_400_users_list),
    path("amazon-web-services-users-list/", amazon_web_services_users_list),
    path("crm-users-list/", crm_users_list),
    path("erp-users-list/", erp_users_list),
    path("ms-dynamics-crm-users-list/", ms_dynamics_crm_users_list),
    path("peoplesoft-users-list/", peoplesoft_users_list),
    path("quickbooks-users-list/", quickbooks_users_list),
    path("salesforce-crm-users-list/", salesforce_crm_users_list),
    path("sap-users-list/", sap_users_list),
    path("professional-lists/", professional_lists),
    path("cpa-email-list/", cpa_email_list),
    path("attorney-email-list/", attorney_email_list),
    path("cio-email-list/", cio_email_list),
    path("ceo-email-list/", ceo_email_list),
    path("cfo-email-list/", cfo_email_list),
    path("cmo-email-list/", cmo_email_list),
    path("cto-email-list/", cto_email_list),
    path("hr-executives-mailing-list/", hr_executives_mailing_list),
    path("loan-officer-email-list/", loan_officer_email_list),
    path("industry-wise-lists/", industry_wise_lists),
    path("automotive-industry-email-list/", automotive_industry_email_list),
    path("banking-and-finance-industry-email-list/", banking_and_finance_industry_email_list),
    path("healthcare-lists/", healthcare_lists),
    path("dentists-email-list/", dentists_email_list),
    path("hospital-email-list/", hospital_email_list),
    path("oil-and-gas-industry-email-list/", oil_and_gas_industry_email_list),
    path("real-estate-industry-email-list/", real_estate_industry_email_list),
    path("manufacturing-industries-email-list/", manufacturing_industries_email_list),
    path("nurses-email-list/", nurses_email_list),
    path("physician-email-list/", physician_email_list),
    path("gov-sector-decision-makers-data/", gov_sector_decision_makers_data),
    path("usa-business-email-list/", usa_business_email_list),
    path("geo-targeted-lists/", geo_targeted_lists),
    path("canada-business-email-list/", canada_business_email_list),
    path("australia-business-email-list/", australia_business_email_list),
    path("uk-business-email-list/", uk_business_email_list),
    path("privacy/", privacy),
    path("refund-policy/", refund_policy),
    path("contactdat_azax/", contactdat_azax),



] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



