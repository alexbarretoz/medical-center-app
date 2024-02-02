from rest_framework import viewsets
from .models import Doctor,Consultation, medicalCenter, Patient
from .serializers import DoctorSerializer, ConsultationSerializer, medicalCenterSerializer, PatientSerializer

# Create your views here.

class DoctorViewSet(viewsets.ModelViewSet):
    queryset= Doctor.objects.all()
    serializer_class= DoctorSerializer

class ConsultationViewSet(viewsets.ModelViewSet):
    queryset= Consultation.objects.all()
    serializer_class= ConsultationSerializer


class medicalCenterViewSet(viewsets.ModelViewSet):
    queryset= medicalCenter.objects.all()
    serializer_class= medicalCenterSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset= Patient.objects.all()
    serializer_class= PatientSerializer
