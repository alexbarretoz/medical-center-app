from django.db import models
from django.db.models.fields import CharField, URLField,IntegerField

# Create your models here.

class medicalCenter(models.Model):

    id= IntegerField()
    location= CharField(max_length=100)
    idDoctor= IntegerField()



class Doctor(models.Model)
    id= IntegerField()
    name= CharField(max_length=100)
    especiality= CharField(max_length=100)



