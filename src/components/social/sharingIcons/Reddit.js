import React from "react"
import { RedditShareButton, RedditIcon } from "react-share"
import slashes from "remove-trailing-slash"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { NoIconShare } from "./NoIconShare"

export const Reddit = ({
  url,
  title,
  children,
  round = true,
  size = 32,
  borderRadius = 0,
  iconBgStyle = {},
  logoFillColor = "white",
}) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  return children ? (
    <NoIconShare as={RedditShareButton} url={shareUrl} title={title}>
      {children}
    </NoIconShare>
  ) : (
    <RedditIcon
      round={round}
      size={size}
      borderRadius={borderRadius}
      iconBgStyle={iconBgStyle}
      logoFillColor={logoFillColor}
    />
  )
}
