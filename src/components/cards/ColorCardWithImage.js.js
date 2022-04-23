import { Link } from "gatsby"
import React from "react"
import {
  Center,
  Heading,
  Stack,
  Image,
  VStack,
  Text,
  Button,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react"

function ColorCardWithImage(props) {
  const {
    color,
    imageSize,
    image,
    title,
    content,
    buttonText,
    link,
    vertical,
  } = props

  const buttonSize = useBreakpointValue(["sm", "lg"])

  function getBgColor(color) {
    let brandColor
    switch (color) {
      case "blue":
        brandColor = "brandBlue.900"
        break
      case "lightblue":
        brandColor = "brandBlue.50"
        break
      case "green":
        brandColor = "brandGreen.300"
        break
      case "chestnut":
        brandColor = "brandChestnut.200"
        break
      case "yellow":
        brandColor = "brandYellow.600"
        break
      default:
        brandColor = "brandBlue.900"
        break
    }
    return brandColor
  }

  function getButtonColor(color) {
    let buttonColor
    switch (color) {
      case "blue":
        buttonColor = "yellow"
        break
      case "lightblue":
        buttonColor = "yellow"
        break
      case "green":
        buttonColor = "yellow"
        break
      case "chestnut":
        buttonColor = "white"
        break
      case "yellow":
        buttonColor = "dark"
        break
      default:
        buttonColor = "green"
        break
    }
    return buttonColor
  }

  function getTextColor(color) {
    let textColor
    switch (color) {
      case "blue":
        textColor = "white"
        break
      case "lightblue":
        textColor = "brandBlue.900"
        break
      case "green":
        textColor = "brandBlue.900"
        break
      case "chestnut":
        textColor = "white"
        break
      case "yellow":
        textColor = "brandBlue.900"
        break
      default:
        textColor = "white"
        break
    }
    return textColor
  }

  function getImageSize(color) {
    let flex
    switch (color) {
      case "sm":
        flex = "1"
        break
      case "md":
        flex = "2"
        break
      case "lg":
        flex = "3"
        break
      default:
        flex = "2"
        break
    }
    return flex
  }

  return (
    <Stack
      bg={getBgColor(color)}
      rounded="xl"
      overflow="hidden"
      direction={["column", "column", vertical ? "column" : "row"]}
    >
      <Box
        overflow="hidden"
        flex={getImageSize(imageSize)}
        h={["50%", "50%", "auto"]}
      >
        <Image src={image} boxSize="100%" objectFit="cover" />
      </Box>
      <Center flex="2" py={[16, 16, vertical ? 16 : 40]}>
        <VStack spacing={4}>
          <Heading as="h4" color={getTextColor(color)} size="lg">
            {title}
          </Heading>
          <Text color={getTextColor(color)} w="60%" textAlign="center">
            {content}
          </Text>
          <Link to={link}>
            <Button variant={getButtonColor(color)} size={buttonSize}>
              {buttonText}
            </Button>
          </Link>
        </VStack>
      </Center>
    </Stack>
  )
}

export default ColorCardWithImage
