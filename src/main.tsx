import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      // error: 'red.500',
      // success: 'green.500',
      // primary: {
      //   default: 'red.500',
      //   _dark: 'red.400',
      // },
      // secondary: {
      //   default: 'red.800',
      //   _dark: 'red.700',
      // },
      layer: {
        default: 'cyan.100',
        _dark: 'cyan.900',
      }
    },
  },
  config,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
