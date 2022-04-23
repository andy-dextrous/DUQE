import React from "react"
import { Link as GatsbyLink } from "gatsby"
import TopMenu from "./TopMenu"
import YoutubeIcon from "../social/icons/YoutubeIcon"
import FacebookIcon from "../social/icons/FacebookIcon"
import InstagramIcon from "../social/icons/InstagramIcon"
import LinkedinIcon from "../social/icons/LinkedinIcon"
import { useThemeOptions } from "../../hooks/useThemeOptions"
// import SearchToggle from "../search/SearchToggle"
import { Button, HStack, Link, useBreakpointValue } from "@chakra-ui/react"

function TopBar({ startDark, darkButton = false }) {
  const shouldDisplaySidebar = useBreakpointValue([false, false, true])
  const { socialFollowLinks } = useThemeOptions()
  const youtubeLink = socialFollowLinks.filter(
    link => link.name === "youtube"
  )[0].url
  const facebookLink = socialFollowLinks.filter(
    link => link.name === "facebook"
  )[0].url
  const instagramLink = socialFollowLinks.filter(
    link => link.name === "instagram"
  )[0].url
  const linkedinLink = socialFollowLinks.filter(
    link => link.name === "linkedin"
  )[0].url

  return shouldDisplaySidebar ? (
    <HStack
      as="aside"
      height="116px"
      position="absolute"
      top="0"
      width="100vw"
      zIndex="sticky"
      justify="flex-end"
    >
      <HStack spacing="6" pr="45px">
        <TopMenu startDark={startDark} />
        <HStack spacing={3} as="nav" alignItems="center" justify="center">
          <Link
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on Instagram`}
            display="flex"
            alignItems="center"
          >
            <InstagramIcon
              size="sm"
              color={startDark ? "brandBlue.900" : "white"}
              _hover={{ color: "brandGreen.600" }}
            />
          </Link>
          <Link
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on LinkedIn`}
            display="flex"
            alignItems="center"
          >
            <LinkedinIcon
              size="sm"
              color={startDark ? "brandBlue.900" : "white"}
              _hover={{ color: "brandGreen.600" }}
            />
          </Link>
          <Link
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on Facebook`}
            display="flex"
            alignItems="center"
          >
            <FacebookIcon
              size="sm"
              color={startDark ? "brandBlue.900" : "white"}
              _hover={{ color: "brandGreen.600" }}
            />
          </Link>
          <Link
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on Youtube`}
            display="flex"
            alignItems="center"
          >
            <YoutubeIcon
              size="sm"
              color={startDark ? "brandBlue.900" : "white"}
              _hover={{ color: "brandGreen.600" }}
            />
          </Link>
          {/* <SearchToggle
            button={false}
            color={startDark ? "brandBlue.900" : "white"}
            _hover={{ color: "brandGreen.600" }}
          /> */}
        </HStack>
        <Link
          as={GatsbyLink}
          _hover={{ textDecoration: "none" }}
          to="/contact-us"
        >
          <Button variant={darkButton ? "dark" : "green"} size="sm">
            Book a free consultation
          </Button>
        </Link>
      </HStack>
    </HStack>
  ) : (
    <></>
  )
}

export default TopBar
