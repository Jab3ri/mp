import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";

const products = [
  {
    title: "Customized Event Bottles",
    description: "Transform your special occasions into unforgettable memories with our personalized bottled water, tailored to reflect the essence of your event. Perfect for weddings, parties, and corporate gatherings, these bottles are a unique touch that your guests will appreciate.",
    image: "/images/products/custom-event..webp",
    badge: "Popular",
  },
  {
    title: "500ml (a)",
    description: "Stay refreshed and invigorated with our 500ml premium purified water. This conveniently sized bottle is your perfect companion for on-the-go hydration, ensuring you feel revitalized wherever life takes you.",
    image: "/images/products/500ml..webp",
    badge: "Best Seller",
  },
  {
    title: "500ml (b)",
    description: "Indulge in the elegance of our exclusive 500ml executive bottles, filled with crystal-clear purified water. Ideal for business meetings or special occasions, these bottles add a touch of sophistication to your hydration.",
    image: "/images/products/500ml-ex.webp",
    badge: "New Arrival",
  },
  {
    title: "1-Litre Bottled Water",
    description: "Quench your thirst and embrace hydration with our perfectly sized 1-litre bottles. Ideal for all-day refreshment, these bottles are designed to keep you feeling your best, whether at work, home, or on the go.",
    image: "/images/products/1-litre..webp",
  },
  {
    title: "12 Pack 1-Litre Bale",
    description: "Experience the luxury of our 12 pack of 1-litre bottles, crafted for those who appreciate quality. Each bottle delivers pure, refreshing water, making it a staple for any household or event.",
    image: "/images/products/1-b.webp",
  },
  {
    title: "5-Litre Bottled Water",
    description: "Get more of what you love with our 5-litre bottles, perfect for families and gatherings. This generous size ensures you have enough water for everyone, making it an essential choice for any occasion.",
    image: "/images/products/5-litre..webp",
  },
  {
    title: "10-Litre Bottled Water",
    description: "Durable and portable, our 10-litre bottles are designed for households and small businesses. Enjoy the convenience of having ample water supply at your fingertips, ensuring you’re always prepared.",
    image: "/images/products/10-litre..webp",
  },
  {
    title: "20-Litre Hard Bottle",
    description: "Depend on our robust 20-litre hard bottles, engineered for heavy usage and compatibility with dispensers. Perfect for offices and large families, these bottles provide a reliable source of hydration.",
    image: "/images/products/20-hard.webp",
  },
  {
    title: "20-Litre Soft Bottle",
    description: "Lightweight yet sturdy, our 20-litre soft bottles offer an excellent solution for convenient water storage. Ideal for outdoor activities or home use, they combine practicality with ease of transport.",
    image: "/images/products/20-soft.webp",
  },
  {
    title: "24 Pack 500ml Bale",
    description: "Elevate your gatherings with our 24 pack of 500ml bottles, perfect for parties, picnics, or everyday hydration. Each bottle is a promise of quality and taste, ensuring your guests stay refreshed and satisfied.",
    image: "/images/products/500ml-b.webp",
  },
  {
    title: "Bulk Water Supply",
    description: "Our large-scale water supply service is tailored for industries and commercial operations. Ensure your business runs smoothly with our reliable and efficient water solutions.",
    image: "/images/products/bulk-supply.webp",
  },
  {
    title: "Water Refill Services",
    description: "Choose our economical and eco-friendly refill services for all your bottle sizes, from 1 litre to  20 litres. Reduce waste and enjoy the convenience of having fresh water delivered right to your door.",
    image: "/images/products/refill.webp",
  },
];

export default function ProductsServices() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "animate__animated",
              "animate__fadeInUp"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Products &amp; Services - Margbrook Pure</title>
        <meta name="description" content="Explore our wide range of purified water products and services." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main className="bg-gray-50 text-gray-800">
        {/* Enhanced Hero Banner */}
        <section
          className="hero-banner bg-cover bg-center py-16 text-white text-center"
          style={{ backgroundImage: "url('/images/baaaner.webp')" }}
        >
          <h1 className="text-4xl font-bold">Stay Hydrated, Stay Healthy</h1>
          <p className="text-lg mt-4">With Premium quality water, tailored for your needs.</p>
          <p className="mt-2 italic">Join us in our mission to promote health and wellness through hydration.</p>
        </section>

        <div className="container mx-auto px-4">
          {/* Products Section */}
          <section className="py-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="relative opacity-0 translate-y-10 rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={100}
                    className="w-full"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-gray-800 text-xs px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-blue-800">{product.title}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <button
                      onClick={() => {
                        const message = `Hi, I am interested in ${product.title}. Could you please provide more information?`;
                        const whatsappUrl = `https://wa.me/254743043785?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                      className="bg-green-500 text-white py-2 px-4 rounded mt-4 flex items-center justify-center space-x-2"
                    >
                      <FaWhatsapp />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Free Delivery Section */}
          <section className="py-12 flex flex-col md:flex-row items-center bg-blue-100 rounded-lg shadow-md my-8">
            <div className="md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-4xl font-bold text-blue-900">Delivery Service available</h2>
              <p className="mt-4 text-lg text-gray-700">
                Enjoy convenience with timely and reliable delivery to your doorstep!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <Image
                src="/images/products/free-delivery.webp"
                alt="Free Delivery"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-blue-100 py-12">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700">
                  "Margbrook Pure did our water for my twins&apos; birthday party and delivered it at home. The team is very kind!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">- Lizah S.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700">
                  "You guys delivered. You brought to life what I had envisioned for my wedding!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">- James K.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700">
                  "Huwezi compare Margbrook Pure na maji zingine. Ni fresh!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">- Ann W.</p>
              </div>
              {/* Add more testimonials as needed */}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-8 text-center py-8">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Interested in Our Services?</h2>
            <p className="text-gray-600 mb-6">
              Contact us to place your order or learn more about our offerings.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition duration-200">
                Contact Us
              </a>
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
