import React from 'react'
import { StyledSmallSubTitle } from './style'

const SmallSubTitle = ({ children, color, margin }) => (
  <StyledSmallSubTitle color={color} margin={margin}>
    {children}
  </StyledSmallSubTitle>
)

export default SmallSubTitle
