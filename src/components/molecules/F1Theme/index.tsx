import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { useTheme } from '@f1/components/hooks/useTheme'
import { ThemeContextProvider } from '@f1/components/contexts/ThemeProvider'

type Props = {}

const F1Theme: React.FC<Props> = ({ children }) => {
  const { mainTheme, setTheme, theme } = useTheme()

  return (
    <ThemeProvider theme={mainTheme}>
      <ThemeContextProvider value={{ setTheme, theme }}>{children}</ThemeContextProvider>
    </ThemeProvider>
  )
}

export { F1Theme }
