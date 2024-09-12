import React from 'react'
import { StyledSmallSubTitle } from './style'

const SmallSubTitle = ({ children, color, margin, maxWidth }) => (
  <StyledSmallSubTitle color={color} margin={margin} maxWidth={maxWidth}>
    {children}
  </StyledSmallSubTitle>
)

export default SmallSubTitle
