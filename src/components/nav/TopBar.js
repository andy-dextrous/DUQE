import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Button,
  HStack,
  IconButton,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useThemeOptions } from "../../hooks/useThemeOptions"
import TopMenu from "./TopMenu"
import SearchToggle from "../search/SearchToggle"
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"

function TopBar() {
  const shouldDisplaySidebar = useBreakpointValue([false, false, true])
  const { topBarHeight } = useThemeOptions()

  return shouldDisplaySidebar ? (
    <HStack
      as="aside"
      height={`${topBarHeight}px`}
      position="absolute"
      top="0"
      width="100vw"
      zIndex="sticky"
      justify="flex-end"
    >
      <HStack spacing="6" pr="50px">
        <HStack spacing={2}>
          <IconButton
            variant="outline"
            bg="transparent"
            color="white"
            border="none"
            transformOrigin="50% 50%"
            rounded="full"
            size="md"
            display={["none", "none", "flex"]}
            _hover={{ transform: "scale(1.2)", bg: "rgba(255,255,255,0.1)" }}
            _focus={{ color: "dark.default" }}
            _active={{ color: "dark.default", transform: "scale(1.1)" }}
            icon={<IoLogoWhatsapp size="24px" color="#25d366" />}
          ></IconButton>
          <Link href="tel:+97148716555">
            <IconButton
              variant="outline"
              bg="transparent"
              color="white"
              border="none"
              transformOrigin="50% 50%"
              rounded="full"
              size="md"
              display={["none", "none", "flex"]}
              _hover={{ transform: "scale(1.2)", bg: "rgba(255,255,255,0.1)" }}
              _focus={{ color: "dark.default" }}
              _active={{ color: "dark.default", transform: "scale(1.1)" }}
              icon={<BsFillTelephoneFill size="22px" color="#62c6c1" />}
            />
          </Link>
          <SearchToggle
            bg="transparent"
            color="white"
            border="none"
            transformOrigin="50% 50%"
            rounded="full"
            size="md"
            iconProps={{ size: "20px" }}
            display={["none", "none", "flex"]}
            _hover={{ transform: "scale(1.2)", bg: "rgba(255,255,255,0.1)" }}
            _focus={{ color: "dark.default" }}
            _active={{ color: "dark.default", transform: "scale(1.1)" }}
          />
        </HStack>
        <TopMenu />

        <Link as={GatsbyLink} to="/cost-calculator">
          <Button variant="secondary">Cost Calculator</Button>
        </Link>
      </HStack>
    </HStack>
  ) : (
    <></>
  )
}

export default TopBar
