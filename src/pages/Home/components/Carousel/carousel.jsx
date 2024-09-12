import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import image1 from '../../../../assets/images/grey.png'
import image2 from '../../../../assets/images/grey.png'
import image3 from '../../../../assets/images/grey.png'
import image4 from '../../../../assets/images/grey.png'
import image5 from '../../../../assets/images/grey.png'

import {
  PageCarousel,
  SwiperContainer,
  StyledSwiperSlide,
  SwiperPaginationStyled,
} from './style'

const slides = [
  {
    title: '1 Series',
    image: image1,
  },
  {
    title: '2 Series',
    image: image2,
  },
  {
    title: '3 Series',
    image: image3,
  },
  {
    title: '4 Series',
    image: image4,
  },
  {
    title: '5 Series',
    image: image5,
  },
]

export const Carousel = () => {
  return (
    <PageCarousel>
      <SwiperContainer
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow, Autoplay]}
      >
        {slides.map((slide) => (
          <StyledSwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <a href="#">explore</a>
              </div>
            </div>
          </StyledSwiperSlide>
        ))}
      </SwiperContainer>
      <SwiperPaginationStyled />
    </PageCarousel>
  )
}
