import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledSmallTitle = styled.h1`
  font-size: 28px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  margin-bottom: 16px;
  line-height: 1.4;

  @media ${breakpoint.md1} {
    font-size: 26px;
  }

  @media ${breakpoint.sm1} {
    font-size: 24px;
  }

  @media ${breakpoint.sm1} {
    font-size: 22px;
  }
`
