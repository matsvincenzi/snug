import React from 'react'
import { StyledMediumTitle } from './style'

const MediumTitle = ({ children, color, margin }) => (
  <StyledMediumTitle color={color} margin={margin}>
    {children}
  </StyledMediumTitle>
)

export default MediumTitle
