import React from "react"
import { Link } from "gatsby"
import { useThemeOptions } from "../../hooks/useThemeOptions"
// import { SmartImage } from "../SmartImage"
import { Categories } from "./Categories"
import { Box, Heading, Progress, Text, Tooltip, VStack } from "@chakra-ui/react"
import { SocialShare } from "../../components/social/SocialShare"

const Author = React.forwardRef(({ data, progress, ...props }, ref) => {
  const { createUsers } = useThemeOptions()

  return (
    <VStack
      spacing={6}
      align="start"
      p={[8, 8, 16]}
      bg={["brandYellow.default", "brandYellow.default", "transparent"]}
      ref={ref}
      width={["100%", "100%", "auto"]}
      rounded="2xl"
      {...props}
    >
      <Box width="full">
        <Progress
          value={progress}
          width="full"
          display={["none", "none", "block"]}
          h="5px"
          mb="12"
          sx={{
            "div[role=progressbar]": {
              bg: "brandYellow.default",
            },
          }}
        />
        <Text>Author</Text>
        {createUsers ? (
          <Link to={data.author.node.uri} color="unset">
            <Tooltip
              label={`Read more articles by ${data.author.node.firstName}`}
              hasArrow
              placement="right"
              bg="brandGreen.600"
              color="white"
            >
              <Heading
                as="h4"
                fontSize="18px"
                fontWeight="semibold"
                color="brandCharcoal.500"
              >
                {data.author.node.name}
              </Heading>
            </Tooltip>
          </Link>
        ) : (
          <Heading as="h4" fontSize="18px" fontWeight="semibold">
            {data.author.node.name}
          </Heading>
        )}
      </Box>
      <Box>
        <Text>Date</Text>
        <Heading as="time" fontSize="18px" fontWeight="semibold">
          {data.date}
        </Heading>
      </Box>
      <Categories data={data.categories} />
      <SocialShare />
    </VStack>
  )
})

export default Author
