import { Button, Heading, Stack } from "@chakra-ui/react"
import React, { forwardRef } from "react"
import YellowHeading from "../../../../components/common/YellowHeading"
import { SmartLink } from "../../../../components/SmartLink"
import { useVariable } from "../../../../hooks"
// import FunButton from "./FunButton"

const Content = forwardRef((props, ref) => {
  const { componentSpacing } = useVariable()
  return (
    <Stack
      direction={["column", "column", "reverse"]}
      alignItems="flex-start"
      width="100%"
      spacing={componentSpacing}
      ref={ref}
    >
      <Heading as="h1" color="white">
        Duqe is for the <YellowHeading>disrupters</YellowHeading>
      </Heading>
      <Heading as="h3" color="white" className="thin-h3">
        Set up your company in DUQE Free Zone, based on the prestigious QE2.
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        w="full"
        spacing={[5, 5, 6]}
      >
        <SmartLink url="/contact-us">
          <Button>Start your business</Button>
        </SmartLink>
        <SmartLink url="/cost-calculator">
          <Button variant="outlineWhite">How much does it cost?</Button>
        </SmartLink>
        {/* <FunButton /> */}
      </Stack>
    </Stack>
  )
})

export default Content
