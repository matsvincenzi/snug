import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`
export const MainContent = styled.main`
  padding-top: 48px;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin-right: 15rem;
  margin-left: 15rem;

  section {
    margin: 0 auto;
    padding: 16px;
  }
`
//

export const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  height: 20rem;
`

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  text-align: left;
  margin-top: 24px;
`

export const Buttons = styled.button`
  padding: 12px 20px;
  background: none;
  border: 1.5px solid var(--greyDefault);
  color: var(--whiteDefault);
  font-weight: 300;
  border-radius: 8px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: var(--grey2);
  }
`

//

export const TechSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0; //
`

export const TechContainer = styled.div`
  text-align: center;
  width: 100%;
`

export const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`
export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--greyDefault);
  transition: color 0.3s ease-in-out;

  svg {
    font-size: 48px;
    margin-bottom: 0.5rem;
    transition: transform 0.5s ease-in-out;
  }

  &:nth-child(1) {
    animation: icon-sequence 12s infinite;
  }
  &:nth-child(2) {
    animation: icon-sequence 12s infinite 1.33s;
  }
  &:nth-child(3) {
    animation: icon-sequence 12s infinite 2.67s;
  }
  &:nth-child(4) {
    animation: icon-sequence 12s infinite 4s;
  }
  &:nth-child(5) {
    animation: icon-sequence 12s infinite 5.33s;
  }
  &:nth-child(6) {
    animation: icon-sequence 12s infinite 6.67s;
  }
  &:nth-child(7) {
    animation: icon-sequence 12s infinite 8s;
  }
  &:nth-child(8) {
    animation: icon-sequence 12s infinite 9.33s;
  }
  &:nth-child(9) {
    animation: icon-sequence 12s infinite 10.67s;
  }

  @keyframes icon-sequence {
    0%,
    20%,
    100% {
      color: var(--greyDefault);
      transform: scale(1);
    }
    10% {
      color: var(--whiteDefault);
      transform: scale(1.2);
    }
    30% {
      color: var(--greyDefault);
      transform: scale(1);
    }
  }
`

export const IconLabel = styled.span`
  font-size: 16px;
`

//

export const ContentSection = styled.div`
  display: flex;
  height: 30rem;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 48px;
`

export const ContentImg = styled.img`
  height: 380px;
  width: 1000px;
  padding: 16px 20px;
  margin-right: 5rem;
`

export const ContentContainer = styled.div`
  margin-left: 5rem;

  display: flex;
  flex-direction: column;
`

//

export const ContactSection = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
`

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 400px;
`

export const IconContact = styled.div`
  margin-bottom: 24px;

  svg {
    font-size: 48px;
  }
`
export const ContactLink = styled.a`
  font-size: 16px;
  text-decoration: underline;
  margin-top: 24px;
  color: var(--greyDefault);
  transition: var(--transition-all-ease-fast);

  &:hover {
    color: var(--whiteDefault);
  }
`

//
