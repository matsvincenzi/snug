import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--black1);
`
export const MainContent = styled.main`
  padding-top: 3rem;
  flex: 1;
  text-align: center;
  color: var(--greyDefault);
  margin-right: 15rem;
  margin-left: 15rem;

  section {
    margin: 0 auto;
    padding: 1rem;
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

export const TitleContainer = styled.div`
  justify-content: flex-start;
  line-height: 3.5rem;
`

export const Title = styled.h1`
  font-size: 56px;
  padding-bottom: 20px;
  text-align: left;
  color: var(--greyDefault);
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const TitleDescription = styled.div`
  max-width: 600px;
  text-align: left;
  line-height: 1.6;
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
