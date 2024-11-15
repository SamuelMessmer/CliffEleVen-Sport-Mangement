"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex flex-col items-center mb-10 -z-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="h-[600px] w-[85%] rounded-md mb-4"
      >
        <SwiperSlide>
          <Image
            src={"/foto2.png"}
            alt="Spieler Bild"
            width={1920}
            height={1080}
            className="w-[720px] h-[648px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/terry.png"}
            alt="Spieler Bild"
            width={1920}
            height={1080}
            className="w-[720px] h-[648px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/sanden.png"}
            alt="Spieler Bild"
            width={1920}
            height={1080}
            className="w-[720px] h-[648px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/osei.png"}
            alt="Spieler Bild"
            width={1920}
            height={1080}
            className="w-[720px] h-[648px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-5">
        <div
          className={
            currentSlide === 0
              ? "h-3 w-3 bg-white opacity-80 rounded-full"
              : "h-3 w-3 bg-white opacity-40 rounded-full"
          }
        >
          {""}
        </div>
        <div
          className={
            currentSlide === 1
              ? "h-3 w-3 bg-white opacity-80 rounded-full"
              : "h-3 w-3 bg-white opacity-40 rounded-full"
          }
        >
          {""}
        </div>
        <div
          className={
            currentSlide === 2
              ? "h-3 w-3 bg-white opacity-80 rounded-full"
              : "h-3 w-3 bg-white opacity-40 rounded-full"
          }
        >
          {""}
        </div>
        <div
          className={
            currentSlide === 3
              ? "h-3 w-3 bg-white opacity-80 rounded-full"
              : "h-3 w-3 bg-white opacity-40 rounded-full"
          }
        >
          {""}
        </div>
      </div>
    </div>
  );
};
export default CustomCarousel;
