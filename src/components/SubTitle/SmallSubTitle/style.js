import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledSmallSubTitle = styled.p`
  font-size: 17px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: left;
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: 1.5;

  @media ${breakpoint.md1} {
    font-size: 16px;
  }

  @media ${breakpoint.sm2} {
    font-size: 15px;
    text-align: center;
  }

  @media ${breakpoint.sm1} {
    font-size: 14px;
    text-align: center;
  }
`
