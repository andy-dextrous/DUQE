import React from "react"
import { Link } from "gatsby"
import { useThemeOptions } from "../../hooks/useThemeOptions"
// import { SmartImage } from "../SmartImage"
import { Categories } from "./Categories"
import { Box, Heading, Progress, Text, Tooltip, VStack } from "@chakra-ui/react"

const Author = React.forwardRef(({ data, progress, ...props }, ref) => {
  const { createUsers } = useThemeOptions()

  return (
    <VStack
      spacing={6}
      align="start"
      pb={12}
      px={16}
      ref={ref}
      width={["100%", "100%", "auto"]}
      bg="white"
      {...props}
    >
      <Box>
        <Progress
          value={progress}
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
    </VStack>
  )
})

export default Author
