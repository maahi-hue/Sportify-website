import Lottie from "lottie-react";
import person from "../../assets/sports.json";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className=" ">
      <div className="text-center ">
        <Slide>
          <h1 className="text-3xl font-bold py-3">
            Your One-Stop Shop for Sports Gear
          </h1>
          <p>Top-quality equipment for athletes of all levels.</p>
        </Slide>
      </div>
      <Lottie
        animationData={person}
        loop={true}
        className="w-96 h-96 mx-auto"
      />
    </div>
  );
};

export default Banner;
