import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay,Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import  './Slider.css'
import {SliderProducts} from '../data/products'

const Slider = () => {
  return (
    <div className='s-container'>
        <Swiper
         spaceBetween={40}
         slidesPerView={3}
         slidesPerGroup={1}
         centeredSlides={true}
         loopFillGroupWithBlank={true}
         loop={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
        //  navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
         breakpoints={{
          640:{
            slidesPerView:2
          },
          0:{
            slidesPerView:1
          }
         }}
          >
            {
                SliderProducts.map((slide)=>[
                    <SwiperSlide>
                       <div className='left-s'>
                          <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                          </div>
                            <span>{slide.price}$</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slide.img} alt="Product" className='img-p'/>
                    </SwiperSlide>
                ])}
        </Swiper>
    </div>
  )
}

export default Slider