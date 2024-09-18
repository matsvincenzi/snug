import styled from 'styled-components'
import { SwiperSlide, Swiper } from 'swiper/react'
import breakpoint from '../../../../styles/breakpoints'

export const PageCarousel = styled.section`
  display: flex;
  align-items: center;
  padding: 0 5vw;
  color: var(--white2);
`

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  max-width: 50rem;
  height: 27.5rem;

  @media ${breakpoint.sm1} {
    height: 17rem;
  }
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
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 10px;
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
    border-radius: 50px;
    margin: 0 auto;
    padding: 10px 26px;
    font-size: 14px;
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
    padding-bottom: 4.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
  }

  &.swiper-slide-active div {
    opacity: 1;
  }

  & > div > div {
    transform: translateY(6.25rem);
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
