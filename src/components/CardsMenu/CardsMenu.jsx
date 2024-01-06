import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Model1 from '../Model1';
import Model2 from '../Model2';
import Model3 from '../Model3';

import './styles.css';

function CardsMenu() {
  return (
    <div>
       <Swiper
       breakpoints={{
        576: {
          
          slidesPerView: 1
        },
        768: {
          
          slidesPerView: 2
        },
      }}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Model1/></SwiperSlide>
        <SwiperSlide><Model2/></SwiperSlide>
        <SwiperSlide><Model3/></SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default CardsMenu