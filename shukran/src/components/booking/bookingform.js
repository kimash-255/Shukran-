import { useRouter } from 'next/router';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form data:', formData); // Log form data before sending the request

      const templateParams = {
        ...formData,
      };

      // Send email using EmailJS
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');

      console.log('Booking submitted successfully');

      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        roomType: '',
      });

      // Redirect to another page upon successful submission
      router.push('/'); // Replace '/' with the desired path
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };




  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
          <small className="text-xs text-gray-500">Format: 0123456789</small>
        </div>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-white text-sm font-bold mb-2">Check-in Date</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-white text-sm font-bold mb-2">Check-out Date</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="roomType" className="block text-white text-sm font-bold mb-2">Room Type</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-black text-white border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Room Type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
