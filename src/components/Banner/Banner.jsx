import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/banner22.jpg";
import banner2 from "../../assets/banner33.jpg";
import banner3 from "../../assets/banner44.jpg";
import banner4 from "../../assets/banner-55.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <div className="mb-4 mx-auto w-11/12 p-4">
        <div className="text-center ">
          <Slide>
            <h1 className="text-3xl font-bold my-2">
              Your One-Stop Shop for Sports Gear
            </h1>
            <p className="mb-2">
              Top-quality equipment for athletes of all levels.
            </p>
          </Slide>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <img
              src={banner1}
              alt="Slide 1"
              className="w-1/4 h-auto mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner2}
              alt="Slide 2"
              className="w-1/4 h-auto mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="Slide 3"
              className="w-1/4 h-auto mx-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner4}
              alt="Slide 3"
              className="w-1/4 h-auto mx-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
