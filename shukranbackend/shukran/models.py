# app_name/models.py
from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    room_type = models.CharField(max_length=50)
