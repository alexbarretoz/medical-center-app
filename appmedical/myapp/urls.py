from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, ConsultationViewSet

router = DefaultRouter()
router.register(r'doctor', DoctorViewSet, basename='doctor')
router.register(r'consultation', ConsultationViewSet, basename='consultation')
router.register(r'doctor', DoctorViewSet, basename='doctor')
router.register(r'doctor', DoctorViewSet, basename='doctor')


urlpatterns = [
    path('api/', include(router.urls)),
]