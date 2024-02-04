from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, ConsultationViewSet,medicalCenterViewSet, PatientViewSet

router = DefaultRouter()
router.register(r'doctor', DoctorViewSet, basename='doctor')
router.register(r'consultation', ConsultationViewSet, basename='consultation')
router.register(r'patient', PatientViewSet, basename='Patient')
router.register(r'medicalcenter', medicalCenterViewSet, basename='medicalcenter')


urlpatterns = [
    path('api/', include(router.urls)),
]