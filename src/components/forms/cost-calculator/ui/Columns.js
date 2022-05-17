import React from "react"
import { useVariable } from "../../../../hooks/useVariable"
import { Stack } from "@chakra-ui/react"

function Columns({ children }) {
  const { mobileNavHeight } = useVariable()
  return (
    <Stack
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      mt={mobileNavHeight}
      w="full"
      spacing="0"
    >
      {children}
    </Stack>
  )
}

export default Columns
