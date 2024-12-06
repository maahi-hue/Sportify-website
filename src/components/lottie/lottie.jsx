import Lottie from "lottie-react";
import person from "../../assets/sports.json";

const lottie = () => {
  return (
    <div className=" ">
      <Lottie
        animationData={person}
        loop={true}
        className="w-96 h-96 mx-auto"
      />
    </div>
  );
};

export default lottie;
