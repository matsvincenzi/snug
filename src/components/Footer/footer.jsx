import React from 'react'
import logo from '../../assets/images/snug.png'
import {
  FooterComp,
  LogoBox,
  Logo,
  LinksContainer,
  MainContainer,
  MainLink,
  SocialIcons,
  SocialIcon,
  Copyright,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from './style'

export const Footer = () => {
  return (
    <FooterComp>
      <LogoBox>
        <Logo src={logo} alt="Logo" />
      </LogoBox>

      <LinksContainer>
        <MainContainer>
          <MainLink href="#">Home</MainLink>
          <MainLink href="#">About</MainLink>
          <MainLink href="#">Services</MainLink>
          <MainLink href="#">Blog</MainLink>
          <MainLink href="#">Contact</MainLink>
        </MainContainer>

        <SocialIcons>
          <SocialIcon
            href="https://www.instagram.com/vincenzicode/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/mateusvincenzi/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/matsvincenzi"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://discord.gg/NHAYF9EryF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SocialIcon>
        </SocialIcons>

        <Copyright>&copy; 2024 Snug. All rights reserved.</Copyright>
      </LinksContainer>
    </FooterComp>
  )
}
