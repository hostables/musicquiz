import React from 'react'
import ScreenBar from './ScreenBar'
import '../../variables.css'

const ScreenHeader = ({ children, className }) => (
  <ScreenBar className={className} backgroundColor="var(--primary)">
    {children}
  </ScreenBar>
)

export default ScreenHeader
