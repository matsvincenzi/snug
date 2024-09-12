import styled from 'styled-components'

export const StyledMediumSubTitle = styled.p`
  font-size: 20px;
  color: ${({ color }) => color || 'var(--greyDefault)'};
  margin: ${({ margin }) => margin || '0'};
  line-height: 1.6;
`
