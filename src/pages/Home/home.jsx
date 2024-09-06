import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa'

import { SiSpring } from 'react-icons/si'

import { MdEmail, MdChat, MdPhone } from 'react-icons/md'

import SmallTitle from '../../components/Title/SmallTitle/smallTitle'
import SmallSubTitle from '../../components/SubTitle/SmallSubTitle/smallSubTitle'
import MediumSubTitle from '../../components/SubTitle/MediumSubTitle/mediumSubTitle'

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
  TechSection,
  TechContainer,
  IconsGrid,
  IconItem,
  IconLabel,
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

          <TechSection>
            <TechContainer>
              <MediumSubTitle>
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore
                adipiscing elit.
              </MediumSubTitle>
              <IconsGrid>
                <IconItem>
                  <FaReact />
                  <IconLabel>React</IconLabel>
                </IconItem>
                <IconItem>
                  <FaJs />
                  <IconLabel>JavaScript</IconLabel>
                </IconItem>
                <IconItem>
                  <FaHtml5 />
                  <IconLabel>HTML5</IconLabel>
                </IconItem>
                <IconItem>
                  <FaCss3Alt />
                  <IconLabel>CSS3</IconLabel>
                </IconItem>
                <IconItem>
                  <FaJava />
                  <IconLabel>Java</IconLabel>
                </IconItem>
                <IconItem>
                  <SiSpring />
                  <IconLabel>Spring</IconLabel>
                </IconItem>
                <IconItem>
                  <FaNodeJs />
                  <IconLabel>Node.js</IconLabel>
                </IconItem>
                <IconItem>
                  <FaGitAlt />
                  <IconLabel>Git</IconLabel>
                </IconItem>
                <IconItem>
                  <FaGithub />
                  <IconLabel>GitHub</IconLabel>
                </IconItem>
              </IconsGrid>
            </TechContainer>
          </TechSection>

          <ContactSection>
            <ContactContainer>
              <ContactBox>
                <IconContact>
                  <MdEmail />
                </IconContact>
                <SmallTitle>Email</SmallTitle>
                <SmallSubTitle>
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
