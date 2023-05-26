import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.scss'

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'

export default function Slide({ img }) {
  return (
    <Swiper
      loop={true}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide >
        <img src={img} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="img" />
      </SwiperSlide>
    </Swiper>
  )
}
