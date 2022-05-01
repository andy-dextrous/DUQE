import React from "react"
import { Link } from "gatsby"
import { useThemeOptions } from "../../hooks/useThemeOptions"
// import { SmartImage } from "../SmartImage"
import { Categories } from "./Categories"
import { Box, Heading, Text, Tooltip, VStack } from "@chakra-ui/react"

const Author = React.forwardRef(({ data, ...props }, ref) => {
  const { createUsers } = useThemeOptions()

  return (
    <VStack
      spacing={6}
      bg="brandConcrete.default"
      align="start"
      py={12}
      px={16}
      rounded="2xl"
      position="sticky"
      top={40}
      left="0"
      ref={ref}
      width={["100%", "100%", "auto"]}
      {...props}
    >
      <VStack
        justify="center"
        w="full"
        sx={{
          ".author-image": {
            borderRadius: "50%",
            overflow: "hidden",
            width: ["200px", "200px", "100px"],
            height: ["200px", "200px", "100px"],
          },
        }}
      ></VStack>
      <Box>
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
