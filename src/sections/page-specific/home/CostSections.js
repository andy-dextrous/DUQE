import { Box } from "@chakra-ui/react"
import React, { useState } from "react"
import CostCalculator from "./CostCalculater"
import HowMuchDoesItCost from "./HowMuchDoesItCost"

function CostSections() {
  const [darkActive, setDarkActive] = useState(false)

  return (
    <Box bg={darkActive ? "dark.default" : "transparent"} id="dark-wrapper">
      <HowMuchDoesItCost
        darkActive={darkActive}
        setDarkActive={setDarkActive}
      />
      <CostCalculator />
    </Box>
  )
}

export default CostSections
