import React from 'react'
import {motion} from 'framer-motion'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay,Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Styles from './Testimonilas.module.css'
import Model from '../assets/testimonialHero.png';
import { TestimonialsData } from '../data/testimonials';

const Testimonilas = () => {
  return (
    <div  className={Styles.testimonials}>
        <div className={Styles.wrapper}>
           <div className={Styles.container}>
             <span>Top rated</span>
             <span>Seedily say has suitable disposal and boy . Exerise joy man children
              rejoiced
             </span>
          </div>

           <motion.img 
               whileInView={{scale:[0,1]}}
               transition={{duration:0.5,ease:'easeInOut'}}
              src={Model} 
           alt="Model"/>

           <div className={Styles.container}>
              <span>100K</span>
              <span>Happy Customers with us</span>
           </div>
        </div>
        
        <div className={Styles.reviews}>Reviews</div>
        <div className={Styles.carousal}>
             <Swiper
                 spaceBetween={40}
                 slidesPerView={2}
                 slidesPerGroup={1}
                 centeredSlides={true}
                 loopFillGroupWithBlank={true}
                 loop={true}
                 autoplay={{
                   delay: 2000,
                   disableOnInteraction: false,
                 }}
                //  pagination={{
                //    clickable: true,
                //  }}
                //  navigation={true}
                 modules={[Autoplay, Pagination, Navigation]}
                 className={`"mySwiper" ${Styles.tCarousel}`}
                 breakpoints={{
                   856:{
                    slidesPerView:2
                   },
                   640:{
                    slidesPerView:1
                   }
                 }}
                >
                {
                    TestimonialsData.map((test) => (
                       <SwiperSlide key={test.id}
                           className={Styles.tCarousel}

                          >
                           <div  className={Styles.testimonial}>
                               <img src={test.image} alt="Testimonials"/>
                               <span>{test.comment}</span>
                               <hr/>
                               <span>{test.name}</span>
                           </div>
                       </SwiperSlide>
                    ))
                }
             </Swiper>
        </div>
    </div>
  )
}

export default Testimonilas