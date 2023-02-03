import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from 'styled-components'
import Store from '@/redux'
import Router from '@/router'
import Theme from '@/theme'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
const tree = (
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />

        <RouterProvider router={Router} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)

root.render(tree)
