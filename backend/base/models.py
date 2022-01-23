from ctypes import addressof
#from curses import use_default_colors
from email.mime import image
from itertools import product
from operator import truediv
from os import name
from pyexpat import model
from unicodedata import category
from unittest.util import _MAX_LENGTH
from xml.dom.expatbuilder import theDOMImplementation
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True) #one to many relation
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    categoryImage = models.ImageField(null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable= False)

    def __str__(self) -> str:
        return self.name
