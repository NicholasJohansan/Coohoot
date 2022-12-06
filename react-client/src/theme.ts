import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,

  disableTransitionOnChange: false,
}

const semanticTokens = {
  colors: {
    brand: {
      default: '#136CD7'
    },
    'brand.accent': {
      default: '#1059B1',
      _dark: "#1880FF"
    },
    'brand.highlight': {
      default: '#C9E2FF',
      _dark: '#002046'
    }
  }
}

const colors = {
  brand: {
    50: '#e1f2ff',
    100: '#b4d6fe',
    200: '#87baf8',
    300: '#599ff2',
    400: '#2c83ec',
    500: '#136ad3',
    600: '#0852a5',
    700: '#013b77',
    800: '#00234a',
    900: '#000d1e'
  }
}

const theme = extendTheme({
  config,
  semanticTokens,
  colors
})

export default theme