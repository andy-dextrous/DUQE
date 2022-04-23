import React from "react"
import { Box, HStack } from "@chakra-ui/react"
import { Twitter, Facebook, Pinterest, Linkedin } from "./sharingIcons"

export const SocialShare = ({ url, title, media }) => {
  return (
    <>
      <HStack
        as="ul"
        wrap="wrap"
        justify="center"
        mb="8"
        fontSize="xs"
        fontWeight="bold"
        spacing={2}
      >
        <Box as="li">
          <Twitter url={url} title={title} />
        </Box>
        <Box as="li">
          <Facebook url={url} quote={title} />
        </Box>
        <Box as="li">
          <Pinterest url={url} media={media} />
        </Box>
        <Box as="li">
          <Linkedin url={url} title={title} />
        </Box>
      </HStack>
    </>
  )
}
