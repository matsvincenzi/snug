import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledMediumSubTitle = styled.p`
  font-size: 20px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;

  @media ${breakpoint.md1} {
    font-size: 18px;
  }

  @media ${breakpoint.sm2} {
    font-size: 16px;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
  }
`
