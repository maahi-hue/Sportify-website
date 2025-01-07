import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../assets/1.jpg";
import banner2 from "../../assets/2.jpg";
import banner3 from "../../assets/3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="relative h-[60vh]">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white bg-black bg-opacity-30">
        <h1 className="text-4xl font-bold mb-2">Welcome to Sports World</h1>
        <p className="text-lg">
          Explore top-quality gear designed for athletes of all levels.
        </p>
      </div>

      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        className="h-full"
      >
        <div data-src={banner1} className="brightness-50" />
        <div data-src={banner2} className="brightness-50" />
        <div data-src={banner3} className="brightness-50" />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
