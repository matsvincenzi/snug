import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const StyledMediumTitle = styled.h1`
  font-size: 36px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  margin-bottom: 24px;
  line-height: 1.5;

  @media ${breakpoint.md1} {
    font-size: 34px;
  }

  @media ${breakpoint.sm2} {
    font-size: 32px;
  }

  @media ${breakpoint.sm1} {
    font-size: 30px;
  }
`
