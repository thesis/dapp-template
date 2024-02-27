import React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./components/Header"

function DApp() {
  return (
    <>
      <Header />
      <Box as="main" textAlign="center" p={6}>
        Content
      </Box>
    </>
  )
}

export default DApp
