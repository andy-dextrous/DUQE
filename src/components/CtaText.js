import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"

function CtaText({ theme, subtitle, title, text, link, buttonText, fadeText }) {
  return (
    <VStack
      spacing={[3, 3, 3, 3, 3, 4]}
      py={4}
      align={["center", "center", "start"]}
      position="relative"
      flex={["1", "1", "3"]}
      textAlign={["center", "center", "left"]}
    >
      <Heading as="h4" textStyle="h4" fontSize="16px" fontWeight="semibold">
        {subtitle}
      </Heading>
      <Heading
        as="h1"
        fontSize={["2xl", "3xl", "3xl", "5xl", "6xl"]}
        fontWeight="extrabold"
        color="brandYellow.600"
      >
        {title}
      </Heading>
      <Heading textStyle="fadeTextLeft" fontSize={["25vw", "25vw", "12vw"]}>
        {fadeText}
      </Heading>
      <Text color="white">{text}</Text>
      <Link to={link}>
        <Button variant="green" size="lg">
          {buttonText}
        </Button>
      </Link>
    </VStack>
  )
}

export default CtaText
