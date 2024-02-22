import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import DApp from "./DApp"

function DAppProviders() {
  return (
    <ChakraProvider theme={theme}>
      <DApp />
    </ChakraProvider>
  )
}

export default DAppProviders
