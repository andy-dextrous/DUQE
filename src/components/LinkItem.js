import React from "react"
import slashes from "remove-trailing-slash"
import { Link as GatsbyLink } from "gatsby"
import { createLocalLink } from "../../utils/createLocalLink"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Box, chakra } from "@chakra-ui/react"

export const LinkItem = ({ menuItem }) => {
  // TODO incoporate page transitions

  const { wordPressUrl } = useThemeOptions()
  let url = menuItem.url

  if (
    !url.includes(wordPressUrl) &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    const targetRelAttrs =
      menuItem.target === "_blank"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}
    return (
      <chakra.a textStyle="specialLink" href={url} {...targetRelAttrs}>
        {menuItem.label}
      </chakra.a>
    )
  } else {
    return url !== "#" ? (
      url === wordPressUrl ? (
        <Box
          as={GatsbyLink}
          textStyle="specialLink"
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      ) : (
        <Box
          as={GatsbyLink}
          textStyle="specialLink"
          fontWeight="bold"
          to={createLocalLink(url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
        />
      )
    ) : (
      <chakra.span textStyle="specialLink">{menuItem.label}</chakra.span>
    )
  }
}
