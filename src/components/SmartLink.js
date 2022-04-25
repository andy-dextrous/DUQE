import React from "react"
import slashes from "remove-trailing-slash"
import { Link as GatsbyLink } from "gatsby"
import { createLocalLink } from "../utils/createLocalLink"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Box, Link, Text } from "@chakra-ui/react"

export const SmartLink = ({ url, children }) => {
  const { wordPressUrl, usePageTransitions } = useThemeOptions()

  if (
    !url.includes(wordPressUrl) &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    const targetRelAttrs = { target: "_blank", rel: "noopener noreferrer" }

    return (
      <Link href={url} {...targetRelAttrs}>
        {children}
      </Link>
    )
  } else {
    return !usePageTransitions ? (
      url === wordPressUrl ? (
        <Box as={GatsbyLink} to="/">
          {children}
        </Box>
      ) : (
        <Box as={GatsbyLink} to={createLocalLink(url, slashes(wordPressUrl))}>
          {children}
        </Box>
      )
    ) : (
      <Text as="span">{children}</Text>
    )
  }
}
