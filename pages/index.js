  import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '../components/Layout';
<meta name="google-site-verification" content="6aZK5M-ORSzWkkn-Nze-Pu1cV-WeAqQlq-k7wslHcAE" />

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Margbrook Pure</title>
          <meta name="description" content="Welcome to Margbrook Pure - Premium Water Solutions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Main Content with a padding top to adjust for the fixed Navbar */}
        <main className="bg-white text-gray-800">
          <HeroSection />


          {/* About Us Section */}
          <section id="about-us" className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Who are we?</h2>
            <div className="container mx-auto px-6 md:px-8 text-left md:text-left flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
              <div className="flex-1 md:pr-8">
                <p className="text-lg leading-relaxed mb-4 text-left">
                  Nestled in Margbrook Pure is not just water, but a love story of Earth’s essence. Imagine a place where the world’s purity remains untouched, a hidden sanctuary deep within the Earth where our water begins its journey. Far from any interference, it’s nurtured by nature, flowing through ancient rocks that have stood the test of time.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  As it emerges, this water is carefully embraced by our hands, put through a gentle 7-step purification process. Each step a testament to our mission, ensuring every drop is as fresh and clean as nature intended. This isn’t just water; it’s a gift, a connection to the Earth’s soul. From this sacred source, it travels to you, encased with love and devotion. Every sip you take is a whisper of nature’s love story, bringing a moment of pure, untainted refreshment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Picture a day when you’re in need of a little solace, a small escape from the hustle and bustle. As you twist open the bottle, feel the touch of nature’s embrace. Whether you’re reflecting on life, lost in a cherished memory, or simply enjoying a sunny afternoon, Margbrook Pure transforms those moments into something truly special. It’s more than hydration – it’s a reminder of the beauty and love that exist in the world around us.
                </p>
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <Image
                  src="/images/carousel4.webp"
                  alt="About us"
                  className="rounded-lg shadow-md w-full h-auto"
                  width={600} // Specify width
                  height={400} // Specify height
                />
              </div>
            </div>
          </section>

          {/* Products Section */}
          
          {/* //- (uncomment to add section)
           {/* Free Delivery Section - Reordered 
           <section className="py-12 flex flex-col md:flex-row items-center bg-blue-100 rounded-lg shadow-md my-8">
            <div className="md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-4xl font-bold text-blue-900">Free Delivery Service</h2>
              <p className="mt-4 text-lg text-gray-700">
                Enjoy convenience with timely and reliable delivery to your doorstep at no extra charge!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <Image
                src="/images/products/free-delivery.png"
                alt="Free Delivery"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>   */}

        {/* Testimonials Section - (//uncomment to add section// )
          <section id="testimonials" className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                {/* Example Testimonial 
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md text-center">
                  <p className="text-gray-700 mb-4">Margbrook Pure all day, everyday!</p>
                  <p className="font-bold text-blue-800">- Stacy W.</p>
                </div>
                {/* Add more testimonials as needed 
              </div>
            </div>
          </section> */} 

          {/* Contact Section */}
          <section id="contact" className="py-12 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Get in Touch</h2>
            <p className="text-gray-700 mb-4">Have questions or need more information? We’d love to hear from you!</p>
            <Link href="/products-services" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Products & Services</Link>
        
          </section>
        </main>
      </div>
    </Layout>
  );
}
