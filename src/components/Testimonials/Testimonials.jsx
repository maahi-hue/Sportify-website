import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div>
      <Slide>
        <h1 className="text-3xl font-bold text-center mb-6">
          Customer Testimonials
        </h1>
      </Slide>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="p-6 bg-base-100 border border-inherit rounded shadow-md">
          <p className="text-lg  italic">
            "The quality of the equipment is outstanding. I'm so happy with my
            purchase!"
          </p>
          <p className="text-right font-bold mt-4">- John Doe</p>
        </div>
        <div className="p-6 bg-base-100 border border-inherit rounded shadow-md">
          <p className="text-lg  italic">
            "Excellent customer service and a great selection of sports gear."
          </p>
          <p className="text-right font-bold mt-4">- Jane Smith</p>
        </div>
        <div className="p-6 bg-base-100 border border-inherit rounded shadow-md">
          <p className="text-lg  italic">
            "I found everything I needed for my team at unbeatable prices."
          </p>
          <p className="text-right font-bold mt-4">- Alex Brown</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
