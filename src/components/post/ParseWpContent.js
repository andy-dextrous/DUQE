import React from "react"
import parse, { domToReact } from "html-react-parser"
import { Link as GatsbyLink } from "gatsby"
import slashes from "remove-trailing-slash"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import { Link } from "@chakra-ui/react"

function ParseWpContent(content, style) {
  const { siteUrl } = useThemeOptions()

  const options = {
    replace: domNode => {
      const { attribs, children } = domNode
      if (!attribs?.href) return

      const { href } = attribs
      return href.includes(siteUrl) || !href.includes("http") ? (
        <GatsbyLink to={slashes(href)}>
          {domToReact(children, options)}
        </GatsbyLink>
      ) : (
        <Link
          href={slashes(href)}
          target="_blank"
          rel="noopener noreferrer"
          color="brandGreen.700"
        >
          {domToReact(children, options)}
        </Link>
      )
    },
  }

  return <>{parse(content, options)}</>
}

export default ParseWpContent
