import { Button, Center, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import { useVariable } from "../../../hooks/useVariable"

function Calculate() {
  const { containerPaddingY, newsletterOffset } = useVariable()
  return (
    <SectionWrapper
      bg="brandYellow.default"
      className="light"
      pb={0}
      containerStyles={{
        py: 0,
        pt: containerPaddingY,
        pb: newsletterOffset,
        h: "full",
      }}
    >
      <Stack spacing={24} direction={["column", "column", "row"]}>
        <VStack
          spacing={[8, 8, 12]}
          align="flex-start"
          flex="1"
          justify="center"
        >
          <Heading>
            Use the DUQE Cost Calculator to get tailored pricing
          </Heading>
          <Heading as="h3" className="thin-h3">
            Do you need more visas? Looking for a more flexible package? Use our
            Cost Calculator to find out the cost of your business setup.
          </Heading>
          <Link to="/cost-calculator">
            {" "}
            <Button>Calculate Cost</Button>
          </Link>
        </VStack>
        <Center mt={20} flex="1" h="full">
          <Image
            height={[
              "60vh",
              "60vh",
              "600px",
              "600px",
              "600px",
              "600px",
              "800px",
            ]}
            src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png"
          />
        </Center>
      </Stack>
    </SectionWrapper>
  )
}

export default Calculate
