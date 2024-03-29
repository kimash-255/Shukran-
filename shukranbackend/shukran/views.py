from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Booking
import json

@csrf_exempt
def submit_booking(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            
            # Create a new Booking object and save it to the database
            booking = Booking.objects.create(
                name=data['name'],
                email=data['email'],
                phone=data['phone'],
                check_in_date=data['checkInDate'],
                check_out_date=data['checkOutDate'],
                room_type=data['roomType']
            )
            
            # Send confirmation email to customer
            send_mail(
                'Booking Confirmation',
                f'Thank you for booking with us! Here are your booking details:\n\nName: {data["name"]}\nEmail: {data["email"]}\nPhone: {data["phone"]}\nCheck-in Date: {data["checkInDate"]}\nCheck-out Date: {data["checkOutDate"]}\nRoom Type: {data["roomType"]}',
                'rexviscot44@gmail.com',  # Email sent from
                [data['email']],  # Recipient's email address
                fail_silently=False,
            )

            # Send notification email to admin
            send_mail(
                'New Booking',
                f'A new booking has been submitted:\n\nName: {data["name"]}\nEmail: {data["email"]}\nPhone: {data["phone"]}\nCheck-in Date: {data["checkInDate"]}\nCheck-out Date: {data["checkOutDate"]}\nRoom Type: {data["roomType"]}',
                'rexviscot44@gmail.com',  # Email sent from
                ['rexviscot44@gmail.com'],  # Admin's email address
                fail_silently=False,
            )

            return JsonResponse({'message': 'Booking submitted successfully'}, status=201)
        except KeyError as e:
            return JsonResponse({'error': f'Missing key in request data: {e}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
