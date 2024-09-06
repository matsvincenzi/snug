import styled from 'styled-components'

export const StyledMediumTitle = styled.h1`
  font-size: 36px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.5;
`
