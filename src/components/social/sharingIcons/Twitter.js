import React from "react"
import { TwitterShareButton } from "react-share"
import slashes from "remove-trailing-slash"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { NoIconShare } from "./NoIconShare"
import TwitterIcon from "../icons/TwitterIcon"

export const Twitter = ({ url, title, children }) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  return children ? (
    <NoIconShare as={TwitterShareButton} url={shareUrl} title={title}>
      {children}
    </NoIconShare>
  ) : (
    <TwitterShareButton url={shareUrl} title={title}>
      <TwitterIcon />
    </TwitterShareButton>
  )
}
