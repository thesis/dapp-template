import { StyleFunctionProps, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const defaultTheme = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        backgroundColor: mode("white", "black")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
}

const theme = extendTheme(defaultTheme)

export default theme
