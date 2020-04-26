import { ThemeOptions } from '@material-ui/core/styles'
import { red, common } from '@material-ui/core/colors'
import { defaultColors } from '@f1/settings/colors/lightTheme'

enum Themes {
  Default = 'default',
}

const themeConfig: Record<Themes, ThemeOptions> = {
  default: {
    palette: {
      type: 'light',
      primary: defaultColors,
      secondary: {
        light: defaultColors[100],
        main: defaultColors[500],
        dark: defaultColors[900],
      },
      background: {
        paper: common.white,
        default: '#F7F7F7',
      },
      error: red,
    },
  },
}

export { themeConfig, Themes }
