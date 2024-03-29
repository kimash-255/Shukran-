from django.urls import path
from .views import submit_booking

urlpatterns = [
    path('submit-booking/', submit_booking, name='submit_booking'),
]
