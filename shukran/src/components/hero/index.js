import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-gray-900 py-20 md:py-32"
      style={{ backgroundImage: "url('/img/hero-image.jpg')" }}
    >
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Shukran Resort
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Experience luxury like never before
        </p>
        <div className="flex justify-center">
          <a
            href="/booking"
            className="btn btn-primary flex items-center px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
          >
            Book Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
