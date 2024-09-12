import React from 'react'
import { StyledBigTitle } from './style'

const BigTitle = ({ children, color, margin }) => (
  <StyledBigTitle color={color} margin={margin}>
    {children}
  </StyledBigTitle>
)

export default BigTitle
