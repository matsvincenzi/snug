import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledBigTitle = styled.h1`
  font-size: 52px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;

  @media ${breakpoint.md1} {
    font-size: 48px;
  }

  @media ${breakpoint.sm2} {
    font-size: 44px;
  }

  @media ${breakpoint.sm1} {
    font-size: 40px;
  }
`
