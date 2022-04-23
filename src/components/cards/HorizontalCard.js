import { AspectRatio, Box, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { Image } from "../../components/images/Image"
import React from "react"

function HorizontalCard({ post, imageWidth = "100px" }) {
  return (
    <HStack align="start" spacing={[4, 4, 8]}>
      <Link to="/insights/the-great-resignation/">
        <AspectRatio
          ratio={1}
          flex="1"
          overflow="hidden"
          rounded="xl"
          minW="100px"
          width={imageWidth}
        >
          <Image img={post.featuredImage.node} w="100%" />
        </AspectRatio>
      </Link>
      <Box flex="2" sx={{ ".excerpt p": { fontSize: "15px" } }}>
        <Link to={post.uri}>
          <Heading as="h4" fontSize="lg" color="brandBlue.900">
            {post.title}
          </Heading>
        </Link>

        <Text
          noOfLines={2}
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        <Text fontSize="sm" color="gray.400">
          {`Published ${post.date}. ${post.seo.readingTime} min read`}
        </Text>
      </Box>
    </HStack>
  )
}

export default HorizontalCard
