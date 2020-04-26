import React from 'react'

import { Themes } from '@f1/settings/theme/config'

type ThemeContextOption = {
  theme: Themes
  setTheme: (theme: Themes) => void
}

const ThemeContext = React.createContext<ThemeContextOption>({
  setTheme: () => null,
  theme: Themes.Default,
})

const ThemeContextProvider = ThemeContext.Provider

export { ThemeContext, ThemeContextProvider }
