import { useEffect, useState } from 'react'
import logo from '../../assets/images/snug.png'
import {
  HeaderComp,
  LogoBox,
  Logo,
  ContainerElements,
  Element,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  ContainerButtons,
  Button,
  BtnMenu,
} from './style'
import { FiLogIn } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleControllHeader = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      const scrollDifference = scrollPosition - prevScrollPos
      if (scrollDifference > 0 && scrollPosition > 88) {
        // 5.5 * 16 = 88
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setPrevScrollPos(scrollPosition)
    }

    window.addEventListener('scroll', handleControllHeader)

    return () => {
      window.removeEventListener('scroll', handleControllHeader)
    }
  }, [prevScrollPos])

  return (
    <HeaderComp
      style={{ transform: showHeader ? 'translateY(0)' : 'translateY(-60%)' }}
    >
      <LogoBox>
        <Logo src={logo} alt="Snug logo" />
      </LogoBox>
      <ContainerElements>
        <Element href="#">Link 1</Element>
        <Element href="#">Link 2</Element>
        <Dropdown>
          <Element role="button" tabIndex="0">
            Options
          </Element>
          <DropdownMenu>
            <DropdownItem href="#">Ação 1</DropdownItem>
            <DropdownItem href="#">Ação 2</DropdownItem>
            <DropdownItem href="#">Ação 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ContainerButtons>
          <Button onClick={() => {}} bgColorHover="#dbdbdb">
            <FiLogIn style={{ marginLeft: '8px' }} />
            Login
          </Button>
        </ContainerButtons>
        <BtnMenu onClick={() => setIsOpen(true)}>
          <IoMenu />
        </BtnMenu>
      </ContainerElements>
    </HeaderComp>
  )
}
