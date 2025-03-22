"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/style/swiper.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="MySwiper">
        <SwiperSlide>
            <img className='object-contain' src="images/banner1.jpg" alt="banner 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='object-contain' src="images/banner2.jpg" alt="banner 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='object-contain' src="images/banner3.jpg" alt="banner 3" />
        </SwiperSlide>
      </Swiper>
    );
}