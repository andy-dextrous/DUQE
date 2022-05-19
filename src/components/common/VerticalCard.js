import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  AspectRatio,
  Button,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"

function VerticalCard({
  image,
  title,
  published,
  readTime,
  excerpt,
  useGatsbyImage,
  as = "div",
}) {
  return (
    <VStack
      align="start"
      spacing={4}
      as={"article"}
      sx={{
        ".gatsby-image-wrapper": {
          transition: "all .3s ease-out",
          _hover: { transform: "scale(1.05)" },
        },
      }}
    >
      <AspectRatio
        ratio={4 / 3}
        w="100%"
        overflow="hidden"
        rounded="xl"
        bg={image ? null : "brandGreen.600"}
        as="figure"
        mb={4}
      >
        {useGatsbyImage ? (
          <GatsbyImage
            image={getImage(image)}
            as="figure"
            boxSize="100%"
            className="gatsby-image-wrapper"
          />
        ) : (
          <Image
            src={image}
            boxSize="100%"
            transition="all .3s ease-out"
            _hover={{ transform: "scale(1.05)" }}
          />
        )}
      </AspectRatio>
      <VStack align="start" spacing={4}>
        <Heading as="h4" fontSize="lg" color="dark.default">
          {title}
        </Heading>
        <Text noOfLines={2} dangerouslySetInnerHTML={{ __html: excerpt }} />
        {published && (
          <Text fontSize="sm" color="gray.400">
            {"Published " + published + ", " + readTime + " minute read."}
          </Text>
        )}
        <Button variant="secondary">Read More</Button>
      </VStack>
    </VStack>
  )
}

export default VerticalCard
