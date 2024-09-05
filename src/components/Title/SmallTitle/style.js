import styled from 'styled-components'

export const StyledSmallTitle = styled.h1`
  font-size: 28px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  margin-bottom: 16px;
  line-height: 1.4;
`
