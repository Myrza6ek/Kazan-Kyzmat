import React from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Transition/Transition.css";
import jurta16 from "../Home/media/jurta16.jpg";
import jurta25 from "../Home/media/jurta25.jpg";
import boorsok from "../Home/media/boorsok.png";
import chuchuk1 from "../Home/media/chuchuk1.jpg";
import chuchuk from "../Home/media/chuchuk.jpg";
import tabak from "../Home/media/tabak.jpg";

const Transition = () => {
  SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
  return (
    <div>
      <Swiper
        spaceBetween={100}
        effect={"coverflow"}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src={jurta16} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={boorsok} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tabak} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chuchuk1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chuchuk} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={jurta25} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Transition;
