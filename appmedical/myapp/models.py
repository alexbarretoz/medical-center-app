from django.db import models
from django.db.models.fields import CharField, URLField,IntegerField

# Create your models here.





class Doctor(models.Model):
    id= models.AutoField(primary_key=True)
    name= models.CharField(max_length=100 , null= False)
    especiality= models.CharField(max_length=100 , null= False)

    def __str__(self):
        return self.name
    

class medicalCenter(models.Model):

    id= models.AutoField(primary_key=True)
    location= models.CharField(max_length=100)
    idDoctor= models.ForeignKey(Doctor, on_delete= models.CASCADE)


class Consultation(models.Model):
    id= models.AutoField(primary_key=True)
    date=models.DateTimeField(auto_now_add=True)
    diagnosis= models.CharField(max_length=100, null= False)
    treatment= models.CharField(max_length=100, null= False)
    idDoctor= models.ForeignKey(Doctor, on_delete= models.CASCADE)




class Patient(models.Model):
    id= models.AutoField(primary_key=True)
    name= models.CharField(max_length=100, null= False)
    dni= models.IntegerField(null= False, unique=True)
    age= models.CharField(max_length=100)
    idConsulta= models.ForeignKey(Consultation, on_delete= models.CASCADE)

    def __str__(self):
        return self.name





