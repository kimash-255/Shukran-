# Generated by Django 4.2.5 on 2024-03-29 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('check_in_date', models.DateField()),
                ('check_out_date', models.DateField()),
                ('room_type', models.CharField(max_length=50)),
            ],
        ),
    ]
