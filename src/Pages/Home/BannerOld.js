import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideOne from '../../assets/slider/slide1.jpg';
import slideTwo from '../../assets/slider/slide2.jpg'
import slideThree from '../../assets/slider/slide3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-screen' src={slideOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen' src={slideTwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen' src={slideThree} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;


