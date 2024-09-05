import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
import { MdEmail, MdChat, MdPhone } from 'react-icons/md'

import SmallTitle from '../../components/Title/SmallTitle/smallTitle'
import SmallSubTitle from '../../components/SubTitle/SmallSubTitle/smallSubTitle'

import {
  PageContainer,
  MainContent,
  WelcomeSection,
  WelcomeContainer,
  TitleContainer,
  Title,
  InfoContainer,
  TitleDescription,
  ContainerButtons,
  Buttons,
  ContactSection,
  ContactContainer,
  ContactBox,
  IconContact,
  ContactLink,
} from './style'

const Home = () => {
  return (
    <>
      <PageContainer>
        <Header />

        <MainContent>
          <WelcomeSection>
            <WelcomeContainer>
              <TitleContainer>
                <Title>Welcome To Snug</Title>
              </TitleContainer>
              <InfoContainer>
                <TitleDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmo.
                </TitleDescription>
                <ContainerButtons>
                  <Buttons>Lorem Ipsum</Buttons>
                  <Buttons>Lorem Ipsum</Buttons>
                </ContainerButtons>
              </InfoContainer>
            </WelcomeContainer>
          </WelcomeSection>

          <ContactSection>
            <ContactContainer>
              <ContactBox>
                <IconContact>
                  <MdEmail />
                </IconContact>
                <SmallTitle>Email</SmallTitle>
                <SmallSubTitle margin-top="10px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SmallSubTitle>
                <ContactLink href="">loremipsum@gmail.com</ContactLink>
              </ContactBox>
              <ContactBox>
                <IconContact>
                  <MdChat />
                </IconContact>
                <SmallTitle>Live Chat</SmallTitle>
                <SmallSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SmallSubTitle>
                <ContactLink href="">Lorem ipsum dolor sit</ContactLink>
              </ContactBox>
              <ContactBox>
                <IconContact>
                  <MdPhone />
                </IconContact>
                <SmallTitle>Phone</SmallTitle>
                <SmallSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </SmallSubTitle>
                <ContactLink href="">+1 (555) 000-0000</ContactLink>
              </ContactBox>
            </ContactContainer>
          </ContactSection>
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
