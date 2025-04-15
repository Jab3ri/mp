import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Contact() {
  const whatsappNumber = "+254743043785";
  const googleMapsEmbedLink = "https://www.google.com/maps?q=Margbrook+Pure,+Nairobi,+Kenya&z=14&output=embed";
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000); // Clear message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

    // Validate name (should contain at least two words) and email
    const nameParts = name.split(" ");
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nameParts.length < 2) {
      setMessage("Please enter both your first and last name.");
      return;
    }

    if (!isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "7a8add6d-b81b-44ee-b77b-47e9e96066b0", // Replace with your Web3Forms API access key
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    setIsSubmitting(false);
    if (result.success) {
      setMessage("Thank you for contacting us! We shall get back to you shortly.");
      e.target.reset(); // Clear the form
    } else {
      setMessage("There was an error submitting your message. Please try again.");
    }
  }

  return (
    <div>
      <Head>
        <title>Contact Us - Margbrook Pure</title>
        <meta name="description" content="Get in touch with Margbrook Pure for inquiries, orders, and support." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Contact Us - Margbrook Pure" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Get in touch with Margbrook Pure for inquiries, orders, and support." />
        <meta property="og:image" content="/images/contact-us-og.jpg" />
        <meta property="og:url" content="https://margbrookpure.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <div className="relative">
        <Image
          src="/images/qw1.webp" // Path to your banner image
          alt="Contact Us Banner"
          layout="responsive" // Makes the image responsive
          width={1200} // Set the width of the image (adjust as needed)
          height={200} // Reduced height of the image
          className="object-cover" // Ensures the image covers the area without distortion
        />
      </div>

      <main className="bg-white text-gray-800 pt-16">
        <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20 min-h-screen">
          {/* Contact Us Title */}
          <section className="text-center mb-10">
            <h1 className="text- 4xl font-bold text-blue-900">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-700">We’re here to help. Reach out with any inquiries, orders, or feedback.</p>
          </section>

          {/* Message Form */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>
            {message && (
              <div
                className={`alert ${message.includes("Thank you") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} py-2 px-4 rounded-md text-center`}
              >
                <p className="text-sm">{message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition duration-200"
                  placeholder="Your First and Last Name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition duration-200"
                  placeholder="email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  aria-label="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 transition duration-200"
                  rows="4"
                  placeholder="Your Message"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                aria-label="Submit contact form"
                className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Contact Information</h2>
            <p className="text-gray-700">Address: 414 - 00520 Nairobi</p>
            <p className="text-gray-700">Phone: <a href={`tel:${whatsappNumber}`} className="text-blue-600 hover:underline">{whatsappNumber}</a></p>
            <p className="text-gray-700">General Inquiries: <a href="mailto:info@margbrookpure.co.ke" className="text-blue-600 hover:underline">info@margbrookpure.co.ke</a></p>
            <p className="text-gray-700">Sales Team: <a href="mailto:sales@margbrookpure.co.ke" className="text-blue-600 hover:underline">sales@margbrookpure.co.ke</a></p>
          </section>

          {/* Google Map Embed */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Find Us Here</h2>
            <div className="w-full h-64">
              <iframe
                src={googleMapsEmbedLink}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Margbrook Pure Location Map"
                className="rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </section>

          {/* WhatsApp Link */}
          <section className="mt-12 text-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="no-underline inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-400 transition duration-200"
            >
              Contact Us on WhatsApp
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}