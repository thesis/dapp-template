import React from "react"
import { Box, Heading } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box as="header" textAlign="center" p={6}>
      <Heading as="h1">Header</Heading>
    </Box>
  )
}
