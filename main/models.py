from django.db import models

import datetime, decimal
import hashlib
import time
from django.db.models import *
from django.db import models

from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import Permission
from django.contrib.auth.models import PermissionsMixin, Group
from django.contrib.contenttypes.models import ContentType

from django.utils import timezone
from django.utils.text import slugify
from django.conf import settings




import hashlib, time





class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, mobile=None, first_name=None, email=None, password=None, **extra_fields):
        """
        Creates and saves a User with the given username and password.
        """
        if not mobile:
            missing =False
        else:
            missing=True

        # if not email:
        #     raise ValueError('The given email must be set')
        if email:
            email = self.normalize_email(email)
        if mobile:
            if len(mobile) in (10,12):
                pass
            else:
                raise ValueError('Mobile Number is invalid')

        user = self.model(username=username, email=email, first_name=first_name, mobile=mobile, **extra_fields)
        if password:
            user.set_password(password)
        user.save(using=self._db)
        if missing == False:
            user.is_sm_login =True

            user.save()
        return user

    def create_user(self, username, mobile=None, first_name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)

        return self._create_user(username, mobile, first_name, email, password, **extra_fields)

    def create_superuser(self, username, mobile, first_name, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        return self._create_user(username, mobile, first_name, email, password, **extra_fields)


class UserType(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.title

from PIL import Image
from sorl.thumbnail import get_thumbnail

class Designation(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True,editable=False ,db_index=True)

    def save(self):
        if not self.id:
            unique_slugify(self, self.title, 'slug', )
        super(Designation, self).save()

    def __str__(self):
        return str(self.title)


gender_choices =(("M", "Male"), ("F", "Female"), ("U", "Others"))
class UserProfile(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('username', max_length=40, unique=True)  # Added
    mobile = models.CharField('mobile number', unique=True, max_length=14, null=True, blank=True)
    email = models.EmailField('email address', null=True, blank=True, unique=True)
    first_name = models.CharField('first name', max_length=50, null=True)
    last_name = models.CharField('last name', max_length=30, null=True, blank=True)
    fcm_token = models.CharField(max_length=256, null=True, blank=True)
    fcm_token_web = models.CharField(max_length=256, null=True, blank=True)
    date_joined = models.DateTimeField('date joined', auto_now_add=True)
    dob = models.DateField(null=True, blank=True)
    alt_mobile = models.CharField(max_length=14, blank=True, null=True)

    type = models.ForeignKey(UserType, blank=True, null=True, on_delete=models.SET_NULL)
    is_active = models.BooleanField('active', default=True)
    #is_partofanybussines = models.BooleanField('part_of_anybussiness', default=False)

    is_superuser = models.BooleanField("administrator", default=False)
    is_staff = models.BooleanField("staff_user", default=False)
    groups = models.ManyToManyField(Group, blank=True, related_name="uprofile_groups")
    user_permissions = models.ManyToManyField(Permission, blank=True, null=True, related_name="uprofile_permissions")
    last_location_name = models.CharField(max_length=255, blank=True, null=True)
    objects = UserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ["mobile", "first_name", 'email']
    last_visit = models.DateTimeField(null=True, blank=True)
    is_sm_login = models.BooleanField(default=False)
    which_sm = models.IntegerField(default=0, choices=((0, "No SM"), (1, "Google"), (2, "Facebook")))
    email_verified = models.BooleanField(default=False)
    mobile_verified = models.BooleanField(default=False)
    image = models.ImageField(blank=True, null=True, upload_to="images")
    thumbnail = models.ImageField(blank=True, null=True, upload_to="images")
    mobile_thumbnail_url = models.URLField(blank=True)
    gender = models.CharField(choices=gender_choices, max_length=1, default="M")
    designation = models.ForeignKey(Designation, on_delete=models.SET_NULL, blank=True, null=True)
    manager = models.ForeignKey("self", on_delete=models.SET_NULL, blank=True, null=True,related_name="reporting_manager")

    


    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
        ordering = "first_name",

    def save(self, *args, **kwargs):
        if self.image:
            try:
                super(UserProfile, self).save(*args, **kwargs)
                path = self.image.path
                im = Image.open(path)
                im = im.convert("RGB")
                im = im.save(self.image.path)
                im2 = get_thumbnail(self.image, '100x100', crop='center', quality=90)
                self.thumbnail.name = im2.name
                self.mobile_thumbnail_url = get_full_path(self.thumbnail.url)
            except Exception as e:
                print(e)
                pass


        super(UserProfile, self).save(*args, **kwargs)

        

    @property
    def get_full_name(self):
        if self.first_name:
            if self.last_name:
                full_name = '%s %s' % (self.first_name, self.last_name)
            else:
                full_name = self.first_name

            return full_name.strip()
        else:
            return self.username

    @property
    def has_children(self):
        return UserProfile.objects.filter(manager=self).count() > 0

    def get_short_name(self):
        return self.first_name
    def mobile_missing(self):
        if self.mobile not in ('', None):
            return True
        return False
    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)


    def get_staff_user_list(self):
        return [staff for staff in self.managers.all()]

    def get_users_managers_mobile(self):
        return [staff.mobile for staff in self.managers.all()]

    def get_users_managers_fcmtoken(self):
        return [staff.fcm_token for staff in self.managers.all()]

    def mobile_check(self):
        if self.mobile.isdigit() and len(self.mobile) in [10, 12]:
            return True
        return False

    def full_name_check(self):
        if self.first_name in ('', None):
            return False
        if len(self.first_name) < 3:
            return False
        return True




    @property
    def get_listings(self):
        return self.listing_set.all()

    @property
    def get_listings_count(self):
        return self.listing_set.count()

    def __str__(self):
        if self.first_name:
            return "%s" % self.first_name
        else:
            return "%s" % self.username




class ContactData(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,null=True,blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=15,null=True,blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    contacts_no = models.CharField(max_length=255, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    file = models.FileField(upload_to="contact_files",null=True,blank=True)

    def __str__(self):
        return self.first_name

