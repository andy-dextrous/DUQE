import React from "react"
import { LinkedinShareButton } from "react-share"
import slashes from "remove-trailing-slash"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { NoIconShare } from "./NoIconShare"
import LinkedinIcon from "../icons/LinkedinIcon"

export const Linkedin = ({ url, title, children = false }) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  return children ? (
    <NoIconShare as={LinkedinShareButton} url={shareUrl}>
      {children}
    </NoIconShare>
  ) : (
    <LinkedinShareButton url={shareUrl} title={title}>
      <LinkedinIcon />
    </LinkedinShareButton>
  )
}
