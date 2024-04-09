import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ShukranRecreation = () => {
  // Define animations using react-spring
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      title: 'Tranquil Spa',
      description:
        'Indulge in our world-class spa facilities, where expert therapists await to pamper you with luxurious treatments.',
    },
    {
      title: 'Gourmet Dining',
      description:
        'Experience culinary excellence at our gourmet restaurants, offering a fusion of international flavors and local delicacies.',
    },
    {
      title: 'State-of-the-Art Gym',
      description:
        'Maintain your fitness regimen in our state-of-the-art gym equipped with the latest exercise machines and personalized training programs.',
    },
    {
      title: 'Outdoor Pool',
      description:
        'Relax and unwind by our sparkling outdoor pool, surrounded by lush tropical gardens and breathtaking views.',
    },
    {
      title: 'Business Center',
      description:
        'Stay connected and productive with our fully-equipped business center, offering state-of-the-art facilities and support services.',
    },
    {
      title: 'Conference Facilities',
      description:
        'Host successful meetings and events in our versatile conference facilities, equipped with modern amenities and personalized event planning services.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <animated.div style={animationProps} className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="relative">
            <div className="border-dotted border-2 border-gray-600 rounded-lg p-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{contents[contentIndex].title}</h2>
              <p className="text-lg text-gray-700 mb-8">{contents[contentIndex].description}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="animate-spin absolute top-0 left-0 w-full h-full border-dotted border-gray-400 border-2 rounded-lg"
                style={{
                  animationDuration: '4s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default ShukranRecreation;
