import React from "react"
import { FacebookShareButton } from "react-share"
import slashes from "remove-trailing-slash"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import FacebookIcon from "../icons/FacebookIcon"
import { NoIconShare } from "./NoIconShare"

export const Facebook = ({ url, title, children = false }) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  return children ? (
    <NoIconShare as={FacebookShareButton} url={shareUrl} quote={title}>
      {children}
    </NoIconShare>
  ) : (
    <FacebookShareButton url={shareUrl} quote={title}>
      <FacebookIcon />
    </FacebookShareButton>
  )
}
