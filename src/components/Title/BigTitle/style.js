import styled from 'styled-components'

export const StyledBigTitle = styled.h1`
  font-size: 52px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;
`
