import Lottie from "lottie-react";
import delivery from "../../assets/delivery.json";
import quality from "../../assets/quality.json";
import customization from "../../assets/customization.json";
import { Slide } from "react-awesome-reveal";
const WhyChooseUs = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto text-center">
        <Slide>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        </Slide>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col items-center">
            <Lottie animationData={delivery} className="w-36 h-36" />
            <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your gear delivered within days.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Lottie animationData={quality} className="w-36 h-36" />
            <h3 className="text-xl font-semibold mt-4">Quality Assurance</h3>
            <p className="text-gray-600">We provide only the best equipment.</p>
          </div>
          <div className="flex flex-col items-center">
            <Lottie animationData={customization} className="w-36 h-36" />
            <h3 className="text-xl font-semibold mt-4">Custom Options</h3>
            <p className="text-gray-600">
              Tailor your gear to suit your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
