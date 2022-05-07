import React from "react"
import { HStack, IconButton } from "@chakra-ui/react"
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
        className="share"
        sx={{ "&.share li": { listStyle: "none" } }}
      >
        <IconButton as="li" variant="socialShare">
          <Twitter url={url} title={title} />
        </IconButton>
        <IconButton as="li" variant="socialShare">
          <Facebook url={url} quote={title} />
        </IconButton>
        <IconButton as="li" variant="socialShare">
          <Pinterest url={url} media={media} />
        </IconButton>
        <IconButton as="li" variant="socialShare">
          <Linkedin url={url} title={title} />
        </IconButton>
      </HStack>
    </>
  )
}
