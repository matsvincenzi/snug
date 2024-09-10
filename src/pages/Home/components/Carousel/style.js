import styled from 'styled-components'
import { SwiperSlide, Swiper } from 'swiper/react'

export const PageCarousel = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0 5vw;
  color: var(--white2);
  height: 30rem;
`

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  max-width: 800px;
  height: 440px;
`

export const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  filter: grayscale(0.6);
  background-size: cover;
  background-position: center;
  position: relative;

  h2 {
    color: var(--whiteDefault);
    /* font-weight: 100; */
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--grey4);
    font-weight: 500;
    background: var(--whiteDefault);
    border-radius: 3.125rem;
    margin: 0 auto;
    padding: 10px 26px;
    font-size: 0.9rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: var(--black1);
    }
  }

  div {
    position: absolute;
    z-index: 1;
    inset: 0;
    background: linear-gradient(rgb(0 0 0 / 0%) 55%, rgb(0 0 0 / 80%));
    transition: 0.25s;
    opacity: 0;
    align-self: stretch;
    padding-bottom: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    /* background-color: var(--grey4); /// */
  }

  &.swiper-slide-active div {
    opacity: 1;
  }

  & > div > div {
    transform: translateY(100px);
    transition: 0.3s;
  }

  &.swiper-slide-active > div > div {
    transform: translateY(0);
  }
`

export const SwiperPaginationStyled = styled.div`
  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background: var(--whiteDefault) !important;
  }

  .swiper-pagination {
    bottom: 10px !important;
    transform: scale(1.3);
  }
`
