import styled from 'styled-components'

export const StyledSmallSubTitle = styled.p`
  font-size: 16px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  text-align: left;
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  line-height: 1.5;
`
