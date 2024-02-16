from django.db import models
from django.db.models.fields import CharField, URLField,IntegerField

# Create your models here.


class medicalCenter(models.Model):

    id= models.AutoField(primary_key=True)
    location= models.CharField(max_length=100)
    name= models.CharField(max_length=100 , null= False)
    

class Consultation(models.Model):
    id= models.AutoField(primary_key=True)
    date=models.DateTimeField(auto_now_add=True)
    diagnosis= models.CharField(max_length=100, null= False)
    treatment= models.CharField(max_length=100, null= False)

class Doctor(models.Model):
    id= models.AutoField(primary_key=True)
    name= models.CharField(max_length=100 , null= False)
    especiality= models.CharField(max_length=100 , null= False)
    idmedicalCenter= models.ManyToManyField(medicalCenter)
    
    def __str__(self):
        return self.name
    

class Patient(models.Model):
    id= models.AutoField(primary_key=True)
    name= models.CharField(max_length=100, null= False)
    dni= models.IntegerField(null= False, unique=True)
    age= models.CharField(max_length=100)
    idConsultation= models.ForeignKey(Consultation, on_delete= models.CASCADE)
    idDoctor= models.ManyToManyField(Doctor)
    

    def __str__(self):
        return self.name





