import React from "react"
import { PinterestShareButton } from "react-share"
import slashes from "remove-trailing-slash"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { NoIconShare } from "./NoIconShare"
import PinterestIcon from "../icons/PinterestIcon"

export const Pinterest = ({ url, media, title, children }) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  const shareMedia = `${slashes(siteUrl)}${media}`

  return children ? (
    <NoIconShare
      as={PinterestShareButton}
      url={shareUrl}
      media={shareMedia}
      description={title}
    >
      {children}
    </NoIconShare>
  ) : (
    <PinterestShareButton url={shareUrl} media={shareMedia}>
      <PinterestIcon />
    </PinterestShareButton>
  )
}
