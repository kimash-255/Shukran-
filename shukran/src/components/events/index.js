import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Summer Pool Party",
    date: "July 15, 2024",
    imageUrl: "/img/poolparty.jpg",
    description: "Join us for a fun-filled day by the pool with live music, games, and delicious food and drinks.",
  },
  {
    id: 2,
    title: "Wine Tasting Night",
    date: "August 5, 2024",
    imageUrl: "/img/winetastingnight.jpeg",
    description: "Savor the flavors of fine wines from around the world paired with gourmet appetizers.",
  },
  {
    id: 3,
    title: "Beach Bonfire BBQ",
    date: "September 12, 2024",
    imageUrl: "/img/bonfire.jpeg",
    description: "Experience a cozy evening by the beach with a barbecue feast, cocktails, and live entertainment.",
  },
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 md:h-72 lg:h-80">
              <Image
                src={event.imageUrl}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
              <div className="mt-4">
                <Link href={`/events/${event.id}`} className="text-blue-500 font-semibold hover:text-blue-700">
                  Get to Know the Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
