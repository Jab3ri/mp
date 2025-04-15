import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import { CountUp } from "countup.js";
import Image from "next/image";
import { FaRecycle, FaWater, FaUtensils, FaLeaf, FaStar, FaBuilding, FaGlassCheers } from "react-icons/fa"; 
import 'animate.css';

export default function About() {
  useEffect(() => {
    const clientsCounter = new CountUp('clients', 0, 10000, 0, 3.5);
    const eventsCounter = new CountUp('events', 0, 50, 0, 3.5);
    const bottlesCounter = new CountUp('bottles', 0, 25000, 0, 3.5);

    if (!clientsCounter.error) clientsCounter.start();
    if (!eventsCounter.error) eventsCounter.start();
    if (!bottlesCounter.error) bottlesCounter.start();

    // Add scroll event listener for animations
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
          observer.unobserve(entry.target);
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });

  }, []);

  return (
    <Layout>
      <Head>
        <title>About Us - Margbrook Pure</title>
        <meta name="description" content="Learn more about Margbrook Pure&apos;s journey, values, and mission to provide clean and purified water." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About Us - Margbrook Pure" />
        <meta property="og:description" content="Learn more about Margbrook Pure&apos;s journey, values, and mission to provide clean and purified water." />
        <meta property="og:image" content="/images/og-about.jpg" />
        <meta property="og:url" content="https://margbrookpure.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20 min-h-screen">
        {/* About Section */}
        <section className="text-center mb-10 fade-in-section">
          <h1 className="text-4xl font-bold text-blue-900">About Margbrook Pure</h1>
        </section>

        {/* Mission & Core Values */}
        <section className="flex flex-col md:flex-row items-center mb-10 fade-in-section">
          <div className="md:w-1/2">
            <Image
              src="/logoo.webp"
              alt="About Margbrook Pure"
              className="w-full h-auto rounded-lg shadow-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 text-gray-700 px-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Mission</h3>
            <p>
              Margbrook Pure is dedicated to providing the purest water solutions for homes, businesses, and events. Our mission is to ensure that every sip of water brings you health, joy, and satisfaction.
            </p>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Standards</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><FaRecycle className="inline-block text-green-500" /> <strong>Eco-Friendly Bottling:</strong> Sustainable, recyclable materials to promote a greener planet.</li>
              <li><FaWater className="inline-block text-blue-500" /> <strong>Advanced Filtration:</strong> Cutting-edge filtration for safe and clean drinking water.</li>
              <li><FaLeaf className="inline-block text-green-600" /> <strong>Sustainability Focus:</strong> Reducing waste and conserving resources through responsible practices.</li>
              <li><FaStar className="inline-block text-yellow-500" /> <strong>Premium Quality:</strong> Ensuring every bottle meets high standards of purity, taste, and safety.</li>
            </ul>
            <section className="my-10">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Aim & Vision </h2>
              <p className="text-gray-700 leading-7">
                Margbrook Pure aims to set the standard for quality and eco-responsibility in the water industry. Our vision is to inspire a healthier world by connecting people with nature&apos;s most precious resource, one bottle at a time.
              </p>
            </section>
          </div>
        </section>

        {/* Client-Centered Services Section */}
        <section className="text-center mb-12 fade-in-section">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Client-Centered Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="flex flex-col items-center">
              <FaUtensils className="text-blue-900 text-4xl" />
              <h3 className="font-semibold text-lg mt-4">Hotel and Restaurant Partnerships</h3>
              <p className="mt-2">Flexible delivery schedules to ensure uninterrupted supply.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlassCheers className="text-blue-900 text-4xl" />
              <h3 className="font-semibold text-lg mt-4">Event Support</h3>
              <p className="mt-2">From weddings to conferences, we provide tailored water solutions for your events.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBuilding className="text-blue-900 text-4xl" />
              <h3 className="font-semibold text-lg mt-4">Corporate Programs</h3>
              <p className="mt-2">Ensure your staff and clients enjoy clean and safe hydration options with our corporate solutions.</p>
            </div>
          </div>
        </section>

        {/* Testimonials and Case Studies Section */}
        <section className="mb-12 fade-in-section">
          <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">Testimonials and Case Studies</h2>
          <div className="space-y-6">
            <div className="text-center">
              <p className="italic">"We&apos;ve partnered with Margbrook Pure for our events, and the personalized service is unmatched. Guests loved the custom-labeled bottles!"</p>
              <p className="font-semibold mt-2">– Sarah O., Events Planner</p>
            </div>
            <div className="text-center">
              <p className="italic">"Their 20L refill service has made our hotel operations more sustainable. Margbrook Pure delivers exactly what they promise!"</p>
              <p className="font-semibold mt-2">– Daniel M., Hotel Manager</p>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="text-center mb-12 fade-in-section">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="text-xl font-semibold">
              <p className="text-4xl text-blue-900">1,000+</p>
              <p>Clients Served: Businesses, homes, and event organizers.</p>
            </div>
            <div className="text-xl font-semibold">
              <p className="text -4xl text-blue-900">50+</p>
              <p>Events Powered: Weddings, corporate meetings, and community programs.</p>
            </div>
            <div className="text-xl font-semibold">
              <p className="text-4xl text-blue-900">2,500+</p>
              <p>Bottles Refilled: Water bottles of every size engaged through refill initiatives.</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mt-12 text-center fade-in-section">
          <h3 className="text-xl font-semibold text-blue-800">Want to learn more?</h3>
          <p className="text-gray-700 mt-2 leading-7">
            Contact us today to find out how we can meet your purified water needs.
          </p>
          <Link
            href="/contact"
            aria-label="Navigate to contact page"
            className="no-underline inline-block mt-4 px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </Layout>
  );
}
