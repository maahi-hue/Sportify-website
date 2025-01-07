import { FaUsers, FaTrophy, FaGlobe, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-[#f4f7f6] p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#2f3e46] mb-8">
          About Us
        </h1>
        <p className="text-lg text-[#2f3e46] mb-12 max-w-4xl mx-auto">
          Welcome to Sportify, where we provide top-notch sports equipment to
          athletes and enthusiasts worldwide. We aim to empower individuals to
          reach their full potential through quality gear and exceptional
          service.
        </p>

        <div className="flex justify-center space-x-8 mb-16">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-4xl text-[#52796f]" />
            <div>
              <h3 className="text-2xl font-bold text-[#52796f]">
                Our Community
              </h3>
              <p className="text-lg text-[#2f3e46]">
                Join our growing community of athletes and sports enthusiasts.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaTrophy className="text-4xl text-[#52796f]" />
            <div>
              <h3 className="text-2xl font-bold text-[#52796f]">Excellence</h3>
              <p className="text-lg text-[#2f3e46]">
                We aim for excellence in every product we offer to help you
                excel.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-4xl text-[#52796f]" />
            <div>
              <h3 className="text-2xl font-bold text-[#52796f]">
                Global Reach
              </h3>
              <p className="text-lg text-[#2f3e46]">
                Serving athletes across the globe with top-quality gear.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#84a98c] text-white py-16 px-4 rounded-lg shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Our mission is to provide high-quality sports equipment to
            individuals of all levels. From aspiring athletes to seasoned pros,
            we are here to support you in your journey. Every product we offer
            is carefully curated to ensure top performance, durability, and
            style.
          </p>
          <p className="text-xl max-w-2xl mx-auto">
            We are committed to delivering exceptional customer service and
            creating an inclusive environment where everyone can find the
            equipment that suits their needs.
          </p>
        </div>

        <h2 className="text-4xl font-bold text-[#2f3e46] mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
            <FaHandshake className="text-4xl text-[#52796f] mb-4" />
            <h3 className="text-2xl font-bold text-[#52796f] mb-2">
              Integrity
            </h3>
            <p className="text-lg text-[#2f3e46]">
              We prioritize honesty, fairness, and transparency in all our
              dealings.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
            <FaTrophy className="text-4xl text-[#52796f] mb-4" />
            <h3 className="text-2xl font-bold text-[#52796f] mb-2">
              Excellence
            </h3>
            <p className="text-lg text-[#2f3e46]">
              We constantly strive for the highest standards in every product we
              offer.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
            <FaUsers className="text-4xl text-[#52796f] mb-4" />
            <h3 className="text-2xl font-bold text-[#52796f] mb-2">
              Community
            </h3>
            <p className="text-lg text-[#2f3e46]">
              We foster a community where everyone is welcome to share their
              passion for sports.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
            <FaGlobe className="text-4xl text-[#52796f] mb-4" />
            <h3 className="text-2xl font-bold text-[#52796f] mb-2">
              Global Reach
            </h3>
            <p className="text-lg text-[#2f3e46]">
              Our products are available worldwide, ensuring accessibility for
              all athletes.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-[#2f3e46] max-w-4xl mx-auto">
            At Sportify, we are passionate about sports and dedicated to helping
            you reach your full potential. Whether you're just starting out or
            already competing at the highest level, we have the tools you need
            to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
