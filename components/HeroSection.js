import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Link from "next/link"; // Import Link
import { FaEnvelope } from "react-icons/fa"; // Import the icon if you're using it

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/ban2.webp", "/images/free-delivery.webp"];
  const interval = 5000; // Change image every 5 seconds
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Clear the interval on unmount
  }, [images.length]); // Added images.length to the dependency array

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-md"></div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center h-full text-white text-center">
        {currentImage === 0 ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              
            </h1>
            <p className="text-lg md:text-xl mb-6 text-grey">
              
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              
            </h1>
            <p className="text-lg md:text-xl mb-6">
              
            </p>
          </>
        )}
        {/* Explore Products Button */}
        <Link href="/products-services" className="inline-block px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200">
          <FaEnvelope className="inline-block mr-2" /> Explore Products
        </Link>
      </div>

      {/* CSS for transition effect */}
      <style jsx>{`
        section {
          transition: background-image 1s ease-in-out;
        }
        .text-grey {
          color: rgba(255, 255, 255, 0.8); /* Adjust to match visibility and tone */
        }
      `}</style>
    </section>
  );
}

