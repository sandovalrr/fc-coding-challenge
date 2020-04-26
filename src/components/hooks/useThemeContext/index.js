import React from 'react'

import { ThemeContext } from '@f1/components/contexts/ThemeProvider'

const useThemeContext = () => {
  return React.useContext(ThemeContext)
}

export { useThemeContext }
