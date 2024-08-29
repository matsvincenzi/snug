import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2px 0;
  align-items: start;
  transition: var(--transition-default-fast);
`

export const Label = styled.label`
  font-size: 14px;
  color: var(--greyDefault);
  font-weight: 400;
  margin: 5px 0px 5px 0px;
  @media ${breakpoint.md1} {
    font-size: 12px;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    width: 8px;
  }
`

export const Input = styled.input`
  width: 22rem;
  height: 2.6rem;
  border-radius: 8px;
  border: 1.5px solid var(--grey3);
  background: none;
  background-color: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.015);
  font-size: 13px;
  color: var(--grey8);
  padding-left: 1rem;

  &:focus {
    outline: none;
    border-color: var(--grey6);
    color: var(--greyDefault);
    transition: var(--transition-color-slow), var(--transition-bg-shadow);
  }

  @media ${breakpoint.md1} {
    width: 20rem;
    height: 2.4rem;
  }
  @media ${breakpoint.sm2} {
    font-size: 9px;
    width: 13rem;
    height: 2rem;
  }
`

export const ErrorText = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 22rem;
  font-weight: 400;
  font-size: 11px;
  color: var(--erro);
  padding: 0.5rem 0 0 0;
  @media ${breakpoint.md1} {
    max-width: 20rem;
    font-size: 10px;
  }
  @media ${breakpoint.sm2} {
    font-size: 7px;
    width: 13rem;
    margin-bottom: 2px;
  }
`
