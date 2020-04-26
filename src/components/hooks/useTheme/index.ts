import React from 'react'

import { Themes, themeConfig } from '@f1/settings/theme/config'
import { createMuiTheme } from '@material-ui/core'

type Options = {
  initialTheme?: Themes
}

const useTheme = ({ initialTheme = Themes.Default }: Options = {}) => {
  const [theme, setTheme] = React.useState<Themes>(initialTheme)
  const mainTheme = React.useMemo(() => createMuiTheme(themeConfig[theme]), [theme])

  return {
    setTheme,
    mainTheme,
  }
}

export { useTheme }
