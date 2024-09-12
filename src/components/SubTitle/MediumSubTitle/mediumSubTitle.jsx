import React from 'react'
import { StyledMediumSubTitle } from './style'

const MediumSubTitle = ({ children, color, margin }) => (
  <StyledMediumSubTitle color={color} margin={margin}>
    {children}
  </StyledMediumSubTitle>
)

export default MediumSubTitle
