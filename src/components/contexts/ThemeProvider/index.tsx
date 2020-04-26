import React from 'react'

import { Themes } from '@f1/settings/theme/config'

type ThemeContextOption = {
  setTheme: (theme: Themes) => void
}

const ThemeContext = React.createContext<ThemeContextOption>({
  setTheme: () => null,
})

const ThemeContextProvider = ThemeContext.Provider

export { ThemeContext, ThemeContextProvider }
