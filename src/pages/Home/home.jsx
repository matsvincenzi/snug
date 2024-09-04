import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
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
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
