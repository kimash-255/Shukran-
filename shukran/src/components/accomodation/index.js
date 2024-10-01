import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const roomVarieties = [
  {
    id: 1,
    name: "Standard Room",
    description: "Comfortable room with essential amenities for a pleasant stay.",
    imageUrl: "/img/standard-room.jpeg",
    price: 1200,
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Spacious suite with a separate living area, ideal for business travelers.",
    imageUrl: "/img/executive-suite.jpeg",
    price: 2250,
  },
  {
    id: 3,
    name: "Family Villa",
    description: "Large villa with multiple bedrooms and a private garden, perfect for families.",
    imageUrl: "/img/family-villa.jpeg",
    price: 3400,
  },
  {
    id: 4,
    name: "Penthouse",
    description: "Luxurious penthouse with panoramic views of the city, featuring a private terrace and jacuzzi.",
    imageUrl: "/img/penthouse.jpeg",
    price: 4600,
  },
  {
    id: 5,
    name: "Tycoon Bungalow",
    description: "Cozy bungalow located right on the KICC, offering stunning  views .",
    imageUrl: "/img/bungalow.jpeg",
    price: 6300,
  },
];

const Accommodation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roomVarieties.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Accommodation</h1>
      <div className="flex justify-center items-center">
        {roomVarieties.slice(currentIndex, currentIndex + 3).map((room) => (
          <div key={room.id} className="w-80 md:w-96 lg:w-96 p-4 mx-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">Kshs{room.price} per night</p>
                <p className="text-gray-800">{room.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
