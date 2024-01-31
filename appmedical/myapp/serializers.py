from rest_framework import serializers
from .models import Doctor, medicalCenter, Consultation, Patient

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__' 


class medicalCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = medicalCenter
        fields = '__all__' 


class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = '__all__' 

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__' 