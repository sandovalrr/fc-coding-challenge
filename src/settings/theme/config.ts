import { ThemeOptions } from '@material-ui/core/styles'
import { red, common } from '@material-ui/core/colors'
import { skyBlue } from '@f1/settings/colors/lightTheme'

enum Themes {
  Default = 'default',
}

const themeConfig: Record<Themes, ThemeOptions> = {
  default: {
    palette: {
      type: 'light',
      primary: skyBlue,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
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
