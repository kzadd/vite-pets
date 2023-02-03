import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    error: {
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336'
    },
    info: {
      dark: '#0288d1',
      light: '#4fc3f7',
      main: '#29b6f6'
    },
    primary: {
      dark: '#42a5f5',
      light: '#e3f2fd',
      main: '#90caf9'
    },
    secondary: {
      dark: '#ab47bc',
      light: '#f3e5f5',
      main: '#ce93d8'
    },
    success: {
      dark: '#388e3c',
      light: '#81c784',
      main: '#66bb6a'
    },
    warning: {
      dark: '#f57c00',
      light: '#ffb74d',
      main: '#ffa726'
    }
  }
})

export default Theme
