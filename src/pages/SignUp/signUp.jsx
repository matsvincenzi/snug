import { Header } from '../../components/Header/header'
import logo from '../../assets/images/snug.png'
import FormInput from '../../components/FormInput/formInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import formValidation from './validation'
import { Footer } from '../../components/Footer/footer'
import {
  PageContainer,
  Container,
  ModalBox,
  LogoBox,
  Logo,
  FormBox,
  Title,
  SubTitle,
  ButtonSubmit,
  GoogleLogin,
  AlternativeJoin,
  JoinLink,
} from './style'
import { useState } from 'react'

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(formValidation),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <PageContainer>
        <Header />
        <Container>
          <ModalBox>
            <LogoBox>
              <Logo src={logo} alt="logo" />
            </LogoBox>
            <FormBox>
              <Title>Make your registration</Title>
              <SubTitle>Make this the best place for your money!</SubTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  type="text"
                  label="User"
                  placeholder="Enter your username"
                  errors={errors}
                  register={register}
                  registerName="username"
                />
                <FormInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  errors={errors}
                  register={register}
                  registerName="email"
                />
                <FormInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  errors={errors}
                  register={register}
                  registerName="password"
                />
                <ButtonSubmit>Register</ButtonSubmit>
                <GoogleLogin>Login with google</GoogleLogin>
                <AlternativeJoin>
                  Already registered?
                  <JoinLink href="#">Login</JoinLink>
                </AlternativeJoin>
              </form>
            </FormBox>
          </ModalBox>
        </Container>
        <Footer />
      </PageContainer>
    </>
  )
}
