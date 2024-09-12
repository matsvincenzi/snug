import React from 'react'
import { StyledSmallTitle } from './style'

const SmallTitle = ({ children, color, margin }) => (
  <StyledSmallTitle color={color} margin={margin}>
    {children}
  </StyledSmallTitle>
)

export default SmallTitle
