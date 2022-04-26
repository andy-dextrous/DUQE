import React from "react"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import { Icon, IconButton, Link, Stack } from "@chakra-ui/react"
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaSoundcloud,
  FaTiktok,
  FaVimeo,
} from "react-icons/fa"

import { BsTwitter } from "react-icons/bs"
import { BsYoutube, BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const SocialFollows = ({
  size = "sm",
  button = false,
  variant = "gray",
  color,
  ...styles
}) => {
  const supportedIcons = [
    "dribbble",
    "facebook",
    "github",
    "instagram",
    "linkedin",
    "medium",
    "pinterest",
    "reddit",
    "snapchat",
    "soundcloud",
    "tiktok",
    "twitter",
    "vimeo",
    "youtube",
  ]
  const components = [
    FaDribbble,
    BsFacebook,
    FaGithub,
    RiInstagramFill,
    FaLinkedin,
    FaMedium,
    FaPinterest,
    FaReddit,
    FaSnapchat,
    FaSoundcloud,
    FaTiktok,
    BsTwitter,
    FaVimeo,
    BsYoutube,
  ]

  const { socialFollowLinks } = useThemeOptions()

  return (
    socialFollowLinks && (
      <Stack justify="center" {...styles}>
        {socialFollowLinks.map(({ name, url }) => {
          const index = supportedIcons.indexOf(name.toLowerCase())
          return (
            index > -1 &&
            url && (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${name}`}
                py="2"
                mx="1"
              >
                {button && (
                  <IconButton
                    size={size}
                    variant={variant}
                    aria-label={`Follow on ${name}`}
                    icon={
                      <Icon
                        w={
                          size === "sm"
                            ? "20px"
                            : size === "md"
                            ? "25px"
                            : "30px"
                        }
                        h={
                          size === "sm"
                            ? "20px"
                            : size === "md"
                            ? "25px"
                            : "30px"
                        }
                        as={components[index]}
                        color={color}
                      />
                    }
                  />
                )}
                {!button && (
                  <Icon
                    as={components[index]}
                    color={color}
                    w={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
                    h={size === "sm" ? "20px" : size === "md" ? "25px" : "30px"}
                  />
                )}
              </Link>
            )
          )
        })}
      </Stack>
    )
  )
}
